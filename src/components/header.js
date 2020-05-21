import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default class header extends Component {
    render() {
        return (
            <div className="layout">
                <nav className="navbar navbar-expand-lg header">
                    {/* left: logo */}
                    <div className="navbar-brand logo">
                        <NavLink to="/home"><img src={require('./../assets/img/logo.png')} /></NavLink>
                    </div>
                    {/* button for responsive */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header__content" >
                        <span className="buttonBar__icon"><i className="fa fa-align-right" /></span>
                    </button>
                    {/* right: button for login */}
                    <div className="collapse navbar-collapse" id="header__content">
                        <div className="button__login">
                            <img src={require('./../assets/img/avatar.png')} className="login__img" />
                            <NavLink to="/login"><span className="login__link">Đăng nhập</span></NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
