import React from 'react';
import { useForm } from 'react-hook-form';
import s from './addDriverForm.module.css'


const AddDriverForm = ({ createDataDriverToDB }) => {
    const { register, handleSubmit } = useForm()

    return (
        <div>
            <form onSubmit={handleSubmit((d) => createDataDriverToDB(d))}>

                <div className={s.wrapperForm}>
                    <div className={s.first_column}>
                        <div className={s.wrapperInputs}>
                            <p>Основная информация о водителе</p>
                            <div className={s.blockInputs}>
                                <div className={s.inputElement}>
                                    <label>Имя</label>
                                    <input {...register("driver.first_name")} placeholder='Имя' />
                                </div>

                                <div className={s.inputElement}>
                                    <label>Фамилия</label>
                                    <input {...register("driver.second_name")} placeholder='Фамилия' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Отчество</label>
                                    <input {...register("driver.patronymic")} placeholder='Отчество' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Дата рождения</label>
                                    <input {...register("driver.birthday")} placeholder='Дата рождения' />
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapperInputs}>
                            <p>Данные страховки</p>
                            <div className={s.blockInputs}>
                                <div className={s.inputElement}>
                                    <label>Серия документа</label>
                                    <input {...register("insurance.document_series")} placeholder='Серия документа' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Номер документа</label>
                                    <input {...register("insurance.docuemnt_number")} placeholder='Номер документа' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Страхователь</label>
                                    <input {...register("insurance.policyholder")} placeholder='Страхователь' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Страховая премия</label>
                                    <input {...register("insurance.amount")} placeholder='Страховая премия' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Дата начала действия</label>
                                    <input {...register("insurance.effective_date")} placeholder='Дата начала действия' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Дата окончания действия</label>
                                    <input {...register("insurance.end_date")} placeholder='Дата окончания действия' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={s.second_column}>
                        <div className={s.wrapperInputs}>
                            <p>Водительское удостоверение</p>
                            <div className={s.blockInputs}>
                                <div className={s.inputElement}>
                                    <label>Серия документа</label>
                                    <input {...register("driver_license.document_series")} placeholder='Серия документа' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Номер документа</label>
                                    <input {...register("driver_license.document_number")} placeholder='Номер документа' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Город получения</label>
                                    <input {...register("driver_license.city_of_receipt")} placeholder='Город получения' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Дата получения</label>
                                    <input {...register("driver_license.effective_date")} placeholder='Дата получения' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Дата окончания</label>
                                    <input {...register("driver_license.end_date")} placeholder='Дата окончания' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Код ГИБДД</label>
                                    <input {...register("driver_license.department_code")} placeholder='Код ГИБДД' />
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapperInputs}>
                            <p>Данные автомобиля</p>
                            <div className={s.blockInputs}>

                                <div className={s.inputElement}>
                                    <label>VIN</label>
                                    <input {...register("vehicle.vin")} placeholder='VIN' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Марка ТС</label>
                                    <input {...register("vehicle.brand")} placeholder='Марка' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Модель ТС</label>
                                    <input {...register("vehicle.model")} placeholder='Модель' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Цвет ТС</label>
                                    <input {...register("vehicle.color")} placeholder='Цвет' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Регистрационный номер</label>
                                    <input {...register("registration_number.registration_number")} placeholder='Регистрационный номер' />
                                </div>
                                <div className={s.inputElement}>
                                    <label>Регион регистрационного номера</label>
                                    <input {...register("registration_number.registration_region")} placeholder='Регион' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={s.buttonSubmitWrapper}>
                    <input className={s.buttonSubmit} type="submit" />
                </div>


            </form>

        </div>
    );
};

export default AddDriverForm;