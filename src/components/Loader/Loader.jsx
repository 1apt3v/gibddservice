import React from 'react';
import loaderImg from './../../assets/loading.png'
import loaderGif from './../../assets/loading.gif'
import s from './loading.module.css'
const Loader = () => {
    return (
        <div className={s.loaderWrapper}>
            <img className={s.loader} src={loaderImg} alt="Loading..." />
        </div>
    );
};

export default Loader;