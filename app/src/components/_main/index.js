import React from 'react';
import { style } from './index.scss';

const Main = ({ Page }) => {

    return (
        <main className={style}>{Page}</main>
    );
};

Main.propTypes = {
    Page: React.FC
};

export default Main;
