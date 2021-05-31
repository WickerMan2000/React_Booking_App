import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapActions } from '../../Store/index';
import { summaryActions } from '../../Store/index';
import styles from './Hotel.module.css';

const Hotel = ({ thumbnail, city, guestrating, hotelName, price, filters, map, id }) => {
    const readyToContinue = useSelector(state => state.calendar.readyForDeal);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(mapActions.changeCondition({ condition: false, id: id }));
        };
    }, [dispatch, id])

    const clickIt = () => {
        dispatch(mapActions.changeCondition({ condition: true, map: map, id: id }));
    }

    const getSummary = () => {
        dispatch(summaryActions.summary());
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
            <button onClick={readyToContinue && getSummary}>View Deal</button>
        </div>
    );
}

export default Hotel;