import React from 'react';
import { useState } from 'react';
import s from './deleteDriver.module.css'
import InputComponent from '../inputComponent/InputComponent';


const DeleteDriver = ({ deleteDataDriverFromDB }) => {
    const [value, setValue] = useState('')


    const handleSubmit = () => {
        const result = deleteDataDriverFromDB(value)
        if (result) {
            console.log("111", result)
        }
    }

    const checkValue = () => {
        if (value !== '') {
            handleSubmit()
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            checkValue()
        }
    }

    return (
        <div className={s.wrapperPenaltiesStartElement}>
            <h1>Удалить водителя</h1>
            <div className={s.penaltiesForm}>
                <InputComponent handleKeyPress={handleKeyPress} className={s.driverLicenseInput} placeholder="Введите номер водительского удостоверения"
                    setInputValue={setValue} value={value}
                />
                <button className={s.submitButton} onClick={handleSubmit}>Отправить</button>
            </div>
            DeleteDriver
        </div>
    );
};

export default DeleteDriver;