import React from 'react';
import styles from './Hotel.module.css';

const Hotel = ({ city, guestrating, hotelName, price }) => {
    return (
        <li className={styles.Hotel}>
            <h1>{city}</h1>
            <h2>{guestrating}</h2>
            <h3>{hotelName}</h3>
            <h4>{price}</h4>
        </li>
    );
}

export default Hotel;