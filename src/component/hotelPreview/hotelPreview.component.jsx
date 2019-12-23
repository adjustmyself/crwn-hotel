import React from 'react';
import './hotelPreview.styles.scss';
import HotelItem from '../hotelItem/hotelItem.component';

const HotelPreview = ({location, hotels}) => {
    return(
    <div className='hotelPreview'>
        <h1 className='title'> {location.toUpperCase()} </h1>
        <div className='hotelItems'>
            {
                hotels.map( ({hotel_id,...otherData}) => (<HotelItem key={hotel_id} {...otherData} />))
            }
        </div>
    </div>
);}

export default HotelPreview;

