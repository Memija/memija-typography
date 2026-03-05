import React from 'react';
import PropTypes from 'prop-types';
import '../EditStyle.less';
import './TextShadowStyle.less';

class TextShadow extends React.Component {
    constructor(props) {
        super(props);
        this.horizontalRef = React.createRef();
        this.verticalRef = React.createRef();
        this.blurRef = React.createRef();
        this.colorRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        // Compose text-shadow property value.
        let textShadow =
            this.horizontalRef.current.value +
            'px ' +
            this.verticalRef.current.value +
            'px ' +
            this.blurRef.current.value +
            'px ' +
            this.colorRef.current.value;
        this.props.onChange(textShadow);
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
                        title="Set CSS text-shadow property value."
                    >
                        <i className="fa fa-flash fa-lg"></i>
                    </div>
                    &nbsp;
                    <label htmlFor="text-shadow">Text shadow</label>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-shadow-input">
                    <input
                        data-toggle="tooltip"
                        defaultValue="0"
                        id="text-shadow-horizontal"
                        max="100"
                        min="-25"
                        onChange={this.handleChange}
                        title="Set horizontal value for text-shadow property."
                        type="number"
                        ref={this.horizontalRef}
                    />
                    &nbsp;
                    <input
                        data-toggle="tooltip"
                        defaultValue="0"
                        id="text-shadow-vertical"
                        max="50"
                        min="-25"
                        onChange={this.handleChange}
                        title="Set vertical value for text-shadow property."
                        type="number"
                        ref={this.verticalRef}
                    />
                    &nbsp;
                    <input
                        data-toggle="tooltip"
                        defaultValue="0"
                        id="text-shadow-blur"
                        max="100"
                        min="0"
                        onChange={this.handleChange}
                        title="Set blur value for text-shadow property."
                        type="number"
                        ref={this.blurRef}
                    />
                    &nbsp;
                    <input
                        data-toggle="tooltip"
                        defaultValue="#ffffff"
                        id="text-shadow-color"
                        onChange={this.handleChange}
                        title="Set color value for text-shadow property."
                        type="color"
                        ref={this.colorRef}
                    />
                </div>
            </div>
        );
    }
}

TextShadow.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default TextShadow;
