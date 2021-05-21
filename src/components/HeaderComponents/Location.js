import React, { useCallback, useEffect, useState } from 'react';
import styles from './Location.module.css';

const Location = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [cities, setCities] = useState([]);

    const changeLocationHandler = useCallback(async abortController => {
        const newObject = {};
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://mybooking-28176-default-rtdb.firebaseio.com/1.json', {
                signal: abortController.signal
            });
            if (!response.ok) {
                throw new Error("An error occured");
            }
            const data = await response.json();
            const result = await data.entries.map(hotelData => {
                return {
                    location: hotelData.city
                };
            })
            const filteredArray = result.filter(object =>
                !newObject[object.location] && (newObject[object.location] = true)
            );
            setCities(filteredArray);
        } catch (error) {
            if (abortController.signal.aborted) {
                setError(error.message);
            } else {
                throw error;
            }
        }
        setIsLoading(false);
    }, [])

    useEffect(() => {
        const abortController = new AbortController();
        changeLocationHandler(abortController);
        return () => abortController.abort();
    }, [changeLocationHandler])

    return (
        <div className={styles.Location}>
            <select onChange={changeLocationHandler} >
                {!isLoading && error && <p>{error}</p>}
                {
                    cities.map((cityName, index) =>
                        <option key={index} value={cityName.location}>
                            {cityName.location}
                        </option>)
                }
            </select>
        </div>
    );
}

export default Location;