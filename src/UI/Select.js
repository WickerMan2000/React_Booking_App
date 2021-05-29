import React from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../Store/index';

const Select = ({ onChange, isLoading, error, data, property, text, disabled }) => {
    const dispatch = useDispatch();

    const dataHandler = event => {
        const { value } = event.target;
        if (text === 'Filters') {
            dispatch(filterActions.chooseFilter(value));
        }
        if (text === 'Cities') {
            dispatch(filterActions.chooseCity(value));
        }
        if (text === 'Rooms') {
            dispatch(filterActions.chooseRoomType(value));
        }
        onChange(value);
    }

    return (
        <div style={{
            'display': 'grid',
            'grid-template-columns': 'repeat(10, 10%)',
            'grid-template-rows': 'repeat(6, 0.3rem)'
        }}>
            <p style={{
                'display': 'grid',
                'grid-column': '1/4',
                'grid-row': '2/6',
                'margin-top': '0.1px',
                'font-size': 'medium'
            }}>{text}:</p>
            <select disabled={disabled} onChange={dataHandler} style={{
                'grid-column': '4/10',
                'grid-row': '1/6',
                'font-size': 'large'
            }} >
                {!isLoading && error && <p>{error}</p>}
                {
                    data.map((typeOfData, index) =>
                        <option key={index} value={typeOfData[property]}>
                            {typeOfData[property]}
                        </option>)
                }
            </select>
        </div>
    );
}

export default Select;