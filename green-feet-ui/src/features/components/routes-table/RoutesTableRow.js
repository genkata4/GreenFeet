import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '../../../components';

export class RoutesTableRow extends React.Component {
    onClick = () => {
        const { distance, time, carbonEmissions, transportMode, onClick } = this.props;

        onClick({ distance, time, carbonEmissions, transportMode });
    };

    render() {
        const { startingPosition, destination, distance, time, carbonEmissions, transportMode } = this.props;
        return (
            <TableRow onClick={this.onClick} className="tr-clickable">
                <TableCell>
                    {startingPosition}
                </TableCell>
                <TableCell>
                    {destination}
                </TableCell>
                <TableCell>
                    {distance}
                </TableCell>
                <TableCell>
                    {time}
                </TableCell>
                <TableCell>
                    {carbonEmissions}
                </TableCell>
                <TableCell>
                    {transportMode}
                </TableCell>
            </TableRow>
        );
    }
}

RoutesTableRow.propTypes = {
    startingPosition: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    carbonEmissions: PropTypes.number.isRequired,
    transportMode: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
