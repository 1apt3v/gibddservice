import React from 'react';
import s from './addNewForm.module.css'

const AddNewForm = () => {

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>ID водительского свидетельства</label>

                <input type="text" name='' />

            </form>

            <div className={s.inputWrapperElement}>
                <p>ID водительского свидетельства</p>
                <div><input type="text" className={s.addNewDriverInput} /></div>
            </div>
        </div>
    );
};

export default AddNewForm;