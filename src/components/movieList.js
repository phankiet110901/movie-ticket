import React, { Component } from 'react';
import MovieItem from "./movieItem";
import './../assets/sass/main.scss';
import {NavLink} from 'react-router-dom';
import movieService from '../service/MovieServices';

export default class movieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DanhSachPhim: []
        }
    }

    // goi api lay thong tin tu database
    componentDidMount() {
        //goi api
        movieService.LayDanhSachPhim().then((res) => { this.setState({ DanhSachPhim: res.data }) }).catch((err) => { console.log(err) })
    }


    render() {

        let elm = this.state.DanhSachPhim.map((phim, index) => {
            return (
                <div className="col-12 col-md-3" key = {index}>
                    <NavLink to={`/detail-movie/${phim.maPhim}`}><MovieItem thongTinPhim = {phim} /></NavLink>
                </div>
            );
        });

        return (
            <div>
                <div className="container movie__item">
                    <div className="text-center">
                        <span className="text__title">Đang chiếu </span>
                    </div>
                    <div className="row">
                        {elm}
                    </div>
                </div>
            </div>
        )
    }
}
