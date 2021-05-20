import React from 'react';

const Button = ({ title, onClick }) => {
    return (
        <button onClick={onClick}>{title}</button>
    );
}

export default Button;