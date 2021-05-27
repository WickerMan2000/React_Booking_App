import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { calendarActions } from '../../Store/index';
import Button from '../../UI/Button';
import styles from './Check.module.css';

const Check = React.memo(({ title, initialDate, enableCalendar, itIsCheckedIn, itIsCheckedOut }) => {
    const [checkInState, setCheckInState] = useState(false);
    const [reset, setReset] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setReset(false);
    }, [initialDate])

    const dateChangeHandler = event => {
        const { value } = event.target;
        if (new Date(value) < new Date()) {
            return;
        }
        setCheckInState(true);
        if (itIsCheckedIn && !itIsCheckedOut) {
            dispatch(calendarActions.checkIn({
                inputCheck: value,
                enable: true
            }))
        } else if (!(!itIsCheckedIn && itIsCheckedOut)) {
            dispatch(calendarActions.checkOut({
                inputCheck: value,
                enable: true
            }))
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