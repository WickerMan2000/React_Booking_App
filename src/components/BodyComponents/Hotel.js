import React from 'react';
import { useDispatch } from 'react-redux';
import { mapRelatedActions } from '../../Store/index';
import styles from './Hotel.module.css';

const Hotel = ({ thumbnail, city, guestrating, hotelName, price, filters, map }) => {
    const dispatch = useDispatch();

    const clickIt = () => {
        dispatch(mapRelatedActions.showingMap(map));
    }

    return (
        <div className={styles.Hotel} onClick={clickIt}>
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