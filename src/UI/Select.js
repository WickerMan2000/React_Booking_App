import React from 'react';

const Select = ({ className, onChange, isLoading, error, data, property }) => {

    const dataHandler = event => {
        const { value } = event.target;
        onChange(value);
    }

    return (
        <div className={className}>
            <select onChange={dataHandler} >
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