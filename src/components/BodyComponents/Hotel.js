import React from 'react';
import styles from './Hotel.module.css';

const Hotel = ({ thumbnail, city, guestrating, hotelName, price, filters }) => {

    return (
        <div className={styles.Hotel}>
            <h1>{city}</h1>
            <h2>{guestrating} stars</h2>
            <h3>{hotelName}</h3>
            <h4>${price}</h4>
            <ul>
                {filters.map(filter => (
                    <li>{filter.name}</li>
                ))}
            </ul>
            <img src={thumbnail} alt="Just a Pic" />
        </div>
    );
}

export default Hotel;