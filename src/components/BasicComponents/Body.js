import React, { useCallback, useState } from 'react';
import Map from '../BodyComponents/Map';
import HotelList from '../BodyComponents//HotelList';
import sortingOptionsStyles from '../BodyComponents/SortingOptions.module.css';
import Option from '../HeaderComponents/Option';
import styles from './Body.module.css';

const Body = () => {
    const [filters, setFilters] = useState([]);

    const sortingOption = useCallback(async data => {
        const newObject = {}
        const result = await data.entries.map(hotelData => {
            return hotelData.filters.map(filter => {
                return {
                    name: filter.name
                };
            })
        })
        const filteredArray = result.filter(object =>
            !newObject[object.name] && (newObject[object.name] = true)
        );
        setFilters(...filteredArray);
    }, [])

    return (
        <div>
            <div className={styles.CoHeader}>
                <Map />
                <Option
                    text="Filters"
                    dataType={filters}
                    property={"name"}
                    dataTransformation={sortingOption}
                    className={sortingOptionsStyles.SortingOptions}
                    eachOptionUrl={'https://mybooking-28176-default-rtdb.firebaseio.com/1.json'} />
            </div>
            <HotelList />
        </div>
    );
}

export default Body;