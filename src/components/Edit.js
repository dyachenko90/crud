import React, { useContext, useState, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";


const Edit = (props) => {
    const { editUser, users } = useContext(GlobalContext);
    const [ selectedUser, setSelectedUser ] = useState({
        id: '',
        name: ''
    });

    const navigate = useNavigate();
    const { id: currentUserId } = useParams();

    console.log(currentUserId);

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user._id === userId);
        setSelectedUser(selectedUser)
    }, [currentUserId, users]);

    
    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        navigate("/");
    }



    return (        
        <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input 
                type="text" 
                name="name"
                value={selectedUser.name} 
                onChange={onChange}
                required
            >
            </Input>
        </FormGroup>
        <Button type="submit" placeholder="Enter name">Edit</Button>
        <Link to='/' className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    )
}

export default Edit;