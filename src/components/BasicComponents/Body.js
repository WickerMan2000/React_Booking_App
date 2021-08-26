import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { summaryActions } from '../../Store/index';
import Map from '../BodyComponents/Map';
import Option from '../HeaderComponents/Option';
import SummaryModal from '../../UI/SummaryModal';
import BackDrop from '../../UI/BackDrop';
import styles from './Body.module.css';
import sortingOptionsStyles from '../BodyComponents/SortingOptions.module.css';

const Body = () => {
    const readyToContinue = useSelector(state => state.calendar.readyForDeal);
    const getSummary = useSelector(state => state.summary.show);
    const [filters, setFilters] = useState([{ name: 'All' }]);
    const dispatch = useDispatch();

    const sortingOption = useCallback(data => {
        const newObject = {}
        const result = data.entries.map(hotelData => {
            return hotelData.filters.map(filter => {
                return {
                    name: filter.name
                };
            })
        })
        const filteredArray = result.filter(object =>
            !newObject[object.name] && (newObject[object.name] = true)
        );
        setFilters(state => state.concat(...filteredArray));
    }, [])

    return (
        <div className={styles.CoHeader}>
            <Map />
            <Option
                text="Filters"
                dataType={filters}
                property={"name"}
                dataTransformation={sortingOption}
                className={sortingOptionsStyles.SortingOptions}
                eachOptionUrl={'https://mybooking-28176-default-rtdb.firebaseio.com/1.json'} />
            {readyToContinue && <BackDrop show={getSummary} onClick={() => dispatch(summaryActions.summary())} />}
            {readyToContinue && getSummary && <SummaryModal onClick={() => dispatch(summaryActions.summary())} />}
        </div>
    );
}

export default Body;