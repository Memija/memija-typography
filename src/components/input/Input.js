import React from 'react';
import PropTypes from 'prop-types';
import './InputStyle.less';

const Input = ({ onChange }) => {
    const handleChange = (e) => {
        let value = e.target.value;
        onChange(value);
    };

    return (
        <div className="input">
            <textarea onChange={handleChange} placeholder="Start typing ..."></textarea>
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Input;
