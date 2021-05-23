import React, { useCallback, useContext, useState } from 'react';
import Search from '../HeaderComponents/Search';
import Check from '../HeaderComponents/Check';
import PriceSlider from '../HeaderComponents/PriceSlider';
import Option from '../HeaderComponents/Option';
import InputContext from '../ContextProvider/InputContext';
import styles from './Header.module.css';
import locationStyles from '../HeaderComponents/Location.module.css';
import roomTypeStyles from '../HeaderComponents/RoomType.module.css';

const Header = () => {
    const initalDateContext = useContext(InputContext);
    const [roomTypes, setRoomTypes] = useState([]);
    const [cities, setCities] = useState([]);
    const fix = true;

    const roomDataName = useCallback(async data => {
        const result = await data.roomtypes.map(roomData => {
            return {
                roomtype: roomData.name
            };
        })
        setRoomTypes(result);
    }, [])

    const cityDataLocation = useCallback(async data => {
        const newObject = {}
        const result = await data.entries.map(hotelData => {
            return {
                location: hotelData.city
            };
        })
        const filteredArray = result.filter(object =>
            !newObject[object.location] && (newObject[object.location] = true)
        );
        setCities(filteredArray);
    }, [])

    return (
        <div className={styles.Header}>
            <Search />
            <Check
                itIsCheckedIn={fix}
                enableCalendar={false}
                initialDate={initalDateContext.checkInOutDates[0]}
                title='Check-In' />
            <Check
                itIsCheckedOut={!fix}
                enableCalendar={!initalDateContext.enableIt}
                initialDate={initalDateContext.checkInOutDates[1]}
                title='Check-Out' />
            <Option
                text="Rooms"
                dataTransformation={roomDataName}
                dataType={roomTypes}
                className={roomTypeStyles.RoomType}
                property={"roomtype"}
                eachOptionUrl={'https://mybooking-28176-default-rtdb.firebaseio.com/0.json'} />
            <PriceSlider />
            <Option
                text="Cities"
                dataTransformation={cityDataLocation}
                dataType={cities}
                className={locationStyles.Location}
                property={"location"}
                eachOptionUrl={'https://mybooking-28176-default-rtdb.firebaseio.com/1.json'} />
        </div>
    );
}

export default Header;