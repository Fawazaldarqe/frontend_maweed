import React, { useState, useEffect ,useMemo} from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import { booksService } from "../services/crud.services";
import countryList from 'react-select-country-list';
import Select from 'react-select';
import PhoneInput from 'react-phone-number-input'
import {Nav1} from './Patiant/Nav1'
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
  
const InfoReserv = ({ id, setBookId }) => {
  const [firstNm, setfirstNm] = useState("");
  const [secondNm, setsecondNm] = useState("");
  const [lastNm, setlastNm] = useState("");
  const [country, setcoutry] = useState("");
  const [idNum, setidNum] = useState("");
  const [phone, setphone] = useState("");
  const [selectMedical, setselectMedical] = React.useState('');
  const [selectEmergency, setselectEmergency] = React.useState('');
  const [selectDoctor, setselectDoctor] = React.useState('');
  const [old, setold] = useState("");
  const [datereserv, setdatereserv] = useState();



  const availableEmergency = data.Medical_speciality.find((c) => c.name === selectMedical);
  const availableDr_names = availableEmergency?.emergency?.find(
    (s) => s.name === selectEmergency
  );

  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const options = useMemo(() => countryList().getData(), [])
  
  const changeHandler = value => {
    setcoutry(value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
     firstNm === "" ||
     secondNm === "" ||
     lastNm==='' ||
     country===''||
     idNum===''||
     phone===''||
     selectMedical===''||selectEmergency===''||selectDoctor===''||
     old===''||datereserv==='') {
      setMessage({ error: true, msg: "there is problem :" });
      return;
    }
    const newBook = {
      firstNm,
      secondNm,
      lastNm,
      country,
      idNum,
      phone,
      selectMedical,selectEmergency,selectDoctor,
      old,
      datereserv,
      status,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await booksService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await booksService.addBooks(newBook);
        setMessage({ error: false, msg: "Saved" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setfirstNm("");
    setsecondNm("");
    setlastNm("");
    setcoutry("");
    setidNum("");
    setphone("");
    setselectMedical("");
    setselectEmergency("");
    setselectDoctor("");
    setold('')
    setdatereserv('')
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await booksService.getBook(id);
      console.log("the record is :", docSnap.data());
      setfirstNm(docSnap.data().firstNm);
      setsecondNm(docSnap.data().secondNm);
      setlastNm(docSnap.data().lastNm);
      setcoutry(docSnap.data().country);
      setidNum(docSnap.data().idNum);
      setphone(docSnap.data().phone);
      setselectMedical(docSnap.data().selectMedical);
      setselectEmergency(docSnap.data().selectEmergency);
      setselectDoctor(docSnap.data().selectDoctor);
      setold(docSnap.data().old);
      setdatereserv(docSnap.data().datereserv);

      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
    <Nav1/>
    <div className='info'>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookfirstNm">
          <div className='info1' >
            <InputGroup>
              {/* <InputGroup.Text id="formBookfirstNm">B</InputGroup.Text> */}
              <Form.Control
              id='info1_input1'
                type="text"
                placeholder="First name"
                value={firstNm}
                onChange={(e) => setfirstNm(e.target.value)}
              />
            </InputGroup>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBooksecondNm">
            <InputGroup>
              {/* <InputGroup.Text id="formBooksecondNm">A</InputGroup.Text> */}
              <Form.Control
                type="text"
                placeholder="Second Name"
                value={secondNm}
                onChange={(e) => setsecondNm(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBooklastNm">
            <InputGroup>
              {/* <InputGroup.Text id="formBooklastNm">A</InputGroup.Text> */}
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastNm}
                onChange={(e) => setlastNm(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          
          <Form.Group>
          <Select  placeholder='Nationality'
           options={options} 
            onChange={changeHandler} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookidnum">
            <InputGroup>
              {/* <InputGroup.Text id="formBookidnum">A</InputGroup.Text> */}
              <Form.Control
                type="tel"
                placeholder="Id number"
                value={idNum}
                onChange={(e) => setidNum(e.target.value)}
              />
            </InputGroup>
            <Form.Group>
            <PhoneInput id='formBooklastNm'
        
        placeholder="phone "
     value={phone}
     onChange={setphone}/>
                <span className="validity"></span>
            </Form.Group>

            <Form.Group>
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
            </Form.Group>
            <Form.Group>
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
            </Form.Group>
            <Form.Group>
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
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBooklastNm">
            <InputGroup>
              {/* <InputGroup.Text id="formBooklastNm">A</InputGroup.Text> */}
              <Form.Control
                type="text"
                placeholder=" old"
                value={old}
                onChange={(e) => setold(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookidnum">
            <InputGroup>
              {/* <InputGroup.Text id="formBookidnum">A</InputGroup.Text> */}
              <Form.Control
                type="datetime-local"
                min='2022-08-14T08:30'
                 max='2022-09-14T16:30'
                 step="1800"
                 required
                placeholder="Date reservation"
                value={datereserv}
                onChange={(e) => setdatereserv(e.target.value)}
              />
            </InputGroup>
            

            </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            {/* <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button> */}
            {/* <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button> */}
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
             Save
            </Button>
          </div>
        </Form>
      </div>
      </div>
    </>
  );
};

export  {InfoReserv};
