import React, { Component, Fragment } from 'react';
import "./../assets/sass/main.scss";

export default class DetailChair extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClick: false
        }
    }

    RenderDetailChair = (stateBooking, typeChair, index) => {
        if (!this.state.isClick) {
            if ((index + 1) % 11 !== 0) {
                if (stateBooking) {
                    return <i className="fa fa-square chair__icon selected__chair" onClick={() => { this.onCLick() }} />
                } else if (stateBooking === false && typeChair === "Thuong") {
                    return <i className="fa fa-square chair__icon normal__chair" onClick={() => { this.onCLick() }} />
                } else if (stateBooking === false && typeChair === "Vip") {
                    return <i className="fa fa-square chair__icon vip__chair" onClick={() => { this.onCLick() }} />
                } else {
                    return "";
                }
            } else {
                if (stateBooking) {
                    return <Fragment><i className="fa fa-square chair__icon selected__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
                } else if (stateBooking === false && typeChair === "Thuong") {
                    return <Fragment><i className="fa fa-square chair__icon normal__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
                } else if (stateBooking === false && typeChair === "Vip") {
                    return <Fragment><i className="fa fa-square chair__icon vip__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
                } else {
                    return "";
                }
            }
        } else {
            if ((index + 1) % 11 !== 0) {
                return <Fragment><i className="fa fa-square chair__icon select__chair" onClick={() => { this.onCLick() }} /></Fragment>
            } else {
                return <Fragment><i className="fa fa-square chair__icon select__chair" onClick={() => { this.onCLick() }} /><br /></Fragment>
            }
        }
    }

    onCLick = () => {
        if (!this.props.stateBooking) {
            this.setState({
                isClick: !this.state.isClick
            });
        }
    }
    render() {
        return (
            <Fragment>
                {this.RenderDetailChair(this.props.stateBooking, this.props.typeChair, this.props.index)}
            </Fragment>
        )
    }
}
