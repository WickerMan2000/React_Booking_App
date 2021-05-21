import React, { useEffect, useState } from 'react';
import styles from './Location.module.css';
import useHttpRequest from '../../Hooks/useHttpRequest';

const Location = () => {
    const [cities, setCities] = useState([]);
    const { error, isLoading, changeOptionHandler: changeLocationHandler } = useHttpRequest();

    useEffect(() => {
        const abortController = new AbortController();
        const workWithCitiesData = async data => {
            const newObject = {}
            const result = await data.entries.map(hotelData => {
                return {
                    location: hotelData.city
                };
            })
            const filteredArray = result.filter(object =>
                !newObject[object.location] && (newObject[object.location] = true)
            );
            setCities(filteredArray);
        }
        changeLocationHandler(abortController, {
            url: 'https://mybooking-28176-default-rtdb.firebaseio.com/1.json'
        }, workWithCitiesData);
        return () => abortController.abort();
    }, [changeLocationHandler])

    return (
        <div className={styles.Location}>
            <select onChange={changeLocationHandler.bind(null, new AbortController())} >
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