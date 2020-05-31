import React, { Component } from 'react'
import MovieService from './../service/MovieServices';
import DetailTabForDetailMoviePage from '../components/detailTabForDetailMoviePage';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


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

    RenderLichChieu = (lichChieu) => {
        if (lichChieu === undefined) {
            return "";
        }

        let { tenHeThongRap } = lichChieu[0].thongTinRap;
        let listCinema = new Set();   // danh sach cac he thong rap co lich chieu phim tuong ung
        listCinema.add(tenHeThongRap);
        lichChieu.forEach(detaiLichChieu => {
            if (tenHeThongRap !== detaiLichChieu.thongTinRap.tenHeThongRap) {
                listCinema.add(detaiLichChieu.thongTinRap.tenHeThongRap);
                tenHeThongRap = detaiLichChieu.thongTinRap.tenHeThongRap
            }
        });

        listCinema = [...listCinema];
        let contentTabs = listCinema.map((cinemaName, index) => {
            return (
                <TabPane tab={cinemaName} key={index}>
                    <DetailTabForDetailMoviePage lichChieu = {lichChieu} tabName = {cinemaName} />
                </TabPane>
            );
        });

        return (
            <Tabs defaultActiveKey="0">
                {contentTabs}
            </Tabs>
        );
    }


    render() {
        let { lichChieu, tenPhim, trailer, hinhAnh, moTa, ngayKhoiChieu } = this.state.detailMovie;
        let ngayChieu = new Date(ngayKhoiChieu);
        let ngayKhoiChieuPhim = `${ngayChieu.getDate()}.${ngayChieu.getMonth() + 1}.${ngayChieu.getFullYear()}`;

        return (
            <div className="container">
                <div className="movieWapper">
                    {/* thong tin phim */}
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img src={hinhAnh} height={350} width={'100%'} alt="anh chi tiet phim" />
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="text__info">
                                <p className="text__date">{ngayKhoiChieuPhim}</p>
                                <p className="text__name">{tenPhim}</p>
                                <p className="text__date">{moTa}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="movieInfo__wapper">
                    <div className="text-center"><h3 className="text__title">Trailer</h3></div>
                    <div className="movie__detail container">
                        <iframe width="100%" height={440} src={trailer} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="trailer"/>
                    </div>
                </div>
                <div className="booking__wapper container">
                    <div className="text-center"><h3 className="text__title">Đặt vé</h3></div>
                    <div className="card-container">
                        {this.RenderLichChieu(lichChieu)}
                    </div>
                </div>
            </div>
        )
    }
}
