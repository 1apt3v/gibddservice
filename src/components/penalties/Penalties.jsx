import React, { useEffect, useState } from 'react';
import s from './penalties.module.css'
import InputComponent from '../inputComponent/InputComponent';
import { connect } from 'react-redux';
import { setPenalty } from '../../redux/penaltyReducer';


const Penalties = ({ data = {}, datadb, setInputValue, value, setPenalty, DataPenalties }) => {
    const [driverLicenseId, setDriverLicenseId] = useState(0)
    const onSubmit = () => {
        let dataSubmit = datadb.find(driver => {
            setDriverLicenseId(driver.document.driverLicense.id)
            return driver.document.driverLicense.id == value
        })

        if (dataSubmit === undefined) {
            console.log('312');
        } else {
            setPenalty(dataSubmit.penalty)
        }
    }

    return (
        <div className={s.wrapperPenalties}>
            <div className={s.wrapperPenaltiesStartElement}>
                <h1>Проверка штрафов</h1>
                <div className={s.penaltiesForm}>
                    <InputComponent className={s.driverLicenseInput} placeholder={"Номер водительского удостоверения"} setInputValue={setInputValue} value={value} />
                    <button className={s.submitButton} onClick={() => {
                        if (value !== '') {
                            onSubmit()
                        }
                    }}>Отправить</button>
                </div>
            </div>
            <div className={s.resultWrapper}>
                <DataPenalties data={data.penaltyReducer.penalty} />
            </div>
        </div >
    );
};

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps, { setPenalty })(Penalties);