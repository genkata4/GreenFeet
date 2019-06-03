import React from 'react';
import PropTypes from 'prop-types';
import { SecondaryButton } from '../button';

const ControlButtonText = {
    EXPAND: 'EXPAND',
    COLLAPSE: 'COLLAPSE',
};

export class Collapsible extends React.Component {
    static defaultProps = {
        children: null,
        heading: null,
        className: '',
        headerClassName: '',
        bodyClassName: '',
    };

    static propTypes = {
        heading: PropTypes.node,
        children: PropTypes.node,
        className: PropTypes.string,
        headerClassName: PropTypes.string,
        bodyClassName: PropTypes.string,
    };

    state = {
        collapsed: true,
    };

    toggle = () => this.setState({ collapsed: !this.state.collapsed });

    render() {
        const { heading, children, className, headerClassName, bodyClassName, ...rest } = this.props;
        const { collapsed } = this.state;
        const bodyAnimationClass = collapsed ? '' : 'Collapsible__body--visible';
        let headerContent = heading;
        let classNames = collapsed ? 'Collapsible' : 'Collapsible Collapsible--expanded';
        classNames += className;

        if (typeof heading === 'string') {
            headerContent = <span>{heading}</span>;
        }

        return (
            <div {...rest} className={classNames}>
                <div className={`Collapsible__header ${headerClassName}`}>
                    {headerContent}
                    <SecondaryButton onClick={this.toggle}>
                        {collapsed
                            ? ControlButtonText.EXPAND
                            : ControlButtonText.COLLAPSE
                        }
                    </SecondaryButton>
                </div>

                <div className={`Collapsible__body ${bodyAnimationClass} ${bodyClassName}`}>
                    {children}
                </div>
            </div>
        );
    }
}
