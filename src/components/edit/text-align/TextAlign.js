import React from 'react';
import PropTypes from 'prop-types';
import '../EditStyle.less';

class TextAlign extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeLeft = this.handleChangeLeft.bind(this);
        this.handleChangeRight = this.handleChangeRight.bind(this);
        this.handleChangeCenter = this.handleChangeCenter.bind(this);
        this.handleChangeJustify = this.handleChangeJustify.bind(this);
    }

    handleChangeLeft() {
        this.props.onChange('left');
    }

    handleChangeRight() {
        this.props.onChange('right');
    }

    handleChangeCenter() {
        this.props.onChange('center');
    }

    handleChangeJustify() {
        this.props.onChange('justify');
    }

    render() {
        return (
            <div className="row edit">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div
                        className="btn btn-default"
                        data-placement="top"
                        data-toggle="tooltip"
                        disabled
                        title="Set CSS text-align property value."
                    >
                        <i className="fa fa-file-text-o fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor="text-align">Text align</label>
                </div>
                <div className="btn-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button
                        className="btn btn-default"
                        data-placement="top"
                        data-toggle="tooltip"
                        onClick={this.handleChangeLeft}
                        title="Set CSS text-align property value to left."
                    >
                        <i className="fa fa-align-left fa-lg"></i>
                    </button>
                    <button
                        className="btn btn-default"
                        data-placement="top"
                        data-toggle="tooltip"
                        onClick={this.handleChangeRight}
                        title="Set CSS text-align property value to right."
                    >
                        <i className="fa fa-align-right fa-lg"></i>
                    </button>
                    <button
                        className="btn btn-default"
                        data-placement="top"
                        data-toggle="tooltip"
                        onClick={this.handleChangeCenter}
                        title="Set CSS text-align property value to center."
                    >
                        <i className="fa fa-align-center fa-lg"></i>
                    </button>
                    <button
                        className="btn btn-default"
                        data-placement="top"
                        data-toggle="tooltip"
                        onClick={this.handleChangeJustify}
                        title="Set CSS text-align property value to justify."
                    >
                        <i className="fa fa-align-justify fa-lg"></i>
                    </button>
                </div>
            </div>
        );
    }
}

TextAlign.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default TextAlign;
