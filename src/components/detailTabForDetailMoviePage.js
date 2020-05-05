import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DetailTabsForDetailMoivePage extends Component {
    render() {
        let { tabName, lichChieu } = this.props;
        let res = [];
        lichChieu.forEach((detailLichChieu, index) => {
            if(detailLichChieu.thongTinRap.tenHeThongRap === tabName){
                res.push(
                    <NavLink to="home/" key={index}>
                        <p>{detailLichChieu.thongTinRap.tenRap}</p>
                        <p>{detailLichChieu.tenPhim}</p>
                    </NavLink>
                );
            }
        });
        return (
            <div>
                {res}
            </div>
        )
    }
}
