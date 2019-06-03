import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../index';

const AlertEnum = {
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
};

export class Alert extends React.Component {
    static defaultProps = {
        children: null,
        className: '',
        onClose: () => {},
        permanent: false,
    };

    static propTypes = {
        type: PropTypes.oneOf(Object.values(AlertEnum)).isRequired,
        className: PropTypes.string,
        children: PropTypes.node,
        onClose: PropTypes.func,
        permanent: PropTypes.bool,
    };

    static type = AlertEnum;

    state = {
        isDisplayed: true
    };

    componentDidUpdate(prevProps) {
        const { children } = this.props;

        if (children && prevProps.children !== children) {
            this.setState({
                isDisplayed: true,
            });
        }
    }

    // using timeout because of bug, when this component is inside click-outside component
    handleClose = () => setTimeout(this.closeAlert, 0);

    closeAlert = () => this.setState({ isDisplayed: false }, this.props.onClose);

    render() {
        const { children, type, className, permanent, ...rest } = this.props;
        const { isDisplayed } = this.state;

        if (!children || !isDisplayed) return null;

        return (
            <Card {...rest} className={`Alert Alert--${type} ${className}`} >
                {children}
                {!permanent &&
                    <span className="Alert__close" onClick={this.handleClose}>
                        x
                    </span>
                }
            </Card>
        );
    }
}
