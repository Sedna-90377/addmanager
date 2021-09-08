import React, { useContext } from 'react'
import './addressList.css'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import List from './List'
import { personen } from '../Data'

const AddressList = () => {
    return (
        <div className="addressList__container">
            <div className="addressList__header">
                <div className="addressList__title">
                    <h1 align='center'>Gäste für Schmid-Hochzeit</h1>
                    <p align='center'>Schmid-Hochzeit am 22.06.2022 in Gelsenkirchen</p>
                </div>
                <div className="addressList__icons">
                    <div>
                        <FaEdit color='var(--lightgrey)' size={20} style={{marginBottom: '1rem'}}/>
                    </div>
                    <div>
                        <MdDelete color='var(--lightgrey)' size={20}/>
                    </div>
                    
                </div>
            </div>
            <div className="addressList__bottom">
                <div className="addressList__list">
                    <List list={personen}/>
                </div>
            </div>
        </div>
    )
}

export default AddressList;