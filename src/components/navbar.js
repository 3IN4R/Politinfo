import React from "react";
import { Link } from "react-router-dom";

import '../App.css'

export default function NavBar(){
    return(
        <div className="Navi">
        <ul className='Navigation'>
    
            <Link to='/home' className="Retardo">Home</Link>
            <Link to='/info' className="Retardo">Sources</Link>
    </ul>
        </div>
    )
}