import React from 'react';
import Button from '../../UI/Button';
import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.Search}>
            <p className={styles.title}>My Booking</p>
            <input className={styles.SearchBar} />
            <Button title='Search'></Button>
        </div>
    );
}

export default Search;