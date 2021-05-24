import React, { useContext } from 'react';
import Hotel from './Hotel';
import InputContext from '../ContextProvider/InputContext';

const HotelList = () => {
    const context = useContext(InputContext);

    return (
        <ul>
            {context.outPutData.map(hotel =>
                hotel.price > context.sliderValue &&
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