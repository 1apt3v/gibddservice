import React, { useState } from 'react';
import s from './dataDriver.module.css'
import defaultDriver from './../../assets/defaultAvatar.jpg'
import defaultAuto from './../../assets/defaultAuto.png'
import DataDriverElement from './DataDriverElements/DataDriverElements';
import DataAutoElements from '../auto/DataAutoElement/DataAutoElement';



const DataDriver = ({ data, ...props }) => {
    data = data.driverReducer.driver

    return <div>
        {
            (JSON.stringify(data) === "{}" || data.length === 0)
                ? <></>
                : <> {data
                    ? <div className={s.formData}>
                        <div className={s.formDataElement}>
                            <img className={s.avatarDriver} src={data.img ? data.img : defaultDriver} alt="" />
                            <DataDriverElement data={data} />
                        </div>
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

export default DataDriver;