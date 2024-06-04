import React from 'react';
import Cookie from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Progress } from 'antd';
import { api } from '../Components/helper/axios.instance';
const AuthChecker = ({ children }) => {
    const token = Cookie.get('accessToken');
    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
        (
            async () => {
               try {
                    setLoading(true);
                    const res = await api.get('/center/refresh');
                    Cookie.set('accessToken', res.data.accessToken);
                    Cookie.set('refreshToken', res.data.refreshToken);
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
    // if (!token) {
    //     return <Navigate to="/login" />
    // }
    return children
};

export default AuthChecker;