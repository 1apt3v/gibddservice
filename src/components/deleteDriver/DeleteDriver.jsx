import React from 'react';
import { useState } from 'react';
import s from './deleteDriver.module.css'
import InputComponent from '../inputComponent/InputComponent';


const DeleteDriver = ({ statusDeleting, setStatusDeleting, setClearStatus, deleteDataDriverFromDB }) => {
    const [value, setValue] = useState('')


    const handleSubmit = async () => {
        const result = await deleteDataDriverFromDB(value)
        if (result.status === true) {
            setStatusDeleting(true)
        } else {
            setStatusDeleting(false)
            console.log(result.message)
            console.log(result)
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
            {statusDeleting === null
                ? <></>
                : statusDeleting === true
                    ? <div style={{color: 'green'}} >Пользователь успешно удалён</div>
                    : <div style={{color: 'red'}}>Пользователь не удалён</div>
            }
        </div>
    );
};

export default DeleteDriver;