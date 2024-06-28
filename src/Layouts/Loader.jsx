import { Spinner } from '@material-tailwind/react';
import React from 'react';

const Loader = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Spinner
                width={40}
                height={40}
            />
        </div>
    );
};

export default Loader;