interface INote {
    id: number
    content: string
    important: boolean
  }
  

const Note: React.FC<INote> = ({content}) => {
  
    return (
      <li>{content}</li>
    )
  }

export default Note