import React, { Component } from 'react'
import MovieService from './../service/MovieServices';
export default class DetailMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailMovie: {}
        }
    }


    componentDidMount() {
        let { id } = this.props.match.params;
        MovieService.LayThongTinChiTietPhim(id)
            .then((res) => {
                this.setState({
                    detailMovie: res.data
                });
            })
            .catch((err) => { console.log(err); })
    }

    render() {
        console.log(this.state.detailMovie);
        let { lichChieu, maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu } = this.state.detailMovie;
        let ngayChieu = new Date(ngayKhoiChieu);
        let ngayKhoiChieuPhim = `${ngayChieu.getDate()}/${ngayChieu.getMonth() + 1}/${ngayChieu.getFullYear()}`;

        return (
            <div className="container">
                <div className="movieWapper">
                    {/* thong tin phim */}
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img src={hinhAnh} height={350} width={'100%'} alt="anh chi tiet phim"/>
                        </div>
                        <div className="col-12 col-md-9">
                            <p>{ngayKhoiChieuPhim}</p>
                            <p>{tenPhim}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
