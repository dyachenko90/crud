import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

const Users = () => {
    
    const { users, removeUser } = useContext(GlobalContext);

    return (        
        <ListGroup>
            {users.map(user => (
            <ListGroupItem key={user.id} className="d-flex align-items-center justify-content-between">
                <strong>{user.name}</strong>
                <div className="d-flex align-items-center justify-content-between">
                    <Link className='btn btn-warning' to={`/edit/${user.id}`}>Edit</Link>
                    <Button onClick = {() => removeUser(user.id)}
                    color="danger"
                    >Delete</Button>
                </div>
            </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Users;