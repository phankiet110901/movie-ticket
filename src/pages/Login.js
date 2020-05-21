import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="login__wapper">
                    <div className="login__form">
                        <NavLink to="/"><div className="login__close">x</div></NavLink>
                        <div className="form__detail">
                            <div className="form__logo"><img src={require('./../assets/img/logo.png')} alt="logo" /></div>
                            <p className="form__slogan">Thế Giới Phim Trên Đầu Ngón Tay</p>
                            <div className="form__input">
                                <div className="input__detail">
                                    <p className="form__slogan">Đăng nhập để được nhiều ưu đãi, mua vé
                                    và bảo mật thông tin</p>
                                    <div className="formLogin__label"><label for="username">Tài khoản</label></div>
                                    <div className="formLogin__input"><input type="text" id="username" /></div>
                                    <div className="formLogin__label"><label for="password">Mật khẩu</label></div>
                                    <div className="formLogin__input"><input type="password" id="password" /></div>
                                    <div className="formLogin__button"><button>Đăng nhập</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
