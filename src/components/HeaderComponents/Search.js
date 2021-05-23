import React, { useCallback, useContext, useEffect, useState } from 'react';
import InputContext from '../ContextProvider/InputContext';
import Button from '../../UI/Button';
import styles from './Search.module.css';

const Search = () => {
    const [enteredText, setEnteredText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [result, setResult] = useState({});
    const context = useContext(InputContext);

    const queryFunction = useCallback(async () => {
        const query = enteredText.length === 0 ? '' : `?orderBy="city"&equalTo="${enteredText}"`;
        const response = await fetch('https://mybooking-28176-default-rtdb.firebaseio.com/1/entries.json' + query);
        const data = await response.json();
        const result = [];
        for (const key in data) {
            result.push({
                city: data[key].city,
                filters: data[key].filters,
                guestrating: data[key].guestrating,
                hotelName: data[key].hotelName,
                mapurl: data[key].mapurl,
                price: data[key].price,
                rating: data[key].rating,
                ratings: data[key].ratings,
                thumbnail: data[key].thumbnail
            })
        }
        setResult(result);

    }, [enteredText])

    useEffect(() => {
        queryFunction();
        if (isClicked) {
            context.dispatch({
                type: "SEARCHED_DATA",
                searchedData: result
            })
        }
        return () => setIsClicked(false);
    }, [isClicked, context, queryFunction])

    const getSearchedText = event => {
        const { value } = event.target;
        setEnteredText(value);
    }

    return (
        <div className={styles.Search}>
            <p className={styles.title}>My Booking</p>
            <input
                type="text"
                value={enteredText.charAt(0).toUpperCase() + enteredText.slice(1)}
                className={styles.SearchBar} onChange={getSearchedText}
            />
            <Button
                title='Search'
                onClick={() => setIsClicked(true)}
            >
            </Button>
        </div>
    );
}

export default Search;