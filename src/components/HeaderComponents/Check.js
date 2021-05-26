import React, { useContext, useEffect, useState } from 'react';
import InputContext from '../ContextProvider/InputContext';
import Button from '../../UI/Button';
import styles from './Check.module.css';

const Check = React.memo(({ title, initialDate, enableCalendar, itIsCheckedIn, itIsCheckedOut }) => {
    const [reset, setReset] = useState(false);
    const [checkInState, setCheckInState] = useState(false);
    const context = useContext(InputContext);

    useEffect(() => {
        setReset(false);
    }, [initialDate])

    console.log('hi');

    const dateChangeHandler = event => {
        const { value } = event.target;
        if (new Date(value) < new Date()) {
            return;
        }
        setCheckInState(true);
        if (itIsCheckedIn && !itIsCheckedOut) {
            context.dispatch({
                type: 'CHECK_IN_DATE',
                inputCheck: value,
                enable: true
            })
        } else if (!(!itIsCheckedIn && itIsCheckedOut)) {
            context.dispatch({
                type: 'CHECK_OUT_DATE',
                inputCheck: value,
                enable: true
            })
        }
    }

    return (
        <div className={styles.Check}>
            <Button
                onClick={() => { setReset(true) }}
                title="Reset">
            </Button>
            <p className={styles.Title}>{title}:</p>
            <input
                type='date'
                min={new Date()}
                max='2022-12-31'
                className={styles.Input}
                onChange={dateChangeHandler}
                value={reset ? new Date() : initialDate}
                disabled={!checkInState && enableCalendar}
            />
        </div>
    );
})

export default Check;