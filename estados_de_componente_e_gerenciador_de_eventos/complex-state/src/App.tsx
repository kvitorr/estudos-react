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
  const [esquerda, setEsquerda] = useState<number>(0)
  const [direita, setDireita] = useState<number>(0)
  const [todosOsCliques, setTodos] = useState<string[]>([])
  const [total, setTotal] = useState<number>(0)


  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    const atualizaEsquerda = esquerda + 1
    setEsquerda(esquerda + 1)
    setTotal(esquerda + direita)
  } 

  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat('D'))
    const atualizaDireita = direita + 1
    setDireita(atualizaDireita)
    setTotal(atualizaDireita + esquerda)
  }

  return (
    <div>
      {esquerda}
      <Button handleClique={handleCliqueEsquerda} texto='Esquerda'/>
      <Button handleClique={handleCliqueDireita} texto='Direita'/>
      {direita}

      <Historico todosOsCliques={todosOsCliques}/>
    </div>
  )
}

export default App
