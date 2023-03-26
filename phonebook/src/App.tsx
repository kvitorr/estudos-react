import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [searchTerm, setNewSearchTerm] = useState('')

  const handleSearchTermOnChange = (event: any) => {
    setNewSearchTerm(event.target.value)
  }

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook </h2>
      <Filter searchTerm={searchTerm} handleSearchTermOnChange={handleSearchTermOnChange}/>

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>

      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} searchTerm={searchTerm}/>
      </ul>
    </div>
  )
}

export default App