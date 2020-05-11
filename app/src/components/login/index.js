import React from 'react';
import { style } from './index.scss';

const Login = () => {

    const [{ email, password }, getForm] = useState({ email: null, password: null })

    function onSubmitClick(ev) {
        ev.persist();
        ev.preventDefault();

        // ev.target.parent
        console.log('ev.target.parent: ', ev);
    }


    return (
        <form className={style} action="">
            <input name="email" type="email" required placeholder="email" />
            <input name="password" type="password" required placeholder="password" />
            <button onClick={onSubmitClick} type="submit">Submit</button>
        </form>
    );
};

Login.propTypes = {

};

export default Login;
