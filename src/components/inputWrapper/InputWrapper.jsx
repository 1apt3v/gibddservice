import React, { useEffect, useState } from 'react';
import InputComponent from '../inputComponent/InputComponent';
import s from './inputWrapper.module.css'
import { setPenalty, clearPenalty } from './../../redux/penaltyReducer'
import { connect } from 'react-redux';
import { getDataDriverFromDB } from '../../fetch/fetch';
import { setDriverClearValue } from '../../redux/driverReducer';


const InputWrapper = ({ data = {}, datadb, setInputValue, value, setPenalty, clearPenalty, setDriverClearValue, Component, addToStore, ...props }) => {
    const [driverLicenseId, setDriverLicenseId] = useState(0)
    const onSubmit = async () => {
        setDriverLicenseId(value)
        let data = await getDataDriverFromDB(+value.split(' ').join(''))
        addToStore(data)
    }

    useEffect(() => {
        return () => {
            setInputValue('')
            clearPenalty()
            setDriverClearValue()
        }
    }, [])


    return (
        <div className={s.wrapperPenalties}>
            <div className={s.wrapperPenaltiesStartElement}>
                <h1>{props.highName}</h1>
                <div className={s.penaltiesForm}>
                    <InputComponent className={s.driverLicenseInput} placeholder={props.placeholderName} setInputValue={setInputValue} value={value} />
                    <button className={s.submitButton} onClick={() => {
                        if (value !== '') {
                            onSubmit()
                        }
                    }}>Отправить</button>
                </div>
            </div>
            <div className={s.resultWrapper}>
                <Component driverLicenseId={driverLicenseId} data={data} />
            </div>
        </div >
    );
};


const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps, { setPenalty, clearPenalty, setDriverClearValue })(InputWrapper);

