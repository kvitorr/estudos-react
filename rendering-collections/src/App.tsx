import Note from "./components/Note"

interface INotes {
  notes: {
    id: number
    content: string
    important: boolean
  } []
}


const App: React.FC<INotes> = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
          {notes.map((note: any) => 
            <Note key={note.id} {...note}/>
          )}
      </ul>
    </div>
  )
}

export default App