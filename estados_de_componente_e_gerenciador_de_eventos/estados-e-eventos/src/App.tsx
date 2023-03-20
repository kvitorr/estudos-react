import { MouseEventHandler, useState } from "react"

interface Contador {
  contador: number
}

interface Butto {
  texto: string
  onClick: Function
}

const Exibir: React.FC<Contador> = ({contador}) => <div>{contador}</div>

const Button: React.FC<Butto> = ({texto, onClick}) => 
    <button onClick={onClick as MouseEventHandler<HTMLButtonElement>}>
      {texto}
    </button>


const App = () => {
  const [ contador, setContador ] = useState(0)
  const aumentarEmUm = () => setContador(contador + 1)
  const diminuirEmUm = () => setContador(contador - 1)
  const zerarContador = () => setContador(0)

  return (
    <div>
      <Exibir contador={contador}/>
      <Button 
        onClick={aumentarEmUm} 
        texto={'mais 1'}
      />
      <Button 
        onClick={zerarContador} 
        texto={'zerar'}
      />
      <Button 
        onClick={diminuirEmUm} 
        texto={'menos 1'}
      />
    </div>
  )
}


export default App