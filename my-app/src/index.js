import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Homepatiant} from './Components/Patiant/Home_patiant';
import {Reserv} from './Components/Patiant/Reserv';
import {Messagesuccessful} from './Components/Patiant/Message_successful';
import {LoginDoctor} from './Components/Doctor/Login_Doctor';
import {HomeDoctor} from './Components/Doctor/Home_page_doctor';
import {ShowReserv} from './Components/Doctor/Show_reserv';
import {CheckPatiant} from './Components/Doctor/Check_file_for_patiant';
import {HistoryPatiant} from './Components/Doctor/History_patiant'
import './index.css';
import App from './App';
import {InfoReserv} from './Components/Add_book';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import BooksList from './Components/Doctor/Show_reserv'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={< Homepatiant/>} />
    <Route path='/reserv' element={< InfoReserv/>} />
    <Route path='/message' element={< Messagesuccessful/>} />
    <Route path='/login' element={< LoginDoctor/>} />
    <Route path='/home_doctor' element={< HomeDoctor/>} />
    <Route path='/show_reserv' element={< BooksList/>} />
    <Route path='/check_patiant' element={< CheckPatiant/>} />
    <Route path='/history_Patiant' element={< HistoryPatiant/>} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
