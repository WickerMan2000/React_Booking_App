import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Map.module.css';

const Map = () => {
    const mapUrl = useSelector(state => state.map.mapUrl);

    return (
        <iframe
            width={510}
            height={70}
            className={styles.Map}
            title="Hotel Location"
            src={mapUrl}>
        </iframe>
    );
}

export default Map;