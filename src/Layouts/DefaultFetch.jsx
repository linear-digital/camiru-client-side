import React from 'react';
import { useEffect } from 'react';
import { api, fetcher } from '../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setClassRooms } from '../redux/classroom/classSlice';
import { setCurrentUser } from '../redux/user/userSlice';
import Cookie from 'js-cookie';

const DefaultFetch = () => {
    const dispatch = useDispatch()
    const token = Cookie.get('token-camiru')
    useEffect(() => {
        (async () => {
            if (token) {
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
    return
};

export default DefaultFetch;