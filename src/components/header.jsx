import React from "react"
import { GiOrange } from 'react-icons/gi';


const Header = () => (
    <div className= 'header'>
        <div className = 'toggle-menu'></div>
        <h3 className= 'header-h3' ><GiOrange/> <span className= 'header-title' >stories</span> </h3>

    </div>
)

export default Header;