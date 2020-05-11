import { Box } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { style } from './index.scss';

const Login = () => {

    const headers = new Headers();
    const [message, setMessage] = useState(null);

    function onSubmitClick(ev) {
        ev.persist();
        ev.preventDefault();
        headers.append('Content-Type', 'application/json');
        const request = fetch('http://localhost:3000/users', {
            method: 'POST', headers, body: {
                email: ev.target.form[0],
                password: ev.target.form[1]
            }
        });
        request.then(response => setMessage(response.statusText));
    }


    return (
        <Fragment>
            <Box p="20px">
                <form className={style}>
                    <input name="email" type="email" required placeholder="email" /><br />
                    <input name="password" type="password" required placeholder="password" /><br />
                    <button onClick={onSubmitClick} type="submit">Submit</button>
                </form>
                <p>{message}</p>
            </Box>
        </Fragment>
    );
};

Login.propTypes = {

};

export default Login;
