import React from 'react';
import PropTypes from 'prop-types';

export const resetStoreHoc = (Component) =>
    class extends React.Component {
        static propTypes = {
            resetStore: PropTypes.func.isRequired,
        };

        componentWillUnmount() {
            this.props.resetStore();
        }

        render() {
            return <Component {...this.props} />;
        }
    };
