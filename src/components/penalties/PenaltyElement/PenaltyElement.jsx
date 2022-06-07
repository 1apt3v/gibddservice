import React from "react"
import s from './penaltyElement.module.css'

const PenaltyElement = (props) => {
    return <div className={s.penaltyElementWrapper}>
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Причина</div>
            <div className={s.penaltyElementLineValue}>{props.data.violation}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Место происшествия</div>
            <div className={s.penaltyElementLineValue}>{props.data.location}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Дата</div>
            <div className={s.penaltyElementLineValue}>{props.data.date}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Регистрационный номер</div>
            <div className={s.penaltyElementLineValue}>{props.data.numberVehicle}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Сумма штрафа</div>
            <div className={s.penaltyElementLineValue}>{props.data.amount}</div>
        </div>
        <hr />
    </div>
}

export default PenaltyElement