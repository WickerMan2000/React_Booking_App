import React from 'react';
import { useSelector } from 'react-redux';
import Hotel from './Hotel';

const HotelList = () => {
    const sliderValue = useSelector(state => state.slider.price);
    const outPutData = useSelector(state => state.searcher.text);

    return (
        <ul>
            {outPutData.map(hotel =>
                hotel.price > sliderValue &&
                (
                    <Hotel
                        city={hotel.city}
                        guestrating={hotel.guestrating}
                        hotelName={hotel.hotelName}
                        price={hotel.price}
                        thumbnail={hotel.thumbnail}
                        filters={hotel.filters}
                        map={hotel.mapurl}
                    />
                ))}
        </ul>
    );
}

export default HotelList;