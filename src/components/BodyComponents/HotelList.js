import React, { useContext } from 'react';
import Hotel from './Hotel';
import InputContext from '../ContextProvider/InputContext';

const HotelList = () => {
    const context = useContext(InputContext);

    return (
        <ul>
            {context.outPutData.map(hotel => (
                <Hotel
                    city={hotel.city}
                    guestrating={hotel.guestrating}
                    hotelName={hotel.hotelName}
                    price={hotel.price}
                />
            ))}
        </ul>
    );
}

export default HotelList;