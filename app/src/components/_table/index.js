import React, { useState } from 'react';
import { TableContainer, Box, TableBody, Button, Table, TableHead, TableRow, TableCell, Paper, Typography } from '@material-ui/core'

function UserTable() {

    let rows = [{ id: '', firstname: '', firstname: '' }]
    let hide = true;

    const [userTableState, setState] = useState({rows,hide});

    function onRetrieveClick() {
        const request = fetch('/users');
        request.then(response => {
            response.json().then(data => {
                setState({
                    rows:data,
                    hide:false
                })
            })
        })
    }

    return (
        <Box width="100%" flex={1} component="div">
            <Typography variant="h6">Retrieve Users</Typography><br />
            <Box mb="10px">
                <Button onClick={onRetrieveClick} variant="contained" color="secondary">Retreive</Button>
            </Box>
            <TableContainer hidden={userTableState.hide} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userTableState.rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.firstname}</TableCell>
                                <TableCell align="left">{row.lastname}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default UserTable;