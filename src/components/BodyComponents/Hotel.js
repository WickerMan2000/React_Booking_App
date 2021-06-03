import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hintActions, mapActions, summaryActions, summaryDataActions } from '../../Store/index';
import styles from './Hotel.module.css';

const Hotel = React.memo(({ thumbnail, city, guestRating, hotelName, price, filters, map, id, isClicked }) => {
    const readyToContinue = useSelector(state => state.calendar.readyForDeal);
    const clickedRef = useRef(isClicked);
    const dispatch = useDispatch();

    useEffect(() => {
        clickedRef.current = isClicked;
    }, [isClicked])

    useEffect(() => {
        return () => {
            clickedRef.current && dispatch(mapActions.changeCondition({ condition: false, id: id, unmount: true }));
        };
    }, [dispatch, id])

    const clickIt = () => {
        dispatch(mapActions.changeCondition({ condition: true, map: map, id: id, unmount: false }));
    }

    const getSummary = () => {
        dispatch(summaryActions.summary());
        dispatch(summaryDataActions.showSummaryData({ image: thumbnail, hotelName: hotelName, price: price, city: city }));
    }

    const getHint = () => {
        dispatch(hintActions.showHint(true));
    }

    return (
        <div className={isClicked ? [styles.Hotel, styles.Focus].join(" ") : styles.Hotel}>
            <h1>{city}</h1>
            <h2>{guestRating} stars</h2>
            <h3>{hotelName}</h3>
            <h4>${price}</h4>
            <ul>
                {filters.map(filter => (
                    <li>{filter.name}</li>
                ))}
            </ul>
            <img src={thumbnail} alt="Just a Pic" />
            <button onClick={readyToContinue ? getSummary : getHint}>View Deal</button>
            <button onClick={clickIt}>View Map</button>
        </div>
    );
})

export default Hotel;