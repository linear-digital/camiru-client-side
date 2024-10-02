import React from 'react';
import Cookie from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Progress } from 'antd';
import { api } from '../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/userSlice';

const AuthChecker = ({ children }) => {
    const token = Cookie.get('token-camiru');
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        (
            async () => {
                try {
                    setLoading(true);
                    const res = await api.get('/center/me');
                    dispatch(setCurrentUser(res.data));
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                    return <Navigate to="/login" />
                }
            }
        )()
        if (token) {
            setLoading(false);
        }
    }, [])

    if (loading) {
        return <Progress />
    }
    if (!token) {
        return <Navigate to="/login" />
    }
    return children
};

export default AuthChecker;