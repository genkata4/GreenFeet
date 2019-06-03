import React from 'react';
import PropTypes from 'prop-types';
import { RoutesTable } from '../components/routes-table/RoutesTable';
import { TextField, FormField, Card, ConditionalSpinner, InfoAlert, DangerButton } from '../../components';
import { PrimaryButton } from '../../components/button';
import { Form } from '../../components/form';

export class UserPage extends React.Component {
    static defaultProps = {
        userName: null,
        carbonFootprint: null,
        routes: null,
        error: null,
    };

    static propTypes = {
        userName: PropTypes.string,
        carbonFootprint: PropTypes.number,
        routes: PropTypes.array,
        error: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        loading: PropTypes.bool.isRequired,
        updateUserName: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired,
        fetchRoutes: PropTypes.func.isRequired,
    };

    state = {
        userName: '',
    };

    componentDidMount() {
        this.props.fetchRoutes();
    }

    onUserNameChange = (event) => this.setState({ userName: event.target.value });

    onSubmit = (event) => {
        event.preventDefault();

        this.props.updateUserName(this.state.userName);
    };

    render() {
        const { userName, carbonFootprint, routes, deleteUser, error, loading } = this.props;

        return (
            <div className="UserPage">
                <h2>User</h2>

                <p>Welcome to Green Feet project</p>

                <Card>

                    <Form onSubmit={this.onSubmit}>

                        <ConditionalSpinner active={loading} error={error} />

                        <PrimaryButton
                            type="submit"
                            onClick={this.onSubmit}
                        >
                            Submit
                        </PrimaryButton>

                        <DangerButton
                            type="button"
                            onClick={deleteUser}
                        >
                            Delete user
                        </DangerButton>

                        <FormField
                            input={
                                <TextField
                                    value={userName}
                                    onChange={this.onUserNameChange}
                                />
                            }
                            label="User name"
                        />

                        <FormField
                            input={
                                <TextField
                                    value={String(carbonFootprint)}
                                    readOnly
                                />
                            }
                            label="Carbon Footprint"
                        />

                        {(routes && routes.length)
                            ? <RoutesTable routes={routes} />
                            : <InfoAlert>Plan a first route to see more information</InfoAlert>
                        }

                    </Form>

                </Card>

            </div>
        );
    }
}
