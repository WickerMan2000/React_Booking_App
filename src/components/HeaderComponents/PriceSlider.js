import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { priceSliderActions } from '../../Store/index';
import styles from './PriceSlider.module.css';

const PriceSlider = () => {
    const [price, setPrice] = useState(2000);
    const dispatch = useDispatch();

    const priceChangeHandler = event => {
        const { value } = event.target;
        dispatch(priceSliderActions.changeValue(value));
        setPrice(value);
    }

    return (
        <div className={styles.Slider}>
            <p className={styles.Price}>Price: ${price}</p>
            <label className={styles.Label} for="price">max $2,000</label>
            <input
                min={1}
                max={2000}
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