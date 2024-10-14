import React from 'react';
import { useEffect } from 'react';
import { api, fetcher } from '../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setClassRooms } from '../redux/classroom/classSlice';
import { setCurrentUser } from '../redux/user/userSlice';
import Cookie from 'js-cookie';
import { isExpired } from 'react-jwt';
import { setBrowserWidth } from '../redux/setting/settingSlice';

const DefaultFetch = () => {
    const dispatch = useDispatch()
    const token = Cookie.get('token-camiru')
    const isMyTokenExpired = isExpired(token);
    useEffect(() => {
        (async () => {
            if (!isMyTokenExpired) {
                try {
                    const res = await fetcher({
                        url: '/classroom',
                        method: 'GET'
                    })
                    const user = await fetcher({
                        url: '/center/me',
                        method: 'GET',
                    });
                    dispatch(setClassRooms(res))
                    dispatch(setCurrentUser(user))
                } catch (error) {
                    console.log(error)
                }
            }
        })()
    }, [token])

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