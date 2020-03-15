import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './../assets/sass/main.scss';
import { Carousel } from 'antd';

export default class carousel extends Component {


    render() {
        return (
            <Carousel autoplay>
                <div>
                    <div className="carousel__slide__1 carousel__slide"></div>
                </div>
                <div>
                    <div className="carousel__slide__2 carousel__slide"></div>
                </div>
                <div>
                    <div className="carousel__slide__3 carousel__slide"></div>
                </div>
                <div>
                    <div className="carousel__slide__4 carousel__slide"></div>
                </div>
            </Carousel>
        )
    }
}
