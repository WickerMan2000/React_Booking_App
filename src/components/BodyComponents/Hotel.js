import React, { useContext, useEffect } from 'react';
import InputContext from '../ContextProvider/InputContext';
import styles from './Hotel.module.css';

const Hotel = ({ thumbnail, city, guestrating, hotelName, price, filters, map }) => {
    const context = useContext(InputContext);

    useEffect(() => {
        return () => context.dispatch({
            type: 'CLEAN_THE_MAP',
            condition: false
        });
    }, [])

    const clickIt = () => {
        context.dispatch({
            type: 'CLEAN_THE_MAP',
            condition: true,
            map: map
        });
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