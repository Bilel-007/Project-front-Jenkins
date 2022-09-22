import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table}from 'react-bootstrap'

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector,useDispatch } from 'react-redux'
import { useEffect,useState } from 'react'
import{ getuser,deleteuser,edditUserById} from "../Actions/userAction"
import { Modal, Button, Form } from "react-bootstrap";


const UserTable = () => {
    const users = useSelector(state => state.userReducer.users);
    const [newupdate,setNewupdate]=useState({
        "fname":"",
        "lname":"",
        "address":"",
        "phonenumber":""
    })


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const handleChange = (e) => {
    
        setNewupdate({ ...newupdate, [e.target.name]: e.target.value });
        e.preventDefault();
      };
    useEffect(()=>{
        dispatch(getuser(),[])
    },[])
  return (
    <div>
        
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>PhoneNumber</th>
      <th>Date Created</th>
      <th>Action</th>
    </tr>
  </thead>
  {users.map((el)=>
  <tbody>
    <tr>
      <td key={el._id}>{el._id}</td>
      <td>{el.fname}</td>
      <td>{el.lname}</td>
      <td>{el.address}</td>
      <td>{el.phonenumber}</td>
      <td> 
         {el.date}
            </td>
            <td>
                <Button variant="contained" style={{backgroundColor:"rgb(33,37,41)",marginRight:"20px",color:"white"}} startIcon={<ModeEditIcon />} onClick={handleShow}>
                       EDIT
                </Button>


                <Button variant="contained" style={{backgroundColor:"rgb(33,37,41)",color:"white"}} startIcon={<DeleteForeverIcon />} onClick={()=>{dispatch(deleteuser(el._id))}}>
                    DELETE
                </Button>

            </td>
    </tr>
    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>EDIT USER</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FirstName:</Form.Label>
        <Form.Control type="text" placeholder="Enter your FirstName"name="fname" value={el.fname}onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName:</Form.Label>
        <Form.Control type="text" placeholder="Enter your LastName" name="lname" value={el.lname}onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>ADDRESS:</Form.Label>
        <Form.Control type="text" placeholder="Enter your Address" name="address" value={el.address}onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phonenumber:</Form.Label>
        <Form.Control type="text" placeholder="Enter your Phonenumber"name="phonenumber" value={el.phonenumber}onChange={handleChange} />
      </Form.Group>


      <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      cancel
    </Button>
    <Button variant="primary" type="submit"  onClick={()=>
                    {dispatch(edditUserById(el._id,newupdate))}}>
        EDIT
      </Button>
  </Modal.Footer>
    </Form>
  </Modal.Body>
  
</Modal>
  </tbody>
  
  )}
</Table>






    </div>
  )
}

export default UserTable