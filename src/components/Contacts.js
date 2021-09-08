import React, { createContext, useState } from 'react'
import {BsPlusCircle} from 'react-icons/bs'
import List from './List';

// let list = [];
// const handleClick = (person) => {
// list.push(person)
//     console.log('gute liste',list)
// }

// export const ListContext = createContext();

const Contacts = ({contacts}) => {

    // const [list, setList] = useState([])
    // const handleClick = (person) => {
    //     list.push(person)
    //     setList(list)
    //     console.log(list)
    // }

    let list = [];
    const handleClick = (person) => {
    list.push(person)
        console.log('gute liste',list)
    }

    return (
            <div>
                {contacts?.map((person) => {
                    return(
                        <div  className="contacts">
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
                                    onClick={() => handleClick(person)}
                                />
                            </div>
                        </div>
                    )
                })}
                <div>hello</div>
                <List list={list}/>
            </div>
    )
}

export default Contacts;