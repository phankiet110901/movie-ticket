import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../assets/sass/main.scss';

export default class DetailTabForDetailMoviePage extends Component {

    ShowLink = () => {
        if(sessionStorage.getItem('user') == null ){
            return "/login";
        }else{
            return "/";
        }
    }

    render() {
        let { tabName, lichChieu } = this.props;
        let res = [];
        lichChieu.forEach((detailLichChieu, index) => {
            if (detailLichChieu.thongTinRap.tenHeThongRap === tabName) {
                let thoiGianChieu = new Date(detailLichChieu.ngayChieuGioChieu);
                res.push(
                    <div key={index} className="detailTab">
                        <NavLink to={this.ShowLink()} >
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
