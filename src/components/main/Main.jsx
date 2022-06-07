import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './main.module.css'


const Main = () => {
    return (
        <div className={s.wrapperNavigation}>
            <NavLink to="/penalties">Проверка штрафов</NavLink>            
            <NavLink to="/driver">Проверка водителя</NavLink>            
            <NavLink to="/auto">Проверка транспортного средства</NavLink>            
        </div>
    );
};

export default Main;