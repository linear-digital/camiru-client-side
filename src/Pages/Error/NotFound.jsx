import React from 'react';
import { Button, Result } from 'antd';
const NotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button role='a' href="/" type="primary">Back Home</Button>}
        style={{ marginTop: '200px' }}
    />
);
export default NotFound;