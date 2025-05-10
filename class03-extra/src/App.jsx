import './App.css'
import DivideComEstilo from './components/DivideComEstilo'
import EstudoHoje from './components/EstudoHoje'
import FilmeDetalhado from './components/FilmeDetalhado'
import HorasParaSegundos from './components/HorasParaSegundos'
import MinutosParaSegundos from './components/MinutosParaSegundos'
import MultiplicaComEstilo from './components/MultiplicaComEstilo'
import SegundosParaHoras from './components/SegundosParaHoras'
import SegundosParaMinutos from './components/SegundosParaMinutos'
import SomaComEstilo from './components/SomaComEstilo'
import SubtraiComEstilo from './components/SubtraiComEstilo'

function App() {
  return (
    <>
      {/*1. Operações Aritméticas com Estilo*/}
      <SomaComEstilo num1={2} num2={2} />
      <SubtraiComEstilo num1={4} num2={2}/>
      <MultiplicaComEstilo num1={2} num2={3}/>
      <DivideComEstilo num1={4} num2={4} />
      <br />
      {/*2. Frase de Estudo Personalizada*/}
      <EstudoHoje nomeDaTecnologia={"React"} />
      <br />
      {/*3. Conversões de Unidades de Tempo*/}
      <SegundosParaMinutos segundos={62} />
      <MinutosParaSegundos minutos={1} />
      <HorasParaSegundos horas={1} />
      <SegundosParaHoras segundos={3600} />
      {/*4. Lista de Filmes com Gênero*/}
      
    </>
  )
}

export default App
