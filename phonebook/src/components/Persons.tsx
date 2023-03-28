import { Person } from "../interfaces/Person"
import phonebookService from "../services/phonebookService"

type Props = {
    persons: Person[],
    searchTerm: string,
    setPersons: any
}

const Persons: React.FC<Props> = ({persons, searchTerm, setPersons}) => {
    const personsFiltered = persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

    

    const deletePerson = (id: number, name: string) => {

        if(window.confirm(`Delete ${name}?`)) {
            phonebookService
            .remove(id)
            .then( () => {
              const filteredPersons = persons.filter((person: Person) => person.id != id)
              setPersons(filteredPersons)
            })
        }
    }

    return (
        <>
            {personsFiltered.map((person: any) => {
                return (
                    <div key={person.id}>
                        {person.name} {person.number} 
                        <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default Persons