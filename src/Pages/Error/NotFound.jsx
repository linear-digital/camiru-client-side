import React from 'react';
import { Button, Result } from 'antd';
const NotFound = () => {
    const goback = () => {
        window.history.back();
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={goback} type="primary">Go Back</Button>}
            style={{ marginTop: '200px' }}
        />
    );
}
export default NotFound;