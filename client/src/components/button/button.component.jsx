import React from 'react';
import './button.styles.scss';

const Button = ({ content }) => {
    return (
        <button className='button'>{content}</button>
    )
}

export default Button;