import React from 'react';
import { useEffect } from 'react';
import { api, fetcher } from '../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setClassRooms } from '../redux/classroom/classSlice';
import { setCurrentUser, setLoading } from '../redux/user/userSlice';
import Cookie from 'js-cookie';
import { decodeToken, isExpired } from 'react-jwt';
import { setBrowserWidth } from '../redux/setting/settingSlice';
import { useNavigate } from 'react-router-dom';

const DefaultFetch = () => {
    const dispatch = useDispatch()
    const token = Cookie.get('token-camiru2')
    const isMyTokenExpired = isExpired(token);
    const navigate = useNavigate()
    const decode = isMyTokenExpired ? null : decodeToken(token);
    useEffect(() => {
        (async () => {
            if (!isMyTokenExpired && decode.role === 'center') {
                try {
                   
                    // dispatch(setLoading(true))
                    const user = await fetcher({
                        url: '/center/me',
                        method: 'GET',
                    });
                    if (user) {
                        const res = await fetcher({
                            url: `/classroom/center/${user._id}`,
                            method: 'GET'
                        })
                        dispatch(setClassRooms(res))
                    }
                    dispatch(setLoading(false))
                   
                    dispatch(setCurrentUser(user))
                } catch (error) {
                    console.log(error)
                    dispatch(setLoading(false))
                }
            }
            
        })()
    }, [token])

    useEffect(() => {

        (async () => {
            if (!isMyTokenExpired && decode.role !== 'admin') {
                try {
                    // dispatch(setLoading(true))
                    if (decode.role === "student") {
                        const user = await fetcher({
                            url: `/${decode.role}/me`,
                            method: 'GET',
                        });
                        dispatch(setCurrentUser(user))
                    }
                    else {
                        const user = await fetcher({
                            url: `/staff/current/me`,
                            method: 'GET',
                        });
                        dispatch(setCurrentUser(user))
                    }
                    dispatch(setLoading(false))
                   
                } catch (error) {
                    console.log(error)
                    dispatch(setLoading(false))
                }
            }
        })()
    },[token])
    useEffect(() => {
        const handleResize = () => {
            dispatch(setBrowserWidth(window.innerWidth))
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return
};

export default DefaultFetch;