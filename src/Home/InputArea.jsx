import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AlertContext } from "../Alert/AlertReducer";
import { ProvideAxios } from "../Notes/Reducer";


const InputArea = () => {
    const { addNotes, getNotes } = useContext(ProvideAxios)
    const { textAlert } = useContext(AlertContext)
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const [text, setText] = useState('')


    const PushInState = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        if (text.trim()) {
            addNotes(text).then(() => {

                textAlert('Заметка успешно добавлена', 'green')

            }).catch(() => {
                textAlert('FAIL', 'red')
            })
            setText('')
        }
        else {
            textAlert('Введите корректное значение!', 'yellow')

        }
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input className='Text-area' type='text' value={text} onChange={PushInState} placeholder="write note"></input>
            </form>
        </div>
    )
}
export default InputArea