import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './../assets/sass/main.scss';

const { Meta } = Card;
export default class movieItem extends Component {

    constructor(props) {
        super(props);

        let { hinhAnh, tenPhim, maPhim} = this.props.thongTinPhim;

        this.state = {
            hinhAnh,
            tenPhim,
            maPhim
        }
    }

    render() {
        return (
            <div className="movie__wapper">
                <Card
                    hoverable
                    className="movie__item"
                    cover={<img alt="example" src={this.state.hinhAnh} />}>
                    <Meta title={this.state.tenPhim} description={`Mã phim: ${this.state.maPhim}`} />
                </Card>
            </div>
        )
    }
}
