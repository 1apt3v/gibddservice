import React, { useEffect, useState } from 'react';
import InputComponent from '../inputComponent/InputComponent';
import s from './inputWrapper.module.css'
import { setPenalty, clearPenalty } from './../../redux/penaltyReducer'
import { connect } from 'react-redux';

import { setDriverClearValue } from '../../redux/driverReducer';
import Loader from '../Loader/Loader';
import { getDataDriverLicensesFromDB } from '../../fetch/fetch';



const InputWrapper = ({ data = {}, datadb, setInputValue, getDataFromDB, value, setPenalty, clearPenalty, setDriverClearValue, Component, addToStore, ...props }) => {
    const [driverLicenseId, setDriverLicenseId] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isNotFound, setIsNotFound] = useState(false)
    const [isReference, setIsReference] = useState(false)
    const [dataReference, setDataReference] = useState('')
    const onSubmit = async () => {
        setIsLoading(true)
        setIsNotFound(false)
        setDriverLicenseId(value)
        let data = await getDataFromDB(+value.split(' ').join(''))
        if (data.message === '404') {
            console.log(data.message)
            setIsNotFound(true)
            setIsLoading(false)
        } else {
            addToStore(data)
            setIsLoading(false)
        }
    }

    const checkValue = () => {
        if (value !== '') {
            onSubmit()
        }
    }


    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            checkValue()
        }
    }

    useEffect(() => {
        return () => {
            setInputValue('')
            clearPenalty()
            setDriverClearValue()
        }
    }, [])

    const handleReference = async () => {
        if (isReference === false) {
            setIsReference(!isReference)
            const data = await getDataDriverLicensesFromDB()
            const newArray = data.map(el => <div key={el.concat} >{el.concat}</div>)
            setDataReference(newArray)
        } else {
            setIsReference(!isReference)
            setDataReference('')
        }
    }


    return (
        <div className={s.wrapperPenalties}>
            <div className={s.reference}>
                <div style={{marginBottom: '20px'}} onClick={() => {
                    handleReference()
                }}>
                    Справка
                </div>
                {dataReference}
            </div>
            <div className={s.wrapperPenaltiesStartElement}>
                <h1>{props.highName}</h1>
                <div className={s.penaltiesForm}>
                    <InputComponent handleKeyPress={handleKeyPress} className={s.driverLicenseInput} placeholder={props.placeholderName} setInputValue={setInputValue} value={value} />
                    <button className={s.submitButton} onClick={checkValue}>Отправить</button>
                </div>
            </div>
            <div className={s.resultWrapper}>
                {
                    isLoading
                        ? <Loader />
                        : <Component isNotFound={isNotFound} driverLicenseId={driverLicenseId} data={data} />
                }

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

