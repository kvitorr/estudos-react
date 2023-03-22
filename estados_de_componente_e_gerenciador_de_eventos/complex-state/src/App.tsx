import { useState } from 'react'
import './App.css'

interface Cliques {
  todosOsCliques: string[]
}

interface Butto {
  handleClique: any
  texto: string
}


const Historico: React.FC<Cliques> = ({todosOsCliques}) => {
  if(todosOsCliques.length === 0) {
    return (
      <div>
        Clique em um dos botões para usar a aplicação!
      </div>
    )
  }

  return (
    <div>
      Histórico de cliques nos botões: {todosOsCliques.join(' ')}
    </div>
  )
}

const Button: React.FC<Butto> = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)


const App = () => {
  const [valor, setValor] = useState<number>(0)

  return (
    <div>
      {valor}
      <Button handleClique={() => setValor(1000)} texto={'mil'}/>
      <Button handleClique={() => setValor(0)} texto={'reset'}/>
      <Button handleClique={() => setValor(valor+1)} texto={'increment'}/>

    </div>
  )
}

export default App
