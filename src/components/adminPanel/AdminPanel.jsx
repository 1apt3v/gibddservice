import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './adminPanel.module.css'

const AdminPanel = () => {
    return (
        <div className={s.wrapperNavigation}>
            <NavLink to="/addDriver">Добавить данные водителя</NavLink>
            <NavLink to="/deleteDriver">Удалить данные водителя</NavLink>
            {/* <NavLink to="/admin">Изменить данные о водителе</NavLink> */}
        </div>
    );
};

export default AdminPanel;