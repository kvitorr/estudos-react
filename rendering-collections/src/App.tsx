import axios from "axios"
import { useEffect, useState } from "react"
import Note from "./components/Note"

export interface INotes {
  id: number
  content: string
  important: boolean
}


const App = () => {
  const [currentNotes, setNotes] = useState<INotes[]>([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])


  const addNote = (event: any) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      
    setNotes(currentNotes.concat(response.data))
    setNewNote('')
    })
  }

  const toggleImportanceOf = (id: number) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = currentNotes.find(n => n.id === id)
    if(note) {
      const changedNote = { ...note, important: !note.important }
  
      axios.put(url, changedNote).then(response => {
        setNotes(currentNotes.map(n => n.id !== id ? n : response.data))
      })
    }
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
          {notesToShow.map((note: INotes, id) => 
            <Note key={id} content={note.content} important={note.important} toggleImportance={() => toggleImportanceOf(note.id)}/>
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