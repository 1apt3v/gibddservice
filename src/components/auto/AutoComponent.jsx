import React from 'react';
import s from './autoComponent.module.css'
import defaultAuto from './../../assets/defaultAuto.png'
import DataAutoElements from './DataAutoElement/DataAutoElement';

const AutoDriver = ({ data }) => {
    data = data.driverReducer.driver
    return <div>
        {
            (JSON.stringify(data) === "{}" || data.length === 0)
                ? <></>
                : <> {data
                    ? <div className={s.formData}>
                        <div className={s.formDataElement}>
                            <img className={s.avatarDriver} src={data.img ? data.img : defaultAuto} alt="" />
                            <DataAutoElements data={data} />
                        </div>

                    </div>
                    : "Не найдено"
                }
                </>
        }
    </div>
};

export default AutoDriver;