import React, { useCallback, useState } from 'react';
import Search from '../HeaderComponents/Search';
import Check from '../HeaderComponents/Check';
import PriceSlider from '../HeaderComponents/PriceSlider';
import Option from '../HeaderComponents/Option';
import styles from './Header.module.css';
import locationStyles from '../HeaderComponents/Location.module.css';
import roomTypeStyles from '../HeaderComponents/RoomType.module.css';
import { useSelector } from 'react-redux';

const Header = () => {
    const [roomTypes, setRoomTypes] = useState([{ roomtype: 'All' }]);
    const [cities, setCities] = useState([]);
    const enableIt = useSelector(state => state.calendar.enabled);
    const checkInOutDates = useSelector(state => Object.values(state.calendar.checkInOutDates));
    const fix = true;

    const roomDataName = useCallback(async data => {
        const result = await data.roomtypes.map(roomData => {
            return {
                roomtype: roomData.name
            };
        })
        setRoomTypes(roomTypes.concat(result));
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
                initialDate={checkInOutDates[0]}
                title='Check-In' />
            <Check
                itIsCheckedOut={!fix}
                enableCalendar={!enableIt}
                initialDate={checkInOutDates[1]}
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
                disabled={true}
                eachOptionUrl={'https://mybooking-28176-default-rtdb.firebaseio.com/1.json'} />
        </div>
    );
}

export default Header;