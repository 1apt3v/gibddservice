import React from 'react';
import notAvailable from './../../assets/notAvailable.png'
import s from './disableComponent.module.css'

const DisableComponent = () => {
    return (
        <div className={s.notAvailableWrapper}>
            <img src={notAvailable} alt="Недоступно" />
        </div>
    );
};

export default DisableComponent;