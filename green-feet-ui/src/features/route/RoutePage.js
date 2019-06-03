import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { Card, Form } from '../../components';
import { FormFieldLabel } from '../../components/form/form-field';
import { PrimaryButton } from '../../components/button';
import { Modal } from '../../components/modal';
import { RoutesTable } from '../components/routes-table/RoutesTable';

const types = [
    {
        value: 'fastest',
        label: 'Fastest',
    },
    {
        value: 'shortest',
        label: 'Shortest',
    },
    {
        value: 'balanced',
        label: 'Balanced',
    },
];

const transportModes = [
    {
        value: 'pedestrian',
        label: '🚶‍Pedestrian',
    },
    {
        value: 'publicTransport',
        label: '🚌 Public Transport',
    },
    {
        value: 'car',
        label: '🚗 Car',
    },
    {
        value: 'bicycle',
        label: '🚲 ‍Bicycle',
    },
];

export class RoutePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            transportMode: '',
            isFinalModalOpen: false,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { routes: oldRoutes } = prevProps;
        const { routes } = this.props;

        if (oldRoutes && oldRoutes.length && (!routes || !routes.length)) {
            this.setState({ isFinalModalOpen: true });
        }
    }

    closeFinalModal = () => this.setState({ isFinalModalOpen: false });

    onTypeChange = ({ value: type }) => this.setState({ type });

    onTransportModeChange = ({ value: transportMode }) => this.setState({ transportMode });

    onSubmit = (e) => {
        const { findRoute } = this.props;
        const { type, transportMode } = this.state;

        e.preventDefault();

        findRoute(type, transportMode);
    };

    render() {
        const { routes, resetStore, selectRoute, selectStartingPosition, findLocation, selectDestination,
            startingPosition, destination, error, loading } = this.props;
        const { isFinalModalOpen } = this.state;
        const isModalOpen = Boolean(routes && routes.length);

        return (
            <div>
                <h2>Route</h2>

                <p>Welcome to Green Feet project</p>

                <Card>
                    <Form onSubmit={this.onSubmit}>

                        <FormFieldLabel>Starting position</FormFieldLabel>
                        <AsyncSelect
                            loadOptions={findLocation}
                            onChange={selectStartingPosition}
                            cacheOptions
                            defaultOptions
                            isClearable
                        />

                        <FormFieldLabel>Destination</FormFieldLabel>
                        <AsyncSelect
                            loadOptions={findLocation}
                            onChange={selectDestination}
                            cacheOptions
                            defaultOptions
                            isClearable
                        />

                        <FormFieldLabel>Mode</FormFieldLabel>
                        <Select
                            options={types}
                            onChange={this.onTypeChange}
                            isClearable
                        />
                        <Select
                            options={transportModes}
                            onChange={this.onTransportModeChange}
                            isClearable
                        />

                        <PrimaryButton
                            type="submit"
                            onClick={this.onSubmit}
                        >
                            Get route
                        </PrimaryButton>

                    </Form>

                    <div>
                        {error}
                        {loading}
                    </div>
                </Card>

                <Modal
                    isOpen={isModalOpen}
                    onClose={resetStore}
                    header="Pick a route from the list"
                >

                    <RoutesTable
                        routes={routes}
                        startingPosition={startingPosition}
                        destination={destination}
                        onClick={selectRoute}
                    />

                </Modal>

                <Modal
                    isOpen={isFinalModalOpen}
                    onClose={this.closeFinalModal}
                    header="Next steps..."
                >
                    Go check out your profile or find another route!
                </Modal>
            </div>
        );
    }
}

RoutePage.defaultProps = {
    error: null,
    routes: null,
    startingPosition: '',
    destination: '',
};

RoutePage.propTypes = {
    selectStartingPosition: PropTypes.func.isRequired,
    selectDestination: PropTypes.func.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    // clearError: PropTypes.func.isRequired,
    resetStore: PropTypes.func.isRequired,
    findLocation: PropTypes.func.isRequired,
    findRoute: PropTypes.func.isRequired,
    selectRoute: PropTypes.func.isRequired,
    routes: PropTypes.array,
    startingPosition: PropTypes.string,
    destination: PropTypes.string,
};
