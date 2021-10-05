import React, { createContext, useReducer } from "react";
import axios from "axios";

const url = 'https://todolistnumtwo-default-rtdb.firebaseio.com/'

export const ProvideAxios = createContext()


const reduce = (state, action) => {
    switch (action.type) {
        case 'ADD-NOTES':
            return {
                ...state,
                title: [...state.title, action.pushDate]

            }
        case 'GET-POST':
            return {
                ...state,
                title: action.payload
            }

        case 'DELETE-POST':
            return {
                ...state,
                title: state.title.filter(del => del.id !== action.idDelete)
            }


        default: return state

    }
}


const ReduceAxios = ({ children }) => {


    const [state, dispatch] = useReducer(reduce, {
        title: []
    })


    const addNotes = async title => {
        const noteData = {
            title,
            time: new Date().toLocaleDateString("en-GB")
        }
        const res = await axios.post(`${url}/notes.json`, noteData)


        const pushDate = {
            ...noteData,
            id: res.data.name
        }
        dispatch({ type: 'ADD-NOTES', pushDate })
    }

    const getNotes = async () => {
        const res = await axios.get(`${url}/notes.json`)
        const payload = Object.keys(res.data || {}).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({ type: 'GET-POST', payload })
    }
    const deleteNotes = async (idDelete) => {
        await axios.delete(`${url}/notes/${idDelete}.json`)
        dispatch({ type: 'DELETE-POST', idDelete })
    }

    return (
        <ProvideAxios.Provider value={{ title: state.title, addNotes, getNotes, deleteNotes }}>
            {children}
        </ProvideAxios.Provider>

    )
}
export default ReduceAxios