import React from 'react';
import Property from '../HeaderComponents/Property';
import Rating from '../HeaderComponents/Rating';
import styles from './Choices.module.css';

const Choices = () => {
    return (
        <div className={styles.Choices}>
            <Property />
            <Rating />
        </div>
    );
}

export default Choices;