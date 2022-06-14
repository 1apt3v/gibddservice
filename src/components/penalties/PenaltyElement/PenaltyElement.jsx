import React from "react"
import s from './penaltyElement.module.css'

const PenaltyElement = ({data}) => {
    return <div className={s.penaltyElementWrapper}>
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Причина</div>
            <div className={s.penaltyElementLineValue}>{data.violation}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Место происшествия</div>
            <div className={s.penaltyElementLineValue}>{data.penalty_location}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Дата</div>
            <div className={s.penaltyElementLineValue}>{data.penalty_date}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Регистрационный номер</div>
            <div className={s.penaltyElementLineValue}>{`${data.registration_number} ${data.registration_region}`}</div>
        </div>
        <hr />
        <div className={s.penaltyElementLine}>
            <div className={s.penaltyElementLineTitle}>Сумма штрафа</div>
            <div className={s.penaltyElementLineValue}>{`${data.amount} ₽`}</div>
        </div>
        <hr />
    </div>
}

export default PenaltyElement