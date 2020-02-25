import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header} = Layout;

export default class header extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px', textAlign: 'center' }}
                    >
                        <Menu.Item key="1">Lịch Chiếu</Menu.Item>
                        <Menu.Item key="2">Cụm rạp</Menu.Item>
                        <Menu.Item key="3">Tin tức</Menu.Item>
                        <Menu.Item key="4">Ứng dụng</Menu.Item>

                    </Menu>
                </Header>
            </Layout>
        )
    }
}
