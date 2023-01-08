import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import s from './addDriverForm.module.css'


const AddDriverForm = ({ createDataDriverToDB }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onBlur"
    })


    useEffect(() => {
        console.log(errors)
    }, [errors])

    const styleChangeCondition = !errors?.driver?.first_name ? s.inputElement : s.inputElementWithError


    // const constrationMaxLength = (value, maxLength) => {
    //     return value.split('').length <= maxLength || `Должно быть не более ${maxLength} символов`
    // }


    return (
        <div>
            <form onSubmit={handleSubmit((d) => { createDataDriverToDB(d) })}>

                <div className={s.wrapperForm}>
                    <div className={s.first_column}>
                        <div className={s.wrapperInputs}>
                            <p>Основная информация о водителе</p>
                            <div className={s.blockInputs}>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Имя</label>
                                        <input
                                            className={!errors?.driver?.first_name ? s.inputElement : s.inputElementWithError}
                                            {...register("driver.first_name", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 64,
                                                    message: "Должно быть не более 64 символов"
                                                },
                                                pattern: {
                                                    value: /^[а-яА-Я]+$/,
                                                    message: "Поле может содержать только кириллицу"
                                                }

                                                // validate: {
                                                //     maxLength: (value) => constrationMaxLength(value, 64)
                                                // }
                                            })}
                                            placeholder='Имя'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver?.first_name && `*${errors?.driver?.first_name?.message}`}</div>

                                </div>

                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Фамилия</label>
                                        <input
                                            className={!errors?.driver?.second_name ? s.inputElement : s.inputElementWithError}
                                            {...register("driver.second_name", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 64,
                                                    message: "Должно быть не более 64 символов"
                                                },
                                                pattern: {
                                                    value: /^[а-яА-Я]+$/,
                                                    message: "Поле может содержать только кириллицу"
                                                }
                                            })}
                                            placeholder='Фамилия'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver?.second_name && `*${errors?.driver?.second_name?.message}`}</div>
                                </div>

                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Отчество</label>
                                        <input
                                            className={!errors?.driver?.patronymic ? s.inputElement : s.inputElementWithError}
                                            {...register("driver.patronymic", {
                                                maxLength: {
                                                    value: 64,
                                                    message: "Должно быть не более 64 символов"
                                                },
                                                pattern: {
                                                    value: /^[а-яА-Я]+$/,
                                                    message: "Поле может содержать только кириллицу"
                                                }
                                            })}
                                            placeholder='Отчество'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver?.patronymic && `*${errors?.driver?.patronymic?.message}`}</div>
                                </div>

                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Дата рождения</label>
                                        <input
                                            className={!errors?.driver?.birthday ? s.inputElement : s.inputElementWithError}
                                            {...register("driver.birthday", {
                                                required: "Поле обязательное к заполнению",
                                                valueAsDate: true,
                                            })}
                                            placeholder='Дата рождения'
                                            type="text"
                                            onFocus={(e) => e.target.type = 'date'}

                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver?.birthday && `*${errors?.driver?.birthday?.message}`}</div>
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapperInputs}>
                            <p>Данные страховки</p>
                            <div className={s.blockInputs}>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Серия документа</label>
                                        <input
                                            className={!errors?.insurance?.document_series ? s.inputElement : s.inputElementWithError}
                                            {...register("insurance.document_series", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 3,
                                                    message: "Серия содержит не более 3 символов"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Z]+$/,
                                                    message: "Серия состоит только из латинских символов"
                                                }

                                            })}
                                            placeholder='Серия документа'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.insurance?.document_series && `*${errors?.insurance?.document_series?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Номер документа</label>
                                        <input
                                            className={!errors?.insurance?.docuemnt_number ? s.inputElement : s.inputElementWithError}
                                            {...register("insurance.docuemnt_number", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 10,
                                                    message: "Номер содержит не более 10 цифр"
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "Номер состоит только из цифр"
                                                }

                                            })}
                                            placeholder='Номер документа'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.insurance?.docuemnt_number && `*${errors?.insurance?.docuemnt_number?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Страхователь</label>
                                        <input
                                            className={!errors?.insurance?.policyholder ? s.inputElement : s.inputElementWithError}
                                            {...register("insurance.policyholder", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 255,
                                                    message: "Должно быть не более 255 символов"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Zа-яА-Я#№".,'(): ]+$/,
                                                    message: "Может состоять только из символов"
                                                }
                                            })}
                                            placeholder='Страхователь'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.insurance?.policyholder && `*${errors?.insurance?.policyholder?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Страховая премия</label>
                                        <input
                                            className={!errors?.insurance?.amount ? s.inputElement : s.inputElementWithError}
                                            {...register("insurance.amount", {
                                                required: "Поле обязательное к заполнению",
                                                validate: {
                                                    positive: value => value >= 0 || "Значение не может быть отрицательным"
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "Только положительные цифры"
                                                },


                                            })}
                                            placeholder='Страховая премия'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.insurance?.amount && `*${errors?.insurance?.amount?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Дата начала действия</label>
                                        <input
                                            className={!errors?.insurance?.effective_date ? s.inputElement : s.inputElementWithError}
                                            {...register("insurance.effective_date", {
                                                required: "Поле обязательное к заполнению",
                                                valueAsDate: true,
                                            })}
                                            placeholder='Дата начала действия'
                                            type="text"
                                            onFocus={(e) => e.target.type = 'date'}
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.insurance?.effective_date && `*${errors?.insurance?.effective_date?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Дата окончания действия</label>
                                        <input
                                            className={!errors?.insurance?.end_date ? s.inputElement : s.inputElementWithError}
                                            {...register("insurance.end_date", {
                                                required: "Поле обязательное к заполнению",
                                                valueAsDate: true,
                                            })}
                                            placeholder='Дата окончания действия'
                                            type="text"
                                            onFocus={(e) => e.target.type = 'date'}
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.insurance?.end_date && `*${errors?.insurance?.end_date?.message}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.second_column}>
                        <div className={s.wrapperInputs}>
                            <p>Водительское удостоверение</p>
                            <div className={s.blockInputs}>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Серия документа</label>
                                        <input
                                            className={!errors?.driver_license?.document_series ? s.inputElement : s.inputElementWithError}
                                            {...register("driver_license.document_series", {
                                                required: "Поле обязательное к заполнению",
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "Поле может содержать только цифры"
                                                },
                                                validate: {
                                                    positive: value => value >= 0 || "Значение не может быть отрицательным"
                                                },
                                                maxLength: {
                                                    value: 4,
                                                    message: "Должно быть не более 4 цифр"
                                                }
                                            })}
                                            placeholder='Серия документа'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver_license?.document_series && `*${errors?.driver_license?.document_series?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Номер документа</label>
                                        <input
                                            className={!errors?.driver_license?.document_number ? s.inputElement : s.inputElementWithError}
                                            {...register("driver_license.document_number", {
                                                required: "Поле обязательное к заполнению",
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "Поле может содержать только цифры"
                                                },
                                                validate: {
                                                    positive: value => value >= 0 || "Значение не может быть отрицательным"
                                                },
                                                maxLength: {
                                                    value: 6,
                                                    message: "Должно быть не более 6 цифр"
                                                }
                                            })}
                                            placeholder='Номер документа'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver_license?.document_number && `*${errors?.driver_license?.document_number?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Город получения</label>
                                        <input
                                            className={!errors?.driver_license?.city_of_receipt ? s.inputElement : s.inputElementWithError}
                                            {...register("driver_license.city_of_receipt", {
                                                required: "Поле обязательное к заполнению",
                                                pattern: {
                                                    value: /^[a-zA-Zа-яА-Я0-9 -]+$/,
                                                    message: "Некорректное значение поля"
                                                },
                                                maxLength: {
                                                    value: 32,
                                                    message: "Должно содержать не более 32 символа"
                                                }

                                            })}
                                            placeholder='Город получения'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver_license?.city_of_receipt && `*${errors?.driver_license?.city_of_receipt?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Дата получения</label>
                                        <input
                                            className={!errors?.driver_license?.effective_date ? s.inputElement : s.inputElementWithError}
                                            {...register("driver_license.effective_date", {
                                                required: "Поле обязательное к заполнению",
                                                valueAsDate: true,
                                            })}
                                            placeholder='Дата получения'
                                            type="text"
                                            onFocus={(e) => e.target.type = 'date'}
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver_license?.effective_date && `*${errors?.driver_license?.effective_date?.message}`}</div>
                                </div>

                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Код ГИБДД</label>
                                        <input
                                            className={!errors?.driver_license?.department_code ? s.inputElement : s.inputElementWithError}
                                            {...register("driver_license.department_code", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 4,
                                                    message: "Поле содержит больше 4 цифр"
                                                },
                                                validate: {
                                                    positive: value => value >= 0 || "Значение не может быть отрицательным"
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "Только положительные цифры"
                                                },
                                            })}
                                            placeholder='Код ГИБДД'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.driver_license?.department_code && `*${errors?.driver_license?.department_code?.message}`}</div>
                                </div>
                            </div>
                        </div>

                        <div className={s.wrapperInputs}>
                            <p>Данные автомобиля</p>
                            <div className={s.blockInputs}>

                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>VIN</label>
                                        <input
                                            className={!errors?.vehicle?.vin ? s.inputElement : s.inputElementWithError}
                                            {...register("vehicle.vin", {
                                                required: "Поле обязательное к заполнению",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9]+$/,
                                                    message: "Поле содержит некорректное значение"
                                                },
                                                maxLength: {
                                                    value: 17,
                                                    message: "Поле содержит более 17 символов"
                                                }
                                            })}
                                            placeholder='VIN'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.vehicle?.vin && `*${errors?.vehicle?.vin?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Марка ТС</label>
                                        <input
                                            className={!errors?.vehicle?.brand ? s.inputElement : s.inputElementWithError}
                                            {...register("vehicle.brand", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 50,
                                                    message: "Поле содержит более 50 символов"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Zа-яА-Я]+$/,
                                                    message: "Поле может содержать только буквы"
                                                }
                                            })}
                                            placeholder='Марка'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.vehicle?.brand && `*${errors?.vehicle?.brand?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Модель ТС</label>
                                        <input
                                            className={!errors?.vehicle?.model ? s.inputElement : s.inputElementWithError}
                                            {...register("vehicle.model", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 255,
                                                    message: "Поле содержит более 255 символов"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Zа-яА-Я0-9 -]+$/,
                                                    message: "Некорректное значение поля"
                                                }
                                            })}
                                            placeholder='Модель'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.vehicle?.model && `*${errors?.vehicle?.model?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Цвет ТС</label>
                                        <input
                                            className={!errors?.vehicle?.color ? s.inputElement : s.inputElementWithError}
                                            {...register("vehicle.color", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 50,
                                                    message: "Поле содержит более 50 символов"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Zа-яА-Я0-9 -]+$/,
                                                    message: "Поле может содержать только буквы"
                                                }
                                            })}
                                            placeholder='Цвет'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>{errors?.vehicle?.color && `*${errors?.vehicle?.color?.message}`}</div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Регистрационный номер</label>
                                        <input
                                            className={!errors?.registration_sign?.registration_number ? s.inputElement : s.inputElementWithError}
                                            {...register("registration_sign.registration_number", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 6,
                                                    message: "Поле содержит более 6 символов"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Zа-яА-Я0-9 -]+$/,
                                                    message: "Некорректное значение поля"
                                                }
                                            })}
                                            placeholder='Регистрационный номер'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>
                                        {errors?.registration_sign?.registration_number && `*${errors?.registration_sign?.registration_number?.message}`}
                                    </div>
                                </div>
                                <div className={s.inputElementWrapper}>
                                    <div className={s.inputElementInner}>
                                        <label>Регион регистрационного номера</label>
                                        <input
                                            className={!errors?.registration_sign?.registration_region ? s.inputElement : s.inputElementWithError}
                                            {...register("registration_sign.registration_region", {
                                                required: "Поле обязательное к заполнению",
                                                maxLength: {
                                                    value: 3,
                                                    message: "Поле содержит более 3 символов"
                                                },
                                                pattern: {
                                                    value: /\^[0-9]+$/,
                                                    message: "Некорректное значение поля"
                                                }
                                            })}
                                            placeholder='Регион'
                                        />
                                    </div>
                                    <div className={s.inputElementTextError}>
                                        {errors?.registration_sign?.registration_region && `*${errors?.registration_sign?.registration_region?.message}`}
                                    </div>
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