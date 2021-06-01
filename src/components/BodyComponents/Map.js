import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './Map.module.css';

const Map = React.memo(() => {
    const cleanMap = useSelector(state => state.map.condition);
    const identity = useSelector(state => state.map.identity);
    const isUnmounted = useSelector(state => state.map.isUnmounted);
    const getTheMap = useSelector(state => state.map.map);
    const identityRef = useRef(identity);
    const mapRef = useRef(getTheMap);
    const presupposition = isUnmounted && identity && identityRef.current;

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
            src={presupposition && identity === identityRef.current ? cleanMap && getTheMap :
                presupposition && identity !== identityRef.current ? !cleanMap && mapRef.current :
                    getTheMap}>
        </iframe>
    );
})

export default Map;