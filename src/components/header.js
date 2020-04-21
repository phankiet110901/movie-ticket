import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './../assets/sass/main.scss';


const { Header } = Layout;

export default class header extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    <div className="logo">
                        <NavLink to="/home"><img src = {require('./../assets/img/logo.png')} /></NavLink>
                    </div>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        className="menu"
                    >
                        <Menu.Item key="1" className="menu__item"><NavLink to="/home">Lịch chiếu</NavLink></Menu.Item>
                        <Menu.Item key="2" className="menu__item"><NavLink to="/cumrap">Cụm rạp</NavLink></Menu.Item>
                        <Menu.Item key="3" className="menu__item"><NavLink to="/tintuc">Tin tức</NavLink></Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}
