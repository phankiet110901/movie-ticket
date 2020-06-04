import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";
import "./../assets/sass/main.scss";
import { Config } from "./../common/setting/Config";
import 'font-awesome/css/font-awesome.min.css';
import BookingServices from "./../service/BookingServices";
import DetailChair from "./../components/detailChair";

export default class BookingMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thongTinPhongVe: {}
        }
    }

    RenderDanhSachGhe = () => {
        let { danhSachGhe } = this.state.thongTinPhongVe;
        if (danhSachGhe !== undefined) {
            return danhSachGhe.map((chiTietGhe, index) => {
                return <DetailChair stateBooking={chiTietGhe.daDat} typeChair={chiTietGhe.loaiGhe} index={index} key={index} />
            })
        }
    }

    componentDidMount() {
        let { idLichChieu } = this.props.match.params;
        BookingServices.LayDanhSachPhongVe(idLichChieu)
            .then((res) => {
                this.setState({ thongTinPhongVe: res.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        if (sessionStorage.getItem(Config.userLogin == null) || sessionStorage.getItem(Config.userName) == null) {
            return <Redirect to="/home" />
        }
        console.log(this.state.thongTinPhongVe);
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 booking__left">
                            <Fragment>
                                <div className="booking__screen"></div>
                                <p style={{ textAlign: "center" }}>Màn hình</p>
                            </Fragment>

                            <div className="booking__chairs">
                                {this.RenderDanhSachGhe()}

                                <div className="booking__note">
                                    <i className="fa fa-square chair__icon selected__chair" /><span>: Ghế  đã bi mua</span>
                                    <i className="fa fa-square chair__icon vip__chair" /><span>: Ghế  vip</span>
                                    <i className="fa fa-square chair__icon normal__chair" /><span>: Ghế  thường</span>
                                    <i className="fa fa-square chair__icon select__chair" /><span>: Ghế  bạn chọn</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-4 booking__right">right</div>
                    </div>
                </div>
            </div>
        )
    }
}
