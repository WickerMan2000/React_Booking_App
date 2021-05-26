import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sliderPriceActions } from '../../Store/index';
import styles from './PriceSlider.module.css';

const PriceSlider = () => {
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const priceChangeHandler = event => {
        const { value } = event.target;
        dispatch(sliderPriceActions.changeValue(value));
        setPrice(value);
    }

    return (
        <div className={styles.Slider}>
            <p className={styles.Price}>Price:</p>
            <label className={styles.Label} for="price">max $6,000</label>
            <input
                min={1}
                max={6000}
                value={price}
                id="myRange"
                type="range"
                step={1}
                className={styles.Input}
                onChange={priceChangeHandler}
            />
        </div>
    );
}

export default PriceSlider;