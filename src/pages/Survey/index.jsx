import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function suivant(number, setNumber) {
  setNumber(number + 1)
}

function precedent(number, setNumber) {
  if (number === 1) {
    return
  } else {
    setNumber(number - 1)
  }
}

function Survey() {
  const { questionNumber } = useParams()
  const [number, setNumber] = useState(parseInt(questionNumber))
  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {number}</h2>

      <Link onClick={() => {precedent(number, setNumber) }} to={`/survey/${number}`}> Précedent{' '}</Link>

      {
         number === 10 ? (<Link to="/results">Résultats</Link> ) : (<Link onClick={() => {suivant(number, setNumber)}}to={`/survey/${number}`}>Suivant</Link>)
      }
    </div>
  )
}

export default Survey
