import React, {  useContext} from 'react'
import {BsPlusCircle} from 'react-icons/bs'
import { PersonContext } from '../contexts/PersonContext';


const Contacts = ({contacts}) => {

    const {addPerson} = useContext(PersonContext)

    return (
            <div>
                {contacts?.map((person) => {
                    return(
                        <div  className="contacts" key={person.id}>
                            <div className="contacts__info">
                                <img src={require(`../assets/images/${person.surname}.png`).default} alt={person.name}  className="contacts__photo"/>
                            
                                <div className="contacts__name">
                                    <p>{`${person.surname} ${person.name}`}</p>
                                    <p>{`${person.address[0].zip} ${person.address[0].city}`}</p>
                                </div>
                            </div>
                            <div className="contacts__add">
                                <BsPlusCircle 
                                    color="var(--lightgrey)" 
                                    size={25} 
                                    style={{marginTop: '1.5rem', cursor: 'pointer'}}
                                    onClick={() => addPerson(person, person.id)}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default Contacts;