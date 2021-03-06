import React, { useContext } from 'react'
import {MdDelete} from 'react-icons/md'
import { PersonContext } from '../contexts/PersonContext'


const List = ({list}) => {
    
    const { removePerson} = useContext(PersonContext)

    if(list == null){

        return 'Noch keine Personen ausgewählt'
    }

    return (
        <div>
            {list?.map((person) => {
                return(
                    <div className="list" key={person.id}>
                        <div className="list__box">
                            <div>
                                <img src={require(`../assets/images/${person.surname}.png`).default} alt={person.name}  className="list__photo"/>
                            </div>
                        
                            <div className="list__adcontainer">
                                <div className="list__name">
                                    <p>{`${person.surname} ${person.name}`}</p>
                                </div>
                                <div className="list__addresses">
                                    {person.address.map((ad) => {
                                        return (
                                            <div  className="list__addresses_item">
                                                <p>{ad.street} {ad.houseNumber}</p>
                                                <p>{ad.country === 'Deutschland' ? 'D-' : ''}{ad.zip} {ad.city}</p>
                                                <p>{ad.country !== 'Deutschland' ? ad.country : ''}</p>   
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div style={{cursor: 'pointer'}}>
                                <MdDelete 
                                    color="var(--lightgrey)" 
                                    size={18} style={{padding: '1rem 1rem 1rem 1rem'}}
                                    onClick={() => removePerson(person, person.id)}
                                />
                            </div>
                            
                                
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default List;