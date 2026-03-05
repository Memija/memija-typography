import React from 'react';
import PropTypes from 'prop-types';
import '../OutputStyle.less';
import './ViewOutputStyle.less';

class ViewOutput extends React.Component {
    render() {
        let style = {
            color: this.props.color,
            direction: this.props.direction,
            fontSize: this.props.fontSize,
            letterSpacing: this.props.letterSpacing,
            lineHeight: this.props.lineHeight,
            textAlign: this.props.textAlign,
            textDecoration: this.props.textDecoration,
            textIndent: this.props.textIndent,
            textOverflow: this.props.textOverflow,
            textShadow: this.props.textShadow,
            textTransform: this.props.textTransform,
            whiteSpace: this.props.whiteSpace,
            wordSpacing: this.props.wordSpacing
        };
        return (
            <div className="general-output view-output">
                <div style={style}>{this.props.value}</div>
            </div>
        );
    }
}

ViewOutput.propTypes = {
    color: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    letterSpacing: PropTypes.string.isRequired,
    lineHeight: PropTypes.string.isRequired,
    textAlign: PropTypes.string.isRequired,
    textDecoration: PropTypes.string.isRequired,
    textIndent: PropTypes.string.isRequired,
    textOverflow: PropTypes.string.isRequired,
    textShadow: PropTypes.string.isRequired,
    textTransform: PropTypes.string.isRequired,
    whiteSpace: PropTypes.string.isRequired,
    wordSpacing: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default ViewOutput;
