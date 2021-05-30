import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import Map from '../BodyComponents/Map';
import HotelList from '../BodyComponents//HotelList';
import Option from '../HeaderComponents/Option';
import SummaryModal from '../../UI/SummaryModal';
import styles from './Body.module.css';
import sortingOptionsStyles from '../BodyComponents/SortingOptions.module.css';
import backDropStyles from '../../UI/BackDrop.module.css';

const BackDrop = ({ show, onClick }) => {
    return (
        <div className={show && backDropStyles.backdrop} onClick={onClick}></div>
    );
}

const Body = () => {
    const [filters, setFilters] = useState([{ name: 'All' }]);
    const getSummary = useSelector(state => state.summary.show);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(getSummary);
    }, [getSummary])

    console.log(clicked)

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
        setFilters(filters.concat(...filteredArray));
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
            {ReactDOM.createPortal(<BackDrop show={clicked}
                onClick={() => { setClicked(prevState => !prevState) }} />,
                document.getElementById('backdrop-root'))}
            {clicked && <SummaryModal onClick={() => { setClicked(prevState => !prevState) }} />}
        </div>
    );
}

export default Body;