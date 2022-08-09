import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Reserv_page } from './Pages/patiant/reserv';
// import { Select_da } from './Components/Select_doctor';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Reserv_page />} />
      {/* <Route path='/haaa' element={<Select_da />} /> */}

     </Routes>
  </BrowserRouter>
  
);
reportWebVitals();
