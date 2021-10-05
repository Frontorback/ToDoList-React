import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './Notes.css'
import { ProvideAxios } from "./Reducer";

const Notes = () => {

    const { title, deleteNotes } = useContext(ProvideAxios)
    const ArrState = Object.values(title)
    return (
        <TransitionGroup component="div" className='note-area'>

            {ArrState.map(note => (
                <CSSTransition
                    timeout={400}
                    classNames='note'
                    key={note.id}
                >
                    <ul key={note.id} >

                        <li  >
                            <div>
                                <strong>{note.title}</strong> <small>{note.time}</small>
                            </div>
                            <button className='Close-btn' onClick={() => deleteNotes(note.id)}>X</button>

                        </li>
                    </ul>
                </CSSTransition>

            ))
            }


        </TransitionGroup>

    )
}
export default Notes