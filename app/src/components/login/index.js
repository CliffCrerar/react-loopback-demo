import { Box, Typography, Button, Container, TextField } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import './index.scss';

const Login = () => {

    const [message, setMessage] = useState(null);

    function onSubmitClick(ev) {
        console.log('ev: ', ev);
        ev.persist();
        ev.preventDefault();
        const { firstname, lastname } = ev.currentTarget.form;
        const request = fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: firstname.value, lastname: lastname.value })
        });
        request.then(response => {
            setMessage(response.statusText)
            console.log(response);
        });
    }

    return (
        <Container maxWidth="lg">
            <Typography variant="h6">Add Users</Typography><br />
            <Box >
                <form>
                    <TextField
                        // component="input"
                        className="input"
                        name="firstname"
                        variant="outlined"
                        label="First Name" /><br />
                    <TextField
                        // component="input"
                        className="input"
                        name="lastname"
                        variant="outlined"
                        label="Last Name" /><br />
                    <Box>
                        <Button variant="outlined" onClick={onSubmitClick} type="submit">Submit</Button>
                    </Box>
                </form>
                <Box>
                    <Typography style={{ position: 'initial' }} className="message" component="span" variant="body">{message}</Typography>
                </Box>
            </Box>
        </Container>
    );
};

Login.propTypes = {

};

export default Login;
