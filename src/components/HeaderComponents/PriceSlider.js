import React, { useReducer } from 'react';
import styles from './PriceSlider.module.css';

const priceReducer = (_, action) => {
    if (action.type === 'CHANGE_VALUE') {
        return { size: action.payload }
    }
}

const PriceSlider = () => {
    const [price, dispatchPrice] = useReducer(priceReducer, { size: 3000 });

    const priceChangeHandler = event => {
        const { value } = event.target.value;
        dispatchPrice({ type: 'CHANGE_VALUE', payload: value });
    }

    return (
        <div className={styles.PriceSlider}>
            <p>Price</p>
            <div>
                <label className={styles.Label} for="price">max $6,090</label>
                <input
                    onChange={priceChangeHandler}
                    type="range"
                    min="1"
                    max="6090"
                    value={price.size}
                    className={styles.Slider}
                    id="myRange"
                    step="1"
                />
            </div>
        </div>
    );
}

export default PriceSlider;