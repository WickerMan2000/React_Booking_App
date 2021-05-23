import React from 'react';
import Hotel from '../BodyComponents/Hotel';
import Map from '../BodyComponents/Map';
import SortingOptions from '../BodyComponents/SortingOptions';
import styles from './Body.module.css';

const Body = () => {
    return (
        <div>
            <div className={styles.CoHeader}>
                <Map />
                <SortingOptions />
            </div>
            <Hotel />
        </div>
    );
}

export default Body;