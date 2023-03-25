import React, { useState } from "react"
import { Person } from "../interfaces/Person"
import { areObjectsEqual } from "../utils/functions"


type PersonForm = {
    persons: Person[]
    setPersons: any
}

const PersonForm: React.FC<PersonForm> = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event: any) => {
        event.preventDefault()
    
        const newPerson: Person = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        
        if(persons.some((person: Person) => areObjectsEqual(person, newPerson))) {
            alert(`${newPerson.name} is already added to phonebook`)
            setNewName('')
            setNewNumber('')
        } else {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
      }
    
    const handleNameOnChange = (event: any) => {
        setNewName(event.target.value)
    }
    
    const handleNumberOnChange = (event: any) => {
        setNewNumber(event.target.value)
    }
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameOnChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberOnChange}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}


export default PersonForm