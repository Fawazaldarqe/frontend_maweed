import {Nav1} from './Nav1'
import PhoneInput from 'react-phone-number-input'
import React, { useState, useMemo} from "react";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { Link } from 'react-router-dom';
import {booksService} from "../../services/crud.services";
import { Form} from "react-bootstrap";

export function Reserv(){
    return(
        
        <>      
        <from action='/reserv'>      
                <div className='info'>
                <Nav1></Nav1>
                <div className='info_patiant'>
                <Info1/>
                <div className='info_connect'>
                <PhonePatiant/>
                <SelectCountry/>
                </div>
                <div className='Old_Medical'>
                {/* <InfoOld/> */}
               

                <TypeMajor/>
                <DateReserv/>
                </div>
                <Agree/>
                </div>
                </div>
                </from>   
        </>
    )
}
export function Info1(id, setnewBook){
  const [firstNm, setfirstNm] = useState("");
  const [secondNm, setsecondNm] = useState("");
  const [lastNm, setlastNm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setMessage("");
    if (firstNm === "" || secondNm === "" ||lastNm ==='') {
      // setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      firstNm,
      secondNm,
      lastNm,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await booksService.updateBook(id, newBook);
        setnewBook("");
        // setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await booksService.addBooks(newBook);
        // setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      // setMessage({ error: true, msg: err.message });
    }

    setfirstNm("");
    setsecondNm("");
    setlastNm("");
  };
  
    return(
        <>
         <Form >
        <div className='info1' >
        <input id='info1_input1' type="text" minLength={2} maxLength={8} placeholder='First name'value={firstNm} onChange={(e) => setfirstNm(e.target.value)} required />
        <input id='info1_input2' type="text" minLength={1} maxLength={8} placeholder='Middle name'value={secondNm} onChange={(e) => setsecondNm(e.target.value)} required/>
        <input id='info1_input3' type="text"minLength={1} maxLength={8} placeholder='Last name'value={lastNm}  onChange={(e) => setlastNm(e.target.value)} required/>
        </div>
        <button onSubmit={handleSubmit} id='btn_contioue_reserv' type='submit'>Continou</button>

        </Form>
        </>
    )
}

export function PhonePatiant(){
    const [value, setValue] = useState()

    return(
        <>
        <div className='info2'>
        <PhoneInput id='info2_input'
        
     placeholder="phone "
  value={value}
  onChange={setValue}/>
             <span className="validity"></span>

  </div>
        </>
    )
}
export function SelectCountry(){
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

    return(
        <>
        <div className='info3'>
         <Select  placeholder='Nationality' options={options} value={value} onChange={changeHandler} />
         <input  id='info3_input' type="tel" placeholder='Id number'/>
         <br />
         </div>
        </>
    )
}
export function InfoOld(){
    return(
        <>
        <div className='info_Old'>
        <input  type="text" id='description3' placeholder='description'/>

        </div>
        </>
    )
}
const data = {
    Medical_speciality: [
      {
        name: "Dermatology",
        emergency: [
          {
            name: "non-emergency",
            Dr_names: ["Dr fatemah", "Dr fadi", "Dr hadi"]
          }
        ]
      },
      { name: "Neurology", emergency: [{ name: "non-emergency", Dr_names: ["Dr Ali","Dr Saad","Dr Ahmed","Dr Sara"] }] },
  
      { name: "Obstetrics and gynecology", emergency: [{ name: "non-emergency", Dr_names: ["Dr sara","Dr safe","Dr falah"] }] },
      {
        name: "Pathology",
        emergency: [{ name: "non-emergency", Dr_names: ["Dr Ahmed","Dr Ali","Dr mohammed"] }]
      },
      {
        name: "Pediatrics",
        emergency: [
          { name: "non-emergency", Dr_names: ["Dr hamd", "Dr rama","Dr salm", "Dr Ali"] }
        ]
      }
    ]
  };
  
export default function TypeMajor(){
    const [selectMedical, setselectMedical] = React.useState();
  const [selectEmergency, setselectEmergency] = React.useState();
  const [selectDoctor, setselectDoctor] = React.useState();

  const availableEmergency = data.Medical_speciality.find((c) => c.name === selectMedical);
  const availableDr_names = availableEmergency?.emergency?.find(
    (s) => s.name === selectEmergency
  );
    return(
        <>
        <div className='options_description'>
            <div className='options'>
       <div id="container">

      <div>
        {/* <label>Medical speciality</label> */}
        <select id='Medical_option'
          placeholder="Medical"
          value={selectMedical}
          onChange={(e) => setselectMedical(e.target.value)}
        >
          <option>select Medical speciality</option>
          {data.Medical_speciality.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        {/* <label>Select emergency</label> */}
        <select id='Emrgency_option'
          placeholder="Emergency"
          value={selectEmergency}
          onChange={(e) => setselectEmergency(e.target.value)}
        >
          <option>Select emergency</option>
          {availableEmergency?.emergency.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        {/* <label>Doctors names</label> */}
        <select id='Doctor_option'
          placeholder="Doctors"
          value={selectDoctor}
          onChange={(e) => setselectDoctor(e.target.value)}
        >
          <option>Select Doctor</option>
          {availableDr_names?.Dr_names.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
    </div>
            <div className='description'>
            <input id='description2' type="number" min='0' max='100' name='old' placeholder='old'/>

            </div>
    </div>
        </>
    )
} 
export function DateReserv(){
    return(
        <>
        <div className='select_date'>
        <input  
        id='select_date_input'
         type="datetime-local"
          min='2022-08-14T08:30'
           max='2022-09-14T16:30'
           step="1800"
           required
           />
           <span className="validity"></span>
        </div>
        </>
    )
}
export function Agree(){
    return(
        <>
        <br />
        <div className='agree'>
        <input type="checkbox" /><label>Iam agree........</label>
        </div>
        <br />
        <div className='contioue_reserv'>
            <Link to={'/message'}>
        </Link>
        </div>
        </>
    )
}
export function Example(){
    return(
        <></>
    )
}