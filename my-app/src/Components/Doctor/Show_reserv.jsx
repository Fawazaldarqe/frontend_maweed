import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { booksService } from "../../services/crud.services";
import {Nav2} from './Nav2'
const AlldataList = ({ getBookId }) => {
  const [Alldata, setAlldata] = useState([]);
  useEffect(() => {
    getAlldata();
  }, []);

  const getAlldata = async () => {
    const data = await  booksService.getAllBooks();
    console.log(data.docs);
    setAlldata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await booksService.deleteBook(id);
    getAlldata();
  };
  return (
    <>
    <Nav2/>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getAlldata}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(Alldata, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>phone</th>
            <th>Old</th>
            <th>datereserv</th>
            {/* <th>Status</th> */}
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {Alldata.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.firstNm}</td>
                <td>{doc.lastNm}</td>
                <td>{doc.country.label}</td>
                <td>{doc.phone}</td>
                <td>{doc.old}</td>
                <td>{doc.datereserv}</td>
                {/* <td>{doc.status}</td> */}
                <td>
                  {/* <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </Button> */}
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default AlldataList;
