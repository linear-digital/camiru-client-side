import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

const Loader = () => {
    return (
        <div className='w-full py-10 flex justify-center items-center'>
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 24,
                        }}
                        spin
                    />
                }
            />
        </div>
    );
};

export default Loader;