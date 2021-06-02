import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Map.module.css';

const Map = React.memo(() => {
    const cleanMap = useSelector(state => state.map.condition);
    const identity = useSelector(state => state.map.identity);
    const isUnmounted = useSelector(state => state.map.isUnmounted);
    const getTheMap = useSelector(state => state.map.map);

    return (
        <iframe
            width={510}
            height={70}
            className={styles.Map}
            title="Hotel Location"
            src={isUnmounted && identity ? cleanMap && getTheMap : getTheMap}>
        </iframe >
    );
})

export default Map;