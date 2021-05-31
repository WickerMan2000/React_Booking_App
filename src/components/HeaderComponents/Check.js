import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calendarActions, hintActions } from '../../Store/index';
import Button from '../../UI/Button';
import styles from './Check.module.css';

const Check = React.memo(({ title, initialDate, enableCalendar, itIsCheckedIn, itIsCheckedOut }) => {
    const readyToContinue = useSelector(state => state.calendar.readyForDeal);
    const hintIt = useSelector(state => state.hint.hint);
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
        if (itIsCheckedIn && !itIsCheckedOut) {
            setCheckInState(true);
            dispatch(hintActions.showHint(false));
            dispatch(calendarActions.checkIn({
                inputCheck: value,
                enable: true
            }));
        } else if (!(!itIsCheckedIn && itIsCheckedOut)) {
            dispatch(hintActions.showHint(false));
            dispatch(calendarActions.checkOut({
                inputCheck: value,
                enable: true
            }));
        }
    }

    return (
        <div className={styles.Check}>
            <Button
                onClick={() => {
                    setReset(true);
                    setCheckInState(false);
                    dispatch(calendarActions.reset({ ready: false }));
                }}
                title="Reset">
            </Button>
            <p className={styles.Title}>{title}:</p>
            <input
                type='date'
                min={new Date()}
                max='2022-12-31'
                onChange={dateChangeHandler}
                value={reset ? new Date() : initialDate}
                disabled={!checkInState && enableCalendar}
                className={!readyToContinue && hintIt ? [styles.Input, styles.Attention].join(" ") : styles.Input}
            />
        </div>
    );
})

export default Check;