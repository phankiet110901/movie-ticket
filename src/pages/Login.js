import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import UserServices from "./../service/UserServices";
import { Config } from "./../common/setting/Config";
import { connect } from "react-redux";
import { UserLogin } from "../redux/actions/userAction";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            login: {},
            err: "",
            redirectToReferrer: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onClick = () => {
        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                err: "Thông tin không được trống"
            });
        } else {
            UserServices.Login(this.state.username, this.state.password)
                .then((res) => {
                    this.setState({
                        login: res.data,
                        redirectToReferrer: true
                    });
                    sessionStorage.setItem(Config.userLogin, this.state.login.accessToken);
                    sessionStorage.setItem(Config.userName, this.state.login.taiKhoan);
                    this.props.UserLoginOfProps(this.state.login.taiKhoan);
                })
                .catch(() => {
                    this.setState({
                        err: "Thông tin đăng nhập sai"
                    });
                })
        }

    }


    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem("userLogin") != null) {
            return <Redirect to="/home" />
        }
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
                                    <div className="formLogin__label"><label htmlFor="username">Tài khoản</label></div>
                                    <div className="formLogin__input"><input name="username" type="text" id="username" onChange={this.onChange} /></div>
                                    <div className="formLogin__label"><label htmlFor="password">Mật khẩu</label></div>
                                    <div className="formLogin__input"><input name="password" type="password" id="password" onChange={this.onChange} /></div>
                                    <div className="formLogin__button"><button onClick={this.onClick}>Đăng nhập</button></div>
                                    <span style={{ color: "red", display: "inline-block", marginTop: 10, marginBottom: 10 }}>{this.state.err}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserLoginOfProps: (username) => {
            dispatch(UserLogin(username));
        }
    }
}

const mapStateToProps = () => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);