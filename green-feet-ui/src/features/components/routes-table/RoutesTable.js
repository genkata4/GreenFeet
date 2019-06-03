import React from 'react';
import PropTypes from 'prop-types';
import { RoutesTableRow } from './RoutesTableRow';
import { Table, TableBody, TableHead, TableHeaderCell, TableRow, FormFieldLabel } from '../../../components';

export const RoutesTable = ({ routes, startingPosition, destination, onClick }) => (
    <div>

        <FormFieldLabel>Routes</FormFieldLabel>

        <Table className="Page__table">
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Starting point</TableHeaderCell>
                    <TableHeaderCell>Destination</TableHeaderCell>
                    <TableHeaderCell>Distance</TableHeaderCell>
                    <TableHeaderCell>Time</TableHeaderCell>
                    <TableHeaderCell>Carbon emissions</TableHeaderCell>
                    <TableHeaderCell>Mean of transport</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {routes.map((route) => (
                    <RoutesTableRow
                        key={route.id || (route.time * route.distance) % 100}
                        startingPosition={startingPosition}
                        destination={destination}
                        {...route}
                        onClick={onClick}
                    />
                ))}
            </TableBody>
        </Table>

    </div>
);

RoutesTable.defaultProps = {
    startingPosition: null,
    destination: null,
    onClick: () => {},
};

RoutesTable.propTypes = {
    routes: PropTypes.array.isRequired,
    startingPosition: PropTypes.string,
    destination: PropTypes.string,
    onClick: PropTypes.func,
};
