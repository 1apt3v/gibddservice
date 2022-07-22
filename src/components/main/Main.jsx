import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './main.module.css'


const Main = () => {
    return (
        <div className={s.wrapperNavigation}>
            <NavLink to="/penalties">Проверка штрафов</NavLink>
            <NavLink to="/driver">Информация о водителе</NavLink>
            <NavLink to="/admin">Админ панель</NavLink>
        </div>
    );
};

export default Main;