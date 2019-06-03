import React from 'react';
import PropTypes from 'prop-types';

export class FileInput extends React.Component {
    static defaultProps = {
        className: '',
        multiple: false,
        onChange: () => {},
        onFocus: () => {},
        onBlur: () => {},
    };

    static propTypes = {
        className: PropTypes.string,
        multiple: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
    };

    fileInputRef = React.createRef();

    onChange = (event) => {
        const { onChange } = this.props;

        event.preventDefault();

        onChange(this.fileInputRef.current.files);
    };

    render() {
        const { className, onFocus, onBlur, multiple, ...rest } = this.props;

        return (
            <input
                {...rest}
                multiple={multiple}
                onChange={this.onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                type="file"
                ref={this.fileInputRef}
                className={`text-field ${className}`}
            />
        );
    }
}
