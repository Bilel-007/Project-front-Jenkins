import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from "react-bootstrap"
import { Button} from '@mui/material';
import CustomizedInputBase from "./CustomizedInputBase"
import  './Navbar.css'
import UserModal from './UserModal'


const Navbars = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">User Managment</Navbar.Brand>
        <Nav className="me-auto">
        <CustomizedInputBase/>

          <Nav.Link href="#pricing">
            <div variant="contained" style={{backgroundColor:"rgb(33,37,41)"}} >
                   
                   <UserModal/>
            </div>
          </Nav.Link>

        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars