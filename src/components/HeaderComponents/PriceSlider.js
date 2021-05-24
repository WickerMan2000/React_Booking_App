import React, { useContext, useState } from 'react';
import InputContext from '../ContextProvider/InputContext';
import styles from './PriceSlider.module.css';

const PriceSlider = () => {
    const [price, setPrice] = useState(0);
    const context = useContext(InputContext);

    const priceChangeHandler = event => {
        const { value } = event.target;
        context.dispatch({ type: 'CHANGE_VALUE', value: value });
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