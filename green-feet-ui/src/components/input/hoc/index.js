import React from 'react';
import PropTypes from 'prop-types';

export const createInput = (WrappedComponent) => {
    class Input extends React.Component {
        static defaultProps = {
            transformValue: (v) => v,
        };

        static propTypes = {
            value: PropTypes.any.isRequired,
            onChange: PropTypes.func,
            onBlur: PropTypes.func,
            transformValue: PropTypes.func,
        };

        constructor(props) {
            super(props);
            this.state = {
                value: this.props.value || '',
            };
            this.handleChange = this.handleChange.bind(this);
        }

        componentDidUpdate(prevProps) {
            const { value } = this.props;

            if (value !== prevProps.value) {
                this.setState({
                    value,
                });
            }
        }

        handleChange = (event) => {
            const { onChange, transformValue } = this.props;
            let value = transformValue(event.target.value);

            if (event.target.type === 'checkbox') {
               value = event.target.checked;
            }

            if (onChange) {
                onChange(event);
            }

            this.setState({ value });
        };

        handleBlur = (event) => {
            const { onBlur, transformValue } = this.props;
            let value = transformValue(event.target.value);

            if (event.target.type === 'checkbox') {
                value = event.target.checked;
            }

            if (onBlur) {
                onBlur(event);
            }

            this.setState({ value });
        };

        render() {
            const { value } = this.state;
            const { transformValue, ...rest } = this.props;

            return (
                <WrappedComponent
                    {...rest}
                    value={value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
            );
        }
    }

    return Input;
};
