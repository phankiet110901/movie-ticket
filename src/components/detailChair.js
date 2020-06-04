import React, { Component, Fragment } from 'react';
import "./../assets/sass/main.scss";

export default class DetailChair extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClick: false
        }
    }

    RenderDetailChair = () => {
        if (!this.state.isClick) {
            if ((this.props.index + 1) % 11 !== 0) {
                if (this.props.chiTietGhe.daDat) {
                    return <i className="fa fa-square chair__icon selected__chair" onClick={() => { this.onCLick() }} />
                } else if (this.props.chiTietGhe.daDat === false && this.props.chiTietGhe.loaiGhe === "Thuong") {
                    return <i className="fa fa-square chair__icon normal__chair" onClick={() => { this.onCLick() }} />
                } else if (this.props.chiTietGhe.daDat === false && this.props.chiTietGhe.loaiGhe === "Vip") {
                    return <i className="fa fa-square chair__icon vip__chair" onClick={() => { this.onCLick() }} />
                } else {
                    return "";
                }
            } else {
                if (this.props.chiTietGhe.daDat) {
                    return <Fragment><i className="fa fa-square chair__icon selected__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
                } else if (this.props.chiTietGhe.daDat === false && this.props.chiTietGhe.loaiGhe === "Thuong") {
                    return <Fragment><i className="fa fa-square chair__icon normal__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
                } else if (this.props.chiTietGhe.daDat === false && this.props.chiTietGhe.loaiGhe === "Vip") {
                    return <Fragment><i className="fa fa-square chair__icon vip__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
                } else {
                    return "";
                }
            }
        } else {
            if ((this.props.index + 1) % 11 !== 0) {
                return <Fragment><i className="fa fa-square chair__icon select__chair" onClick={() => { this.onCLick() }} /></Fragment>
            } else {
                return <Fragment><i className="fa fa-square chair__icon select__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
            }
        }
    }

    onCLick = () => {
        if(!this.props.chiTietGhe.daDat){
            if(!this.state.isClick){
                this.props.ThemGhe(this.props.chiTietGhe);
            }else{
                this.props.XoaGhe(this.props.chiTietGhe);
            }
            this.setState({
                isClick: !this.state.isClick
            });
        }
    }
    render() {
        return (
            <Fragment>
                {this.RenderDetailChair()}
            </Fragment>
        )
    }
}
