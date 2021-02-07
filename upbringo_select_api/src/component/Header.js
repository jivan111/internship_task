import React,{useEffect,useState} from 'react'
import axios from "axios"
import Logo from "./Logo"
import SelectMenu from "./SelectMenu";
import "./Header.css"
function Header() {
    const [states,setState]=useState([])
    useEffect(() => {
     axios.get("https://www.upbringo.com/api/assignment/football/")
     .then(res=>{
         setState([...res.data.states])
     })   

    },[])
    return (
        <div className= "headers">
            <Logo/>
            <SelectMenu data={states}/>
        </div>
    )
}

export default Header
