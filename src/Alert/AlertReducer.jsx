import React, { createContext, useReducer } from "react";

export const AlertContext = createContext();

const Reducer = (state, action) => {
    switch (action.type) {
        case 'GREEN-ALERT':
            return {
                ...state,
                mess: action.text,
                style: action.style,
                alertHide: false
            }
        case 'HIDE':
            return {
                ...state,
                alertHide: true
            }

        default: return state
    }
}

const AlertReducer = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, {
        mess: '',
        alertHide: false
    })

    const textAlert = (text, style) => {
        dispatch({ type: 'GREEN-ALERT', text, style })
    }
    const hide = () => {
        dispatch({ type: "HIDE" })
    }


    return (
        <AlertContext.Provider value={{ state: state.mess, style: state.style, alertHide: state.alertHide, textAlert, hide }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertReducer