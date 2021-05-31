import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './Map.module.css';

const Map = React.memo(() => {
    const cleanMap = useSelector(state => state.map.condition);
    const getTheMap = useSelector(state => state.map.map);
    const identity = useSelector(state => state.map.identity);
    const checkIdentity = useSelector(state => state.map.checkIdentity);
    const identityRef = useRef(identity);
    const mapRef = useRef(getTheMap);

    useEffect(() => {
        identityRef.current = identity;
        mapRef.current = getTheMap;
    }, [identity, getTheMap])

    // console.log(identity !== identityRef.current);
    console.log(identity);
    console.log(identityRef.current);

    return (
        <iframe
            width={510}
            height={70}
            className={styles.Map}
            title="Hotel Location"
            src={cleanMap && getTheMap}>
        </iframe>
    );
})

export default Map;