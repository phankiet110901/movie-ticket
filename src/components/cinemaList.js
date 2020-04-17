import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './../assets/sass/main.scss';
import { Tabs, Radio } from 'antd';
import CinemaServices from './../service/CinemaServices';
import CinemaDetail from './cinemaDetail';
const { TabPane } = Tabs;


export default class componentName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
            danhSachHeThongRap: [],
            danhSachCumHeThongRap: []
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };


    componentDidMount() {
        CinemaServices.LayDanhSachHeThongRap()
            .then((res) => {
                this.LayCumRap(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    LayCumRap = (heThongRap) => {
        let soLuongRap = heThongRap.length;
        let danhSachCumRap = [];
        heThongRap.forEach((rapPhim) => {
            // lay cum he thong rap theo tung he thong rap
            CinemaServices.LayDanhSachCumheThongRap(rapPhim.maHeThongRap)
                .then((res) => {
                    danhSachCumRap.push({
                        maHeThongRap: rapPhim.maHeThongRap,
                        cumRap: res.data
                    });
                    if (danhSachCumRap.length === soLuongRap) {
                        this.setState({
                            danhSachHeThongRap: heThongRap,
                            danhSachCumHeThongRap: danhSachCumRap
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        });
    }

    RenderCumHeThongRap = (maHeThongRap, logo) => {
        let cumRapHeThongRap = this.state.danhSachCumHeThongRap.find(cumRap => cumRap.maHeThongRap === maHeThongRap);
        return cumRapHeThongRap.cumRap.map((cumRap, index) => {
            return (
                <div className="col-6 col-md-4" key={index}>
                    <CinemaDetail cumRap={cumRap} logo={logo} key={index}></CinemaDetail>
                </div>

            );
        });
    }

    render() {
        const { mode } = this.state;
        let elmHeThongRap = this.state.danhSachHeThongRap.map((heThongRap, index) => {
            return (
                <TabPane tab={`${heThongRap.tenHeThongRap}`} key={index}>
                    <div className="row">
                        {/* render ra tung cum rap theo tung he thong rap */}
                        {this.RenderCumHeThongRap(heThongRap.maHeThongRap, heThongRap.logo)}
                    </div>
                </TabPane>
            );
        });

        return (
            <div>
                <div className="text-center"><span className="text__title">Hệ thống rạp</span></div>
                <div className="container cinema__list">
                    <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                        <Radio.Button value="top">Hiển thị ngang</Radio.Button>
                        <Radio.Button value="left">Hiển thị dọc</Radio.Button>
                    </Radio.Group>
                    <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
                        {elmHeThongRap}
                    </Tabs>
                </div>
            </div>
        );
    }
}
