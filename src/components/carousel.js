import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './../assets/css/carousel.css';
import { Carousel } from 'antd';

export default class carousel extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                   <h3>1</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        )
    }
}
