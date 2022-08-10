import {Nav1} from './Nav1'
import PhoneInput from 'react-phone-number-input'
import React, { useState, useMemo} from "react";
import Select from 'react-select';
import countryList from 'react-select-country-list';
export function Reserv(){
    return(
        
        <>               

                <Nav1></Nav1>
                <Info1/>
                <PhonePatiant/>
                <SelectCountry/>
                <Infopatiant/>
                <TypeMajor/>
        </>
    )
}
export function Info1(){
    return(
        <>
        <div className='info1'>
        <input type="text" minLength={2} maxLength={8} placeholder='First name' required/>
        <input type="text" minLength={1} maxLength={8} placeholder='Middle name' required/>
        <input type="text"minLength={1} maxLength={8} placeholder='Last name' required/>
        </div>
        </>
    )
}

export function PhonePatiant(){
    const [value, setValue] = useState()

    return(
        <>
        <div className='info2'>
        <PhoneInput
  placeholder="Enter phone number"
  value={value}
  onChange={setValue}/>
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
         <Select options={options} value={value} onChange={changeHandler} />
         <input type="tel" placeholder='Id number'/>
         </div>
        </>
    )
}
export function Infopatiant(){
    return(
        <>
        <div className='info_patiant'>
        <label htmlFor="old"></label>
        <input type="number" min='0' max='100' name='old' placeholder='old'/>
        </div>
        </>
    )
}
const data = {
    Medicalـspeciality: [
      {
        name: "Dermatology",
        states: [
          {
            name: "A",
            cities: ["Dermatology", "Neurology", "Obstetrics and gynecology"]
          }
        ]
      },
      { name: "Neurology", states: [{ name: "B", cities: ["Barcelona"] }] },
  
      { name: "Obstetrics and gynecology", states: [{ name: "C", cities: ["Downers Grove"] }] },
      {
        name: "Pathology",
        states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }]
      },
      {
        name: "Pediatrics",
        states: [
          { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
        ]
      }
    ]
  };
  
export default function TypeMajor(){
    const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();

  const availableState = data.Medicalـspeciality.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );
    return(
        <>
       <div id="container">
      <h2>Cascading or Dependent Dropdown using React</h2>

      <div>
        <label>Country</label>
        <select
          placeholder="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>--Choose Country--</option>
          {data.Medicalـspeciality.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>State</label>
        <select
          placeholder="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>--Choose State--</option>
          {availableState?.states.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>City</label>
        <select
          placeholder="City"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>--Choose City--</option>
          {availableCities?.cities.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
        </>
    )
}
export function Example(){
    return(
        <></>
    )
}