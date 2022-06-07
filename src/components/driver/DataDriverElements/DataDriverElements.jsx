import React from "react"
import s from './dataDriverElements.module.css'

const DataDriverElement = ({ data }) => {
    const driverLicense = data.document.driverLicense
    const insurance = data.document.insurance
    const PTS = data.document.PTS
    return <div className={s.dataDriverElementWrapper}>
        <h3>Основная информация</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Фамилия Имя Отчество</div>
            <div className={s.dataDriverElementLineValue}>{`${data.secondName} ${data.firstName} ${data.patronymic}`}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата рождения</div>
            <div className={s.dataDriverElementLineValue}>{data.DOB}</div>
        </div>
        <hr />
        <h3>Водительское удостоверение</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Серия и номер</div>
            <div className={s.dataDriverElementLineValue}>{driverLicense.id}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Код подразделения ГИБДД</div>
            <div className={s.dataDriverElementLineValue}>{driverLicense.departmentCode}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата получения</div>
            <div className={s.dataDriverElementLineValue}>{driverLicense.effectiveDate}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата начала действия</div>
            <div className={s.dataDriverElementLineValue}>{driverLicense.effectiveDate}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата окончания действия</div>
            <div className={s.dataDriverElementLineValue}>{driverLicense.endDate}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Город получения</div>
            <div className={s.dataDriverElementLineValue}>{driverLicense.сityOfReceipt}</div>
        </div>
        <hr />
        <h3>Страховое свидетельство</h3>
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Серия и номер</div>
            <div className={s.dataDriverElementLineValue}>{insurance.id}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Страхователь</div>
            <div className={s.dataDriverElementLineValue}>{insurance.policyholder}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Собственник</div>
            <div className={s.dataDriverElementLineValue}>{insurance.owner}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Марка ТС</div>
            <div className={s.dataDriverElementLineValue}>{insurance.brand}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Модель ТС</div>
            <div className={s.dataDriverElementLineValue}>{insurance.model}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>VIN ТС</div>
            <div className={s.dataDriverElementLineValue}>{insurance.VIN}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Регистрационный номер</div>
            <div className={s.dataDriverElementLineValue}>{insurance.numberVehicle}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Номер ПТС</div>
            <div className={s.dataDriverElementLineValue}>{PTS.id}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Лица, допущенные к управлению ТС</div>
            <div className={s.dataDriverElementLineValue}>{insurance.drivers}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата заключения договора</div>
            <div className={s.dataDriverElementLineValue}>{insurance.VIN}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Страховая премия</div>
            <div className={s.dataDriverElementLineValue}>{insurance.prize}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата начала действия</div>
            <div className={s.dataDriverElementLineValue}>{insurance.effectiveDate}</div>
        </div>
        <hr />
        <div className={s.dataDriverElementLine}>
            <div className={s.dataDriverElementLineTitle}>Дата окончания действия</div>
            <div className={s.dataDriverElementLineValue}>{insurance.endDate}</div>
        </div>
        <hr />
    </div>
}

export default DataDriverElement