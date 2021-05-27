import React, { useContext } from 'react';
import InputContext from '../ContextProvider/InputContext';
import styles from './Map.module.css';

const Map = () => {
    const { cleanMap, getTheMap } = useContext(InputContext);

    return (
        <iframe
            width={510}
            height={70}
            className={styles.Map}
            title="Hotel Location"
            src={cleanMap && getTheMap}>
        </iframe>
    );
}

export default Map;