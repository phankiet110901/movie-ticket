import React, { Component } from 'react'
import MovieService from './../service/MovieServices';
import CinemaService from './../service/CinemaServices';
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
            return;
        }

        let res = [];
        let { tenHeThongRap } = lichChieu[0].thongTinRap;
        res = lichChieu.map((elm, index) => {
            if (elm.thongTinRap.tenHeThongRap === tenHeThongRap) {
                return (<div key={index}>{tenHeThongRap}</div>);
            } else {
                tenHeThongRap = elm.thongTinRap.tenHeThongRap;
                return (<div key={index}>{tenHeThongRap}</div>);
            }
        });
        return res;
    }

    render() {
        let { lichChieu, maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu } = this.state.detailMovie;
        let ngayChieu = new Date(ngayKhoiChieu);
        let ngayKhoiChieuPhim = `${ngayChieu.getDate()}.${ngayChieu.getMonth() + 1}.${ngayChieu.getFullYear()}`;
        console.log(lichChieu);
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
                    <div className="text-center"><h3 className="text__title">Thông tin chi tiết</h3></div>
                    <div className="movie__detail container">
                        <iframe width="100%" height={440} src={trailer} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                </div>
                <div className="booking__wapper container">
                    <div className="text-center"><h3 className="text__title">Đặt vé</h3></div>
                    <div className="card-container">
                        <Tabs type="card">
                            <TabPane tab="Tab Title 1" key="1">
                                <p>Content of Tab Pane 1</p>
                                <p>Content of Tab Pane 1</p>
                                <p>Content of Tab Pane 1</p>
                            </TabPane>
                            <TabPane tab="Tab Title 2" key="2">
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                            </TabPane>
                            <TabPane tab="Tab Title 3" key="3">
                                <p>Content of Tab Pane 3</p>
                                <p>Content of Tab Pane 3</p>
                                <p>Content of Tab Pane 3</p>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
