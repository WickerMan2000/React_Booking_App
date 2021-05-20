import React, { useContext } from 'react';
import Search from '../HeaderComponents/Search';
import Check from '../HeaderComponents/Check';
import FamilyRooms from '../HeaderComponents/RoomType';
import PriceSlider from '../HeaderComponents/PriceSlider';
import Choices from '../HeaderComponents/Choices';
import Location from '../HeaderComponents/Location';
import InputContext from '../ContextProvider/InputContext';
import styles from './Header.module.css';

const Header = () => {
    const initalDateContext = useContext(InputContext);
    const fix = true;

    return (
        <div className={styles.Header}>
            <Search />
            <Check itIsCheckedIn={fix} enableCalendar={false} initialDate={initalDateContext.checkInOutDates[0]} title='Check-In' />
            <Check itIsCheckedOut={!fix} enableCalendar={!initalDateContext.enableIt} initialDate={initalDateContext.checkInOutDates[1]} title='Check-Out' />
            <FamilyRooms />
            <PriceSlider />
            <Choices />
            <Location />
        </div>
    );
}

export default Header;