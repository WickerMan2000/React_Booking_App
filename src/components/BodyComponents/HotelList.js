import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapActions } from '../../Store/index';
import Hotel from './Hotel';

const HotelList = React.memo(() => {
    const sliderValue = useSelector(state => state.slider.price);
    const filteredValue = useSelector(state => state.filters.filter);
    const roomTypeValue = useSelector(state => state.filters.roomtype);
    const outPutData = useSelector(state => state.searcher.text);
    const dispatch = useDispatch();
    let combinedData = outPutData;

    if (filteredValue !== 'All') {
        combinedData = combinedData.filter(hotel =>
            hotel.filters.map(filter => filter.name).includes(filteredValue));
    }

    if (roomTypeValue !== 'All') {
        combinedData = combinedData.filter(data => data.roomtype === roomTypeValue);
    }

    useEffect(() => {
        return () => {
            dispatch(mapActions.changeCondition({ condition: false }));
        };
    }, [combinedData, dispatch])

    return (
        <ul>
            {combinedData.map((hotel, index) =>
                hotel.price > sliderValue &&
                (
                    <Hotel
                        id={index}
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
})

export default HotelList;