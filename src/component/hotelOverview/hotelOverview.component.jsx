import React from 'react';
import Hotel_Data from './hotelData';
import HotelPreview from '../hotelPreview/hotelPreview.component';
import './hotelOverview.styles.scss';

class HotelOverview extends React.Component {
    state = {
        cities:Hotel_Data
    }

    render() {
        const { cities } = this.state;
        return (
            <div className='hotelOverview'>
                {
                    cities.map( ({id,...otherData }) => (
                        <HotelPreview key={id} {...otherData} />
                    ))
                }
            </div>
        );
    }
}
export default HotelOverview;