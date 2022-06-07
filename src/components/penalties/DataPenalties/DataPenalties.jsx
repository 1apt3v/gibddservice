import React from 'react'
import PenaltyElement from '../PenaltyElement/PenaltyElement';
import s from './../penalties.module.css'
import driverLicenseIcon from './../../../assets/driverLicenseIcon.png'
import defaultAvatar from './../../../assets/defaultAvatar.jpg'


function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const DataPenalties = ({ data }) => {
    let driverId = data.penaltyReducer.driverId
    data = data.penaltyReducer.penalty
    const namePenaltyWord = declOfNum(data.penalty?.length, ['штраф', 'штрафа', 'штрафов'])
    let totalAmountCount = (data) => {
        let amount = 0
        for (let i = 0; i < data.length; i++) {
            amount += data[i].amount
        }
        return amount
    }
    let penaltyElements = (data.length === 0) ? null : data.map(el => <PenaltyElement data={el} key={el.id} />)


    return (
        <>
            {
                (JSON.stringify(data) === "{}" || data.length === 0)
                    ? <></>
                    : <> {data
                        ? <div className={s.formData}>
                            <h3>{`${data.length} ${namePenaltyWord} найдено`}</h3>
                            <hr />
                            <div className={s.driverLicenseInfo}>
                                <img src={driverLicenseIcon} alt="driverLicenseIcon" />
                                <p className={s.driverLicenseInfoTitle}>Водительское удостоверение</p>
                                <p className={s.driverLicenseInfoId}>{driverId}</p>
                            </div>
                            <div className={s.penaltyElements}>
                                {/* нужно сделать loader */}
                                {penaltyElements}

                                <div className={s.totalAmountWrapper}>
                                    <div className={s.totalAmount}>
                                        <p>Общая сумма штрафов:</p>
                                        <span>{`${totalAmountCount(data)} ₽`}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        : "Не найдено"
                    }
                    </>
            }

        </>
    )
}

export default DataPenalties