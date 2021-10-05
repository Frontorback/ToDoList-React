import React, { useContext } from "react";
import { AlertContext } from "./AlertReducer";
import './Alert.css'
import { CSSTransition } from "react-transition-group";


const Alert = () => {
    const { state, style, alertHide, hide } = useContext(AlertContext)

    return (
        <CSSTransition
            in={!alertHide}
            timeout={{
                enter: 500,
                exit: 300
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`Alert-${style}`} onClick={hide}>
                <div>{state}</div>
            </div>
        </CSSTransition>
    )
}

export default Alert