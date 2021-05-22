import React, { useEffect, useState } from 'react';
import useHttpRequest from '../../Hooks/useHttpRequest';
import Select from '../../UI/Select';
import styles from './Location.module.css';

const Location = () => {
    const [cities, setCities] = useState([]);
    const { error, isLoading, changeOptionHandler: changeLocationHandler } = useHttpRequest();

    useEffect(() => {
        const abortController = new AbortController();
        const workingWithCitiesData = async data => {
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
        }, workingWithCitiesData);
        return () => abortController.abort();
    }, [changeLocationHandler])

    return (
        <Select
            className={styles.Location}
            onChange={changeLocationHandler.bind(null, new AbortController())}
            isLoading={isLoading}
            error={error}
            data={cities}
            property={"location"}
        >
        </Select>
    );
}

export default Location;