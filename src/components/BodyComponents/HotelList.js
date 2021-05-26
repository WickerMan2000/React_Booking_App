import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import InputContext from '../ContextProvider/InputContext';
import Hotel from './Hotel';

const HotelList = () => {
    const context = useContext(InputContext);
    const sliderValue = useSelector(state => state.slider.price);

    return (
        <ul>
            {context.outPutData.map(hotel =>
                hotel.price > sliderValue &&
                (
                    <Hotel
                        city={hotel.city}
                        guestrating={hotel.guestrating}
                        hotelName={hotel.hotelName}
                        price={hotel.price}
                        thumbnail={hotel.thumbnail}
                        filters={hotel.filters}
                    />
                ))}
        </ul>
    );
}

export default HotelList;