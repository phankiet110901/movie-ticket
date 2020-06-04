import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";
import "./../assets/sass/main.scss";
import { Config } from "./../common/setting/Config";
import 'font-awesome/css/font-awesome.min.css';
import BookingServices from "./../service/BookingServices";
import DetailChair from "./../components/detailChair";
import 'antd/dist/antd.css';
import { Modal } from 'antd';

export default class BookingMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thongTinPhongVe: {},
            danhSachGheDuocChon: [],
            tongGia: 0,
            datVe: false,
            visible: true,
            isRedirect: false
        }
    }

    RenderDanhSachGhe = () => {
        let { danhSachGhe } = this.state.thongTinPhongVe;
        if (danhSachGhe !== undefined) {
            return danhSachGhe.map((chiTietGhe, index) => {
                return <DetailChair chiTietGhe={chiTietGhe} index={index} key={index} ThemGhe={this.ThemGhe} XoaGhe={this.XoaGhe} />
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

    RenderDanhSachGheDuocChon = () => {
        return this.state.danhSachGheDuocChon.map((chiTietGhe, index) => {
            return (
                <Fragment key={index}>
                    <p>Ghế: {chiTietGhe.tenGhe} - Giá: {chiTietGhe.giaVe}</p>
                </Fragment>
            );
        });
    }

    ThemGhe = (chair) => {
        let danhSachGheDuocChon = [...this.state.danhSachGheDuocChon, chair];
        this.setState({
            danhSachGheDuocChon: [...danhSachGheDuocChon],
            tongGia: this.GetTotalPrice(danhSachGheDuocChon)
        });
    }

    GetTotalPrice = (danhSachGheDuocChon) => {
        return danhSachGheDuocChon.reduce((totalPrice, chiTietGhe) => {
            return totalPrice += chiTietGhe.giaVe;
        }, 0);
    }

    XoaGhe = (chair) => {
        let danhSachGheDuocChon = this.state.danhSachGheDuocChon.filter((chiTietGhe) => {
            return chiTietGhe.maGhe !== chair.maGhe;
        });
        this.setState({
            danhSachGheDuocChon: [...danhSachGheDuocChon],
            tongGia: this.GetTotalPrice(danhSachGheDuocChon)
        });
    }

    DatVe = () => {
        if (this.state.tongGia === 0) {
            Modal.warning({
                content: 'Bạn chưa chọn ghế',
                onOk() { }
            })
        } else {
            let { idLichChieu } = this.props.match.params;
            let danhSachVe = this.state.danhSachGheDuocChon.map((chiTietGhe) => {
                return {
                    maGhe: chiTietGhe.maGhe,
                    giaVe: chiTietGhe.giaVe
                }
            });

            let thongTinDatVe = {
                maLichChieu: idLichChieu,
                danhSachVe,
                taiKhoanNguoiDung: sessionStorage.getItem(Config.userName)
            }

            BookingServices.DatVe(thongTinDatVe)
                .then((res) => {
                    console.log(res.data);
                    if (res.data === "Đặt vé thành công!") {
                        this.setState({
                            datVe: true
                        });
                    }
                })
                .catch((err) => {
                    if(err){
                        Modal.error({
                            content: 'Lỗi !! Hãy thử lại',
                            onOk() { }
                        })
                    }
                })
        }
    }

    render() {
        if (sessionStorage.getItem(Config.userLogin == null) || sessionStorage.getItem(Config.userName) == null) {
            return <Redirect to="/home" />
        }
        if(this.state.isRedirect){
            return <Redirect to="/home" />
        }
        if (this.state.datVe) {
            Modal.success({
                content: 'Đặt vé thành công',
                onOk: () => { this.setState({
                    isRedirect: true
                }) }
            })
        }
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
                        <div className="col-12 col-md-4 booking__right">
                            <div className="totalPrice"><span>{this.state.tongGia}</span>đ</div>
                            <div className="infoMovie">
                                <p className="cinemaName">{this.state.thongTinPhongVe.thongTinPhim?.tenCumRap}</p>
                                <p className="movieName">Tên phim: {this.state.thongTinPhongVe.thongTinPhim?.tenPhim}</p>
                                <p className="time">Giờ chieu: {this.state.thongTinPhongVe.thongTinPhim?.gioChieu}</p>
                            </div>
                            <div className="showChair">
                                <p className="showChair__title">Danh sách ghế: </p>
                                {this.RenderDanhSachGheDuocChon()}
                            </div>
                            <div className="payment" onClick={this.DatVe}>Đặt vé</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
