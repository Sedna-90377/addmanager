import React from 'react'
import './overview.css'
import User from '../assets/images/User.png'
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Contacts from './Contacts';


const Overview = () => {

    return (
        <div className="overview__container">
            <div className="overview__user">
                <div>
                    <img src={User} alt="User" className="overview__user_img"/>
                </div>
                <div className="overview__user_info">
                    <h4>Anne-Marie</h4>
                    <a href="mailto:Anne-Marie@annamayphotos.com">Anne-Marie@annamayphotos.com</a>
                </div>
                <FaBell className="overview__user_bell"/>
            </div>
            <div className="overview__search">
                <FaSearch className="overview__search__icon"/>
                <input 
                    type="text" 
                    className="overview__search__form" 
                    placeholder="Tippen, um Kontakte zu suchen"
                />
            </div>
            <div className="overview__filter">
                <div>ALLE</div>
                <div>KUNDEN</div>
                <div>ARTISTS</div>
                <div>MODELS</div>
                <div>...</div>
            </div>
            <div className="overview__contacts">
                    <Contacts />
         
                
            </div>
        </div>
    )
}


export default Overview;