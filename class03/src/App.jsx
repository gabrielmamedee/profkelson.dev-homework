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
import ListaDeLivros from './components/ListaDeLivros'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import Mensagem from './components/Mensagem'

const App = () => {
  return (
    <div>
      <h1>Mensagens</h1>
      <Mensagem tipo={"sucesso"} />
      <Mensagem tipo={"erro"} />
      <Mensagem tipo={"aviso"} />
      <br />
      <br />
      <h1>Biblioteca</h1>
      <ListaDeLivros />
      <br />
      <br />
      <h1>Renderizando com funçoes</h1>
      <RenderizandoComFuncoes />
      <br />
      <br />
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