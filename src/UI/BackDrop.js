import React from 'react';
import styles from './BackDrop.module.css';

const BackDrop = ({ show, onClick }) => {
    return (
        <div className={show && styles.backdrop} onClick={onClick}></div>
    );
}

export default BackDrop;