import React,{ useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{ getuser, deleteuser,updateuser} from "../Actions/userAction"
import { Button , Modal} from 'react-bootstrap'

const UserList = () => {
    
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();
    // const [form,setForm] = useState(
    //    { fname:"",lname:"",address:"",phonenumber:""}
    // )
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    useEffect(()=>{
        dispatch(getuser(),[])
    })
  return (
    

    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Edit
      </Button> */}
        
        
        {users.map((el)=>
        <div key={el.id}>
            <p>FirstName:{el.fname}</p>
            <p>LastName:{el.lname}</p>
            <p>PhoneNumber:{el.phonenumber}</p>

            {/* <button onClick={()=>{dispatch(deleteuser(el._id))}}>DELETE</button> */}
            {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label></label>
            <input></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={dispatch(updateuser())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

            
        </div>
        )}
    </div>
  )
}

export default UserList