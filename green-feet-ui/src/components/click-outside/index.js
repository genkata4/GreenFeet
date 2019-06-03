import React from 'react';
import PropTypes from 'prop-types';

export class ClickOutside extends React.Component {
    static defaultProps = {
        active: true,
        triggerOnClick: true,
        triggerOnEsc: true,
    };

    static propTypes = {
        active: PropTypes.bool,
        triggerOnClick: PropTypes.bool,
        triggerOnEsc: PropTypes.bool,
        onTrigger: PropTypes.func.isRequired,
    };

    wrapperRef = React.createRef();

    componentDidMount() {
        const { active } = this.props;
        if (active) {
            this.bindEvents();
        }
    }

    componentWillUnmount() {
        const { active } = this.props;
        if (active) {
            this.unbindEvents();
        }
    }

    componentDidUpdate(prevProps) {
        const { active } = this.props;
        if (active !== prevProps.active) {
            if (active) {
                this.bindEvents();
            } else {
                this.unbindEvents();
            }
        }
    }

    bindEvents() {
        document.addEventListener('click', this.handleClick);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    unbindEvents = () => {
        document.removeEventListener('click', this.handleClick);
        document.removeEventListener('keydown', this.handleKeyDown);
    };

    handleClick = (event) => {
        const { triggerOnClick, onTrigger } = this.props;
        const { target, type } = event;
        const isClick = type === 'click';

        if (triggerOnClick && this.wrapperRef.current && !this.wrapperRef.current.contains(target)) {
            onTrigger(event, isClick);
        }
    };

    handleKeyDown = (event) => {
        const { triggerOnEsc, onTrigger } = this.props;

        if (triggerOnEsc && event.key === 'Escape') {
            onTrigger(event, false);
        }
    };

    render() {
        const { active, onTrigger, triggerOnClick, triggerOnEsc, children, ...rest } = this.props;

        return (
            <div {...rest} ref={this.wrapperRef}>
                {children}
            </div>
        );
    }
}
