import React from 'react'
import { personen } from '../Data';

const Contacts = () => {
    const contacts = personen;
    return (
        <div>
            {contacts.map((person, index) => {
                return(
                    <div  className="contacts">
                        <div className="contacts__info">
                            <img src={require(`../assets/images/${person.surname}.png`).default} alt={person.name}  className="contacts__photo"/>
                        
                            <div className="contacts__name">
                                <p>{`${person.surname} ${person.name}`}</p>
                                <p>{`${person.address[0].zip} ${person.address[0].city}`}</p>
                            </div>
                        </div>
                        <div className="contacts__add">+</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Contacts;