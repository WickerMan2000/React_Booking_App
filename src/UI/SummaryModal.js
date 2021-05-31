import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SummaryModal.module.css';

const SummaryModal = ({ onClick }) => {
    const checkInOutDates = useSelector(state => Object.values(state.calendar.checkInOutDates));

    return (
        <div className={styles.summaryModal}>
            <div>{checkInOutDates[0]}</div>
            <div>{checkInOutDates[1]}</div>
            <button className={styles.SummaryButton} onClick={onClick}>Cancel</button>
        </div>
    );
}

export default SummaryModal;