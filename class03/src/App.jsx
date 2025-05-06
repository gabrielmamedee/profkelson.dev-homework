import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometroParaMilhas from './components/QuilometroParaMilhas'
import MilhasParaQuilometros from './components/MilhasParaQuilometros'
import Livro from './components/Livro'
import ListaDeLivros from './components/ListaDeLivros'

const App = () => {
  return (
    <div>
      <h1>Biblioteca</h1>
      <ListaDeLivros />
      <h1>Operadores Matematicos</h1>
      <Adicao num1={2} num2={2} />
      <Subtracao num1={2} num2={2} />
      <Multiplicacao num1={2} num2={2} />
      <Divisao num1={2} num2={2} />
      <br />
      <br />
      <PrecisoEstudar nomeDaTecnologia={"React"} />
      <br />
      <br />
      <h1>Convertendo temperaturas e medidas</h1>
      <CelsiusParaFahrenheit celsius={25} />
      <FahrenheitParaCelsius fahrenheit={77} />
      <QuilometroParaMilhas km={100} />
      <MilhasParaQuilometros milhas={62.14} />
    </div>
  )
}

export default App