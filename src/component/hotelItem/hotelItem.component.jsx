import React from 'react';
import './hotelItem.styles.scss';

const HotelItem = ({hotel_name}) => (
    <div className='hotelItem'>
        <span>{hotel_name}</span>
        <div className='image'>照片</div>
        <span>價格...起</span>
    </div>
);

export default HotelItem;