import React from "react"
import s from './dataDriverElements.module.css'

const DataDriverElement = ({ data }) => {
    console.log(data)
    const {driver, driver_license, insurance, vehicle} = data

    return <div className={s.dataDriverElementWrapper}>
        <h3>Основная информация</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Фамилия Имя Отчество</div>
            <div className={s.dataDriverElementLineValue}>{`${driver.second_name} ${driver.first_name} ${driver.patronymic}`}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата рождения</div>
            <div className={s.dataDriverElementLineValue}>{driver.birthday}</div>
        </div>
        <hr />
        <h3>Водительское удостоверение</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Серия и номер</div>
            <div className={s.dataDriverElementLineValue}>{`${driver_license.document_series} ${driver_license.document_number}`}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Код подразделения ГИБДД</div>
            <div className={s.dataDriverElementLineValue}>{driver_license.department_code}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата начала действия</div>
            <div className={s.dataDriverElementLineValue}>{driver_license.effective_date}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата окончания действия</div>
            <div className={s.dataDriverElementLineValue}>{driver_license.end_date}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Город получения</div>
            <div className={s.dataDriverElementLineValue}>{driver_license.сity_of_receipt}</div>
        </div>
        <hr />
        <h3>Страховое свидетельство</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Серия и номер</div>
            <div className={s.dataDriverElementLineValue}>{`${insurance.document_series}№${insurance.document_number}`}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Страхователь</div>
            <div className={s.dataDriverElementLineValue}>{insurance.policyholder}</div>
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
            <div className={s.dataDriverElementLineTitle}>VIN ТС</div>
            <div className={s.dataDriverElementLineValue}>{vehicle.vin}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Регистрационный номер</div>
            <div className={s.dataDriverElementLineValue}>{`${vehicle.registration_number} ${vehicle.registration_region}`}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Страховая премия</div>
            <div className={s.dataDriverElementLineValue}>{insurance.amount}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата начала действия</div>
            <div className={s.dataDriverElementLineValue}>{insurance.effective_date}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата окончания действия</div>
            <div className={s.dataDriverElementLineValue}>{insurance.end_data}</div>
        </div>
        <hr />
    </div>
}

export default DataDriverElement