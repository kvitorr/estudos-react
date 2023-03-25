import { Person } from "../interfaces/Person"

type Props = {
    persons: Person[],
    searchTerm: string
}

const Persons: React.FC<Props> = ({persons, searchTerm}) => {
    const personsFiltered = persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <>
            {personsFiltered.map((person: any) => {
                return <li key={person.id}>{person.name} {person.number}</li>
            })}
        </>
    )
}

export default Persons