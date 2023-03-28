import React, { useState } from "react"
import { Person } from "../interfaces/Person"
import { areObjectsEqual } from "../utils/functions"

import phonebookService from "../services/phonebookService"
import Persons from "./Persons"

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
        }

        if(persons.some((person: Person) => person.name === newName)) {
          if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            const person: Person | undefined = persons.find(person => person.name == newName)

            if(person) {
              phonebookService
              .update(person.id, newPerson)
              .then(personUpdated => {
                const personsUpdated = persons.filter((person: Person) => person.id != personUpdated.id)
                setPersons(personsUpdated.concat(personUpdated))
              })  
            } 
          }

            setNewName('')
            setNewNumber('')
        } else {

          phonebookService
          .create(newPerson)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
          })
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