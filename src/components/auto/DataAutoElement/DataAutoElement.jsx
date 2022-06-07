import React from "react"
import s from './dataAutoElements.module.css'

const DataAutoElements = ({ data }) => {
    let auto = data.auto
    // console.log(data.auto)

    return <div className={s.dataDriverElementWrapper}>
        <h3>Транспортные средства</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>VIN</div>
            <div className={s.dataDriverElementLineValue}>{auto.VIN}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Марка ТС</div>
            <div className={s.dataDriverElementLineValue}>{auto.brand}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Модель ТС</div>
            <div className={s.dataDriverElementLineValue}>{auto.model}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Регистрационный номер</div>
            <div className={s.dataDriverElementLineValue}>{auto.numberVehicle}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Цвет</div>
            <div className={s.dataDriverElementLineValue}>{auto.color}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Серия и номер страхового свидетельства</div>
            <div className={s.dataDriverElementLineValue}>{auto.id}</div>
        </div>
        <hr />
    </div>
}

export default DataAutoElements