import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import{ addUser } from "../Actions/userAction"
// import AddBoxIcon from '@mui/icons-material/AddBox';


const UserModal = () => {
  const users = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    address: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    
    setForm({ ...form, [e.target.name]: e.target.value });
    e.preventDefault();
  };
  return (
    <div>
      <Button onClick={handleShow} >ADD</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>FirstName:</Form.Label>
              <Form.Control type="text" placeholder="Enter your FirstName"name="fname" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>LastName:</Form.Label>
              <Form.Control type="text" placeholder="Enter your LastName" name="lname" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>ADDRESS:</Form.Label>
              <Form.Control type="text" placeholder="Enter your Address" name="address"onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phonenumber:</Form.Label>
              <Form.Control type="text" placeholder="Enter your Phonenumber"name="phonenumber"onChange={handleChange} />
            </Form.Group>


            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" type="submit"  onClick={()=>dispatch(addUser(form))}>
              ADD
            </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default UserModal;
