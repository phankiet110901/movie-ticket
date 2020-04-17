import React, { Component } from 'react'
import './../assets/sass/main.scss';

export default class cinemaDetail extends Component {

    constructor(props) {
        super(props);

        let { maCumRap, tenCumRap, diaChi } = this.props.cumRap;
        let { logo } = this.props;
        this.state = {
            maCumRap,
            tenCumRap,
            diaChi,            
            logo
        }
    }

    render() {
        return (
            <div>
                <div className="cinema__detail">
                    <img src={this.state.logo} height="50px" width="50px" />
                    <div className="cinema__info">
                        <p className="cinema__name">{this.state.tenCumRap}</p>
                        <span className="cinema__address">{this.state.diaChi}</span>
                    </div>
                </div>
            </div>
        )
    }
}
