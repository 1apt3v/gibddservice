import React from "react"
import s from './dataAutoElements.module.css'

const DataAutoElements = ({ data }) => {
    const { insurance, vehicle } = data

    return <div className={s.dataDriverElementWrapper}>
        <h3>Транспортные средства</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>VIN</div>
            <div className={s.dataDriverElementLineValue}>{vehicle.vin}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Марка ТС</div>
            <div className={s.dataDriverElementLineValue}>{vehicle.brand}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Модель ТС</div>
            <div className={s.dataDriverElementLineValue}>{vehicle.model}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Регистрационный номер</div>
            <div className={s.dataDriverElementLineValue}>{`${vehicle.registration_number} ${vehicle.registration_region}`}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Цвет</div>
            <div className={s.dataDriverElementLineValue}>{vehicle.color}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Серия и номер страхового свидетельства</div>
            <div className={s.dataDriverElementLineValue}>{`${insurance.document_series}№${insurance.document_number}`}</div>
        </div>
        <hr />
    </div>
}

export default DataAutoElements