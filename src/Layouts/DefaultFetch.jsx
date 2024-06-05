import React from 'react';
import { useEffect } from 'react';
import { api } from '../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setClassRooms } from '../redux/classroom/class.action';

const DefaultFetch = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                const res = await api.get('/classroom');
                dispatch(setClassRooms(res.data))
            } catch (error) {

            }
        })()
    }, [])
    return
};

export default DefaultFetch;