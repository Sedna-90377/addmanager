import React, { useEffect, useState } from 'react'
import './overview.css'
import User from '../assets/images/User.png'
import { FaSearch, FaEllipsisH, FaBell } from "react-icons/fa";
import Contacts from './Contacts';
import { personen } from '../Data';



const Overview = () => {
    
    const [searchTerm, setSearchTerm] = useState('')
    const [selected, setSelected] = useState(personen)

    useEffect(() => {
        const results = personen.filter(person => 
            person.name.toLowerCase().includes(searchTerm) || 
            person.surname.toLowerCase().includes(searchTerm)
        );
        setSelected(results)
    }, [searchTerm])


    const handleSelectedGroup = (group) => {
        if (group === 'all'){
            return personen;
        }
        let filteredPersons = personen.filter(person => person.group === group)
        setSelected(filteredPersons);
    }

    const handleSearch = event => {
        setSearchTerm(event.target.value);
      };

    return (
        <div className="overview__container">
            <div className="overview__user">
                <div className="overview__user__left">
                    <div>
                        <img src={User} alt="User" className="overview__user_img"/>
                    </div>
                    <div className="overview__user_info">
                        <h4>Anne-Marie</h4>
                        <a href="mailto:Anne-Marie@annamayphotos.com">Anne-Marie@annamayphotos.com</a>
                    </div>
                </div>
                
                <FaBell className="overview__user_bell" size={20}/>
            </div>
            <div className="overview__search">
                <FaSearch className="overview__search__icon"/>
                <input 
                    type="text" 
                    className="overview__search__form" 
                    placeholder="Tippen, um Kontakte zu suchen"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="overview__filter">
                <div onClick={()=> handleSelectedGroup('all')}>ALLE</div>
                <div onClick={()=> handleSelectedGroup('clients')}>KUNDEN</div>
                <div onClick={()=> handleSelectedGroup('artists')}>ARTISTS</div>
                <div onClick={()=> handleSelectedGroup('models')}>MODELS</div>
                <div style={{marginTop: '.3rem'}}>
                    <FaEllipsisH/>
                </div>
            </div>
            <div className="overview__contacts">
                    <Contacts contacts={selected}/>
         
                
            </div>
        </div>
    )
}


export default Overview;