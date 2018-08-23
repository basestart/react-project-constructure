import React from 'react';
import { Layout } from 'antd';
const {Footer} = Layout;

export default () => (
    <Footer style={{ textAlign: 'center' }}>
        created by{' '}
        <a
            href="https://github.com/fridego/react-project-constructure"
            target="blank"
        >
            fridego
        </a>
    </Footer>
)