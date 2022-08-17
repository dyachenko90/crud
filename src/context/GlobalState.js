import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


const initState = {
    users: [
        // {id: 1, name: 'User 1'},
        // {id: 2, name: 'User 2'},
        // {id: 3, name: 'User 3'},
        // {id: 4, name: 'User 4'},
        // {id: 5, name: 'User 5'},
        // {id: 6, name: 'User 6'},
        // {id: 7, name: 'User 7'},
        // {id: 8, name: 'User 8'},
        // {id: 9, name: 'User 9'},
        // {id: 10, name: 'User 10'}
    ]
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    
    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

        return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}