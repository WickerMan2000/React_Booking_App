import React from 'react';
import { useSelector } from 'react-redux';
import Hotel from './Hotel';

const HotelList = () => {
    const sliderValue = useSelector(state => state.slider.price);
    const outPutData = useSelector(state => state.searcher.text);
    const filteredValue = useSelector(state => state.filters.filter);

    const filteredData = outPutData.filter(hotel =>
        hotel.filters.map(filter => filter.name).includes(filteredValue));

    return (
        <ul>
            {filteredData.map(hotel =>
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