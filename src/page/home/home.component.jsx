import React from 'react';
import './home.styles.scss';
import HotelOverview from '../../component/hotelOverview/hotelOverview.component';

const HomePage = () => (
    <div className='homePage'>
        <div className='searchBar'>
            Search Bar
        </div>
        <HotelOverview />
    </div>
);

export default HomePage;