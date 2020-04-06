import React, { Component } from 'react';
import Carousel from '../components/carousel';
import Booking from '../components/booking';
import MovieList from '../components/movieList';
import CinemaList from './../components/cinemaList';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Booking/>
                <MovieList/>
                <CinemaList />
            </div>
        )
    }
}
