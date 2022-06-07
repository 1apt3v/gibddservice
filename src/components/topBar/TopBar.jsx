import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './topBar.module.css'
import gidbbLogo from './../../assets/gibdd.png'

const TopBar = () => {
    return (
        <div className={s.topBarWrapper}>
            <NavLink to="/">ГОСАВТОИНСПЕКЦИЯ</NavLink>
            <div className={s.rightPositionTopBar}>
                <p className={s.numberGIBDD}>102</p>
                <img src={gidbbLogo} alt="Логотип ГИБДД" />
            </div>

        </div>
    );
};

export default TopBar;