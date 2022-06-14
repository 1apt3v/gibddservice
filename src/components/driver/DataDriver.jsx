import React from 'react';
import s from './dataDriver.module.css'
// import defaultDriver from './../../assets/driverAvatars/1.png'
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
                : <> {!(props.isNotFound)
                    ? <div className={s.formData}>
                        <div className={s.formDataElement}>
                            <img className={s.avatarDriver} src={data.driver.path_img ? `${data.driver.path_img}` : defaultDriver} alt="" />
                            <DataDriverElement data={data} />
                        </div>
                        <div className={s.formDataElement}>
                            <img className={s.avatarDriver} src={data.vehicle.path_img ? data.vehicle.path_img : defaultAuto} alt="" />
                            <DataAutoElements data={data} />
                        </div>

                    </div>
                    : <div className={s.notFound}>Не найдено</div>
                }
                </>
        }
    </div>
};

export default DataDriver;