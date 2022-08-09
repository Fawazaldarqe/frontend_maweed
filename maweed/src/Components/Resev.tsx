import { Layout } from "../../Components/Layout";
import PhoneInput from 'react-phone-number-input'
import { useState ,useMemo, SetStateAction} from "react";
// import countryList from 'react-select-country-list'
import Select from 'react-select'
import React from 'react';
import { Action } from "history";
import countryList from "react-select-country-list";
import { Info_doctor } from "./Select_docor";
import Calendar from 'react-input-calendar'


export function Reserv(){
    
    const [value, setValue] = useState()
    const [value2, setValue2] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    
    const changeHandler = (e: { target: { value2: any; }; }) => {
        setValue(e.target.value2);

      }
      const [natId, setNatId] = useState();
      const [max_length, setmax_length] = useState('');

      const handleChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value.replace(/\D/g, "");
        setNatId(value);
        setmax_length(e.target.value);
      };

    return(
        // <Layout>
        <>
        <div>
            <div className='personal_info'>
            <div className='personal_info1'>
               <input type="text" required placeholder='First name'/><input type="text" required placeholder='Middle name'/><input type="text" required placeholder='Last name'/>
           </div>
            <div className='personal_info2'>
               {/* <select className='key_phone'>
                   <option value="+966">+966</option>
               </select>
               <input type="name" placeholder='5xxxxxxx' /> */}
<PhoneInput placeholder="+" value={value} onChange={setValue} />
           </div>
            <div className='personal_info3'>
           <Select  options={options} value={value2}    onChange={changeHandler} />
           {/* <input value={natId} onChange={handleChange} maxLength={10}/> */}
               <input type="tel" maxLength={10} placeholder='ID national' />
           </div>
           </div>
           <div className='medical_info'>
           <div className='medical_info1'>
               <input type="number" min='1' max='100' placeholder='Old'/>
           </div>
           5 <div className='medical_info2'>
           <Info_doctor />
               <input type="text" placeholder='health symptom' />
           </div>
           6 <div className='medical_info3'>

           </div>
           </div>
           7 <div className='doctor_info1'></div>
           8 <div className='agree_class'></div>
           9 <div className='continoue_btn'></div>
        </div>
        </>
        // </Layout>
    )
}
