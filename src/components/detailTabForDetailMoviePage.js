import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../assets/sass/main.scss';

export default class DetailTabsForDetailMoivePage extends Component {
    render() {
        let { tabName, lichChieu } = this.props;
        let res = [];
        lichChieu.forEach((detailLichChieu, index) => {
            if (detailLichChieu.thongTinRap.tenHeThongRap === tabName) {
                let thoiGianChieu = new Date(detailLichChieu.ngayChieuGioChieu);
                res.push(
                    <div key={index} className="detailTab">
                        <NavLink to="/home" >
                            <p className="detail__name">{detailLichChieu.thongTinRap.tenRap}</p>
                            <span className="detail__duration">{detailLichChieu.thoiLuong} phút - </span>
                            <span className="detail__day">{`${thoiGianChieu.getDate()}.${thoiGianChieu.getMonth() + 1}.${thoiGianChieu.getFullYear()}`}</span>
                            <p className="detail__price">Giá vé: {detailLichChieu.giaVe}</p>
                            <p className="detail__time">Giờ chiếu: {`${thoiGianChieu.getHours()}:${thoiGianChieu.getUTCMinutes()}`}</p>
                        </NavLink>
                    </div>
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
