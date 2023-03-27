interface INoteProps {
  content: string;
  important: boolean;
  toggleImportance: () => void;
}


const Note: React.FC<INoteProps> = ({content, important, toggleImportance}) => {
  const label = important
  ? 'make not important' : 'make important'

  return (
    <li>
      {content}  
      <button onClick={toggleImportance}> {label} </button>
    </li>
  )
  }

export default Note