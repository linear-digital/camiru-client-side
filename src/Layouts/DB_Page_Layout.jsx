import React from 'react';

const DB_Page_Layout = ({ children , ...props}) => {
    return (
        <div className='lg:p-10 p-5 bg-white rounded-lg' {...props}>
            {children}
        </div>
    );
};

export default DB_Page_Layout;