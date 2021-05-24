import React from 'react';
import styles from './Hotel.module.css';

const Hotel = ({ thumbnail, city, guestrating, hotelName, price, filters }) => {

    return (
        <li className={styles.Hotel}>
            <h1>{city}</h1>
            <h2>{guestrating}</h2>
            <h3>{hotelName}</h3>
            <h4>{price}</h4>
            <ul>
                {filters.map(filter => (
                    <li>{filter.name}</li>
                ))}
            </ul>
            <img src={thumbnail} alt="Just a Pic" />
        </li>
    );
}

export default Hotel;