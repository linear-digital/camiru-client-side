import React from 'react';
import Cookie from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Progress } from 'antd';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/userSlice';
import { isExpired, decodeToken } from "react-jwt";
const AuthChecker = ({ children }) => {
    const token = Cookie.get('token-camiru2');
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
  
    useEffect(() => {
        (
            async () => {
                if (myDecodedToken) {
                    try {
                        setLoading(true);
                        const res = await fetcher({
                            url: '/center/me',
                            method: 'GET',
                        });
                        dispatch(setCurrentUser(res));
                        setLoading(false);
                    } catch (error) {
                        setLoading(false);
                        return <Navigate to="/login" />
                    }
                }
            }
        )()
        if (token) {
            setLoading(false);
        }
    }, [token])

    if (loading) {
        return <Progress />
    }
    if (isMyTokenExpired || !token) {
        return <Navigate to="/login" />
    }
    return children
};

export default AuthChecker;