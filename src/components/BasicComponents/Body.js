import React from 'react';
import Map from '../BodyComponents/Map';
import HotelList from '../BodyComponents//HotelList';
import SortingOptions from '../BodyComponents/SortingOptions';
import styles from './Body.module.css';

const Body = () => {
    return (
        <div>
            <div className={styles.CoHeader}>
                <Map />
                <SortingOptions />
            </div>
            <HotelList />
        </div>
    );
}

export default Body;