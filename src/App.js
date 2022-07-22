import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Main from './components/main/Main';
import TopBar from './components/topBar/TopBar';
import Penalties from './components/penalties/Penalties';
import db from "./db.json"
import { connect } from 'react-redux';
import { setInputValue } from './redux/inputReducer';
import { setDriverValue } from './redux/driverReducer';
import InputWrapper from './components/inputWrapper/InputWrapper';
import DataDriver from './components/driver/DataDriver'
import DataPenalties from './components/penalties/DataPenalties/DataPenalties';
import { setPenalty } from './redux/penaltyReducer';
import DisableComponent from './components/DisableComponent/DisableComponent';
import { getDataDriverFromDB, getDataPenaltyFromDB, deleteDataDriverFromDB, createDataDriverToDB } from './fetch/fetch';
import AddNewForm from './components/AddNewForm/AddNewForm';
import AdminPanel from './components/adminPanel/AdminPanel';
import DeleteDriver from './components/deleteDriver/DeleteDriver';
import AddDriver from './components/addDriver/AddDriver';





function App({ value, setInputValue, setDriverValue, setPenalty }) {
  return <div>
    <div className={s.wrapper}>
      <TopBar />
      <Routes>

        <Route path='/' exact element={(<Main />)} />

        <Route
          path="/penalties"
          element={<InputWrapper
            setInputValue={setInputValue}
            getDataFromDB={getDataPenaltyFromDB}
            value={value}
            datadb={db.driver}
            addToStore={setPenalty}
            placeholderName={"Номер водительского удостоверения"}
            highName={"Проверка штрафов"}
            Component={DataPenalties}
          />}
        />

        <Route
          path="/driver"
          element={<InputWrapper
            setInputValue={setInputValue}
            getDataFromDB={getDataDriverFromDB}
            value={value}
            datadb={db.driver}
            addToStore={setDriverValue}
            placeholderName={"Номер водительского удостоверения"}
            highName={"Информация о водителе"}
            Component={DataDriver}
          />}
        />

        <Route
          path="/admin"
          element={<AdminPanel />}
        />

        <Route
          path="/deleteDriver"
          element={<DeleteDriver deleteDataDriverFromDB={deleteDataDriverFromDB} />}
        />
        <Route
          path="/addDriver"
          element={<AddDriver
            createDataDriverToDB={createDataDriverToDB}
          />}
        />



      </Routes>
    </div>

  </div>
}


let mapStateToProps = (state) => {

  return {
    value: state.inputReducer.value,
    driver: state.driverReducer.driver,
    penalty: state.penaltyReducer.penalty
  }
}

export default connect(mapStateToProps, { setInputValue, setDriverValue, setPenalty })(App)