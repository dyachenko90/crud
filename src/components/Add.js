import React, { useContext, useState} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { v4 as uuid } from 'uuid';

const Add = () => {
    const [ name, setName ] = useState('');
    const { addUser } = useContext(GlobalContext);
        const navigate = useNavigate();
    
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        navigate('/');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    return (        
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={onChange}></Input>
            </FormGroup>
            <Button type="submit" placeholder="Enter name">Add</Button>
            <Link to='/' className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default Add;