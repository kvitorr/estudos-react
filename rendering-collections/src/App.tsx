import { useState } from "react"
import Note from "./components/Note"

interface INotes {
  notes: {
    id: number
    content: string
    important: boolean
  } []
}


const App: React.FC<INotes> = ({notes}) => {
  
  const [currentNotes, setNotes] = useState(notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event: any) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: currentNotes.length + 1 
    }

    setNotes(currentNotes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event: any) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? currentNotes
    : currentNotes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
          {notesToShow.map((note: any) => 
            <Note key={note.id} {...note}/>
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App