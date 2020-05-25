import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Config } from "./../common/setting/Config";
import { connect } from "react-redux";

class Header extends Component {

    RenderLinkForLogin = () => {
        if (sessionStorage.getItem(Config.userLogin) == null) {
            return (
                <Fragment>
                    <NavLink to="/login"><span className="login__link" style={{ marginRight: 15 }}>Đăng nhập</span></NavLink>
                    <NavLink to="/login"><span className="login__link">Đăng kí</span></NavLink>
                </Fragment>
            )
        } else {
            if(this.props.userName !== ""){
                return <NavLink to="/login"><span className="login__link" style={{ marginRight: 15 }}>{this.props.userName}</span></NavLink>
            }else{
                if(sessionStorage.getItem(Config.userLogin) != null){
                    return <NavLink to="/login"><span className="login__link" style={{ marginRight: 15 }}>{sessionStorage.getItem(Config.userName)}</span></NavLink>
                }
            }
           
        }
    }


    render() {
        return (
            <div className="layout">
                <nav className="navbar navbar-expand-lg header">
                    {/* left: logo */}
                    <div className="navbar-brand logo">
                        <NavLink to="/home"><img src={require('./../assets/img/logo.png')} alt="logo" /></NavLink>
                    </div>
                    {/* button for responsive */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header__content" >
                        <span className="buttonBar__icon"><i className="fa fa-align-right" /></span>
                    </button>
                    {/* right: button for login */}
                    <div className="collapse navbar-collapse" id="header__content">
                        <div className="button__login">
                            <img src={require('./../assets/img/avatar.png')} className="login__img" alt="icon login" />
                            {this.RenderLinkForLogin()}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {userName: state.UserLogin};
}

export default connect(mapStateToProps)(Header);