import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './../assets/sass/main.scss';
import { Tabs, Radio } from 'antd';
import CinemaServices from './../service/CinemaServices';

const { TabPane } = Tabs;
let danhSachCumHeThongRap = [];

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
        // ket noi api

        CinemaServices.LayDanhSachHeThongRap()
            .then((res) => {
                this.setState({ danhSachHeThongRap: [...res.data] });
            })
            .catch((err) => { console.log(err) })

        //CinemaServices.LayDanhSachCumheThongRap();

    }


    LayDuLieuCumHeThongRap = (maHeThongRap,tenHeThongRap) => {
        return CinemaServices.LayDanhSachCumheThongRap(maHeThongRap)
            .then( (res) => {
                console.log( {
                    tenHeThongRap,
                    danhSachCumHeThongRap: res.data
                } );

                return res.data;
            } );


    }   



    render() {

        const { mode } = this.state;

        console.log(this.LayDuLieuCumHeThongRap("CineStar","CineStar"));

        let elmHeThongRap = this.state.danhSachHeThongRap.map((heThongRap, index) => {
            return (
                <TabPane tab={`${heThongRap.tenHeThongRap}`} key={index}>
                    {heThongRap.maHeThongRap}
                </TabPane>
            );
        });

        console.log(danhSachCumHeThongRap);

    

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
