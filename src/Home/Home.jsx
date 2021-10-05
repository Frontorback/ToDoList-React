import React from "react";
import Alert from "../Alert/Alert";
import Notes from "../Notes/Notes";
import InputArea from "./InputArea";
import './Home.css'

const Home = () =>{

    return(
        <div>
            <Alert />
            <InputArea />
            <Notes />
        </div>
    )
}
export default Home