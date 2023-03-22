import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Butto {
  texto: string
  onClick: any
}

interface IStatistics {
  good: number
  bad: number
  neutral: number
  votes: number
  average: number
  positive: number
}

interface IStatisticsLine {
  texto: string
  valor: number
}

const StatisticLine: React.FC<IStatisticsLine> = ({texto, valor}) => {

  return (
    <tr>
      <td>{texto}</td>
      <td>{valor}</td>
    </tr>
  )

}

const Button: React.FC<Butto> = ({texto, onClick}) => {
  return (
    <button onClick={onClick}>
      {texto}
    </button>
  )
}

const Statistics: React.FC<IStatistics> = ({good, neutral, bad, votes, average, positive}) => {

  if(votes === 0) {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p> 
      </div>
    )  
  }
  return(
    <table>
      <StatisticLine texto='good' valor={good}/>
      <StatisticLine texto='neutral' valor={neutral}/>
      <StatisticLine texto='bad' valor={bad}/>
      <StatisticLine texto='all' valor={votes}/>
      <StatisticLine texto='average' valor={average}/>
      <StatisticLine texto='positive' valor={positive}/>
    </table>
  )
}

function App() {
  const [statistics, setStatistics] = useState({
    good: 0, bad: 0, neutral: 0, votes: 0, average: 0, positive: 0
  })

  const setGoodF = () => {
    const updatedGood = statistics.good + 1
    const updatedVotes = statistics.votes + 1
    const updatedAverage = statistics.average + 1 
    const updatedPositive = (updatedGood)/updatedVotes * 100

    const updatedStatistics = {
      ...statistics,
      good: updatedGood,
      votes: updatedVotes,
      average: updatedAverage,
      positive: updatedPositive
    }

    setStatistics(updatedStatistics)
  }

  const setBadF = () => {
    const updatedBad = statistics.bad + 1
    const updatedVotes = statistics.votes + 1
    const updatedAverage = statistics.average - 1 
    const updatedPositive = (statistics.good)/updatedVotes * 100

    const updatedStatistics = {
      ...statistics,
      bad: updatedBad,
      votes: updatedVotes,
      average: updatedAverage,
      positive: updatedPositive
    }

    setStatistics(updatedStatistics)
  }

  const setNeutralF = () => {
    const updatedNeutral = statistics.neutral + 1
    const updatedVotes = statistics.votes + 1
    const updatedPositive = (statistics.good)/updatedVotes * 100

    const updatedStatistics = {
      ...statistics,
      neutral: updatedNeutral,
      votes: updatedVotes,
      positive: updatedPositive
    }

    setStatistics(updatedStatistics)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setGoodF} texto={'good'}/>
      <Button onClick={setNeutralF} texto={'neutral'}/>
      <Button onClick={setBadF} texto={'bad'}/>
      
      <h1>statistics</h1>
      <Statistics {...statistics}/>
    </div>
  )
}

export default App
