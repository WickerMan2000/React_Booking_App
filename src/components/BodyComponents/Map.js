import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './Map.module.css';

const Map = () => {
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

    return (
        <iframe
            width={510}
            height={70}
            className={styles.Map}
            title="Hotel Location"
            src={checkIdentity !== identityRef.current ? cleanMap && mapRef.current : getTheMap}>
        </iframe>
    );
}

export default Map;