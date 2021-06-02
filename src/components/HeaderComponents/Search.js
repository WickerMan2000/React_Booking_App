import React, { useCallback, useEffect, useState } from 'react';
import { searchedTextActions } from '../../Store/index';
import Button from '../../UI/Button';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';

const Search = () => {
    const [enteredText, setEnteredText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [result, setResult] = useState({});
    const dispatch = useDispatch();

    const queryFunction = useCallback(async () => {
        const query = enteredText.length !== 0 && `?orderBy="city"&equalTo="${enteredText}"`;
        const response = await fetch('https://mybooking-28176-default-rtdb.firebaseio.com/1/entries.json' + query);
        const data = await response.json();
        const result = [];
        for (const key in data) {
            result.push({
                key: Math.floor(Math.random() * 100),
                city: data[key].city,
                filters: data[key].filters,
                guestrating: data[key].guestrating,
                hotelName: data[key].hotelName,
                mapurl: data[key].mapurl,
                price: data[key].price,
                rating: data[key].rating,
                ratings: data[key].ratings,
                thumbnail: data[key].thumbnail,
                roomtype: data[key].roomtype
            })
        }
        setResult(result);
    }, [enteredText])

    useEffect(() => {
        queryFunction();
        if (isClicked) {
            dispatch(searchedTextActions.searchText(result));
        }
        return () => setIsClicked(false);
    }, [isClicked, queryFunction, dispatch])

    const getSearchedText = event => {
        const { value } = event.target;
        setEnteredText(value);
    }

    return (
        <div className={styles.Search}>
            <p className={styles.title}>My Booking</p>
            <input
                type="text"
                className={styles.SearchBar}
                onChange={getSearchedText}
                value={(enteredText.charAt(0).toUpperCase() + enteredText.slice(1)).trim()}
            />
            <Button
                title='Search'
                onClick={() => setIsClicked(true)}
                disabled={enteredText.length === 0}
            >
            </Button>
        </div>
    );
}

export default Search;