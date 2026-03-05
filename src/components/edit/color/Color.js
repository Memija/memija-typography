import React from 'react';
import PropTypes from 'prop-types';
import '../EditStyle.less';

const Color = ({ onChange }) => {
    const handleChange = (e) => {
        let color = e.target.value;
        onChange(color);
    };

    return (
        <div className="row edit">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div
                    className="btn btn-default"
                    data-placement="top"
                    data-toggle="tooltip"
                    disabled
                    title="Set CSS color property value."
                >
                    <i className="fa fa-paint-brush fa-lg"></i>
                </div>
                &nbsp;
                <label htmlFor="color">Color</label>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <input onChange={handleChange} type="color" data-testid="color-input"/>
            </div>
        </div>
    );
};

Color.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Color;
