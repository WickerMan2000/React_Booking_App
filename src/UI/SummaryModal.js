import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SummaryModal.module.css';

const SummaryModal = ({ onClick }) => {
    const checkInOutDates = useSelector(state => Object.values(state.calendar.checkInOutDates));
    const image = useSelector(state => state.summaryData.image);
    const hotelName = useSelector(state => state.summaryData.hotelName);
    const city = useSelector(state => state.summaryData.city);
    const price = useSelector(state => state.summaryData.price);

    return (
        <div className={styles.summaryModal}>
            <div className={styles.City}>{city}</div>
            <div className={styles.Price}>${price}</div>
            <div className={styles.HotelName}>{hotelName}</div>
            <div className={styles.CheckIn}>From: {checkInOutDates[0]}</div>
            <div className={styles.CheckOut}>To: {checkInOutDates[1]}</div>
            <img className={styles.Image} src={image} alt="Just a Pic" />
            <button className={styles.SummaryButton} onClick={onClick}>Cancel</button>
        </div>
    );
}

export default SummaryModal;