import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './topBar.module.css'
import gidbbLogo from './../../assets/gibdd.png'

const TopBar = () => {
    return (
        <div className={s.topBarWrapper}>
            <NavLink to="/">ГОСАВТОИНСПЕКЦИЯ</NavLink>
            <div className={s.rightPositionTopBar}>
                <a href='tel:102' className={s.numberGIBDD}><p>102</p></a>
                <img src={gidbbLogo} alt="Логотип ГИБДД" />
            </div>

        </div>
    );
};

export default TopBar;