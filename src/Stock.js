/* eslint-disable no-script-url */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


export default class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('http://routezjlizz04-workspaceccme5ifui0ekjbt1.apps.ocp3.lab.spodon.com/stocklevels');
        const data = await response.json();
  
        console.log("data", data);
        this.setState({rows: data});
    }
    
    render() {
        return (
            <React.Fragment>
                <Title>Recent Orders</Title>
                <Table size="small">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.rows.map(row => (
                        <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}