import './App.css'
import CentimetroParaMetro from './components/CentimetroParaMetro'
import ContadorDeCliques from './components/ContadorDeCliques'
import Destino from './components/Destino'
import DiaDaSemana from './components/DiaDaSemana'
import Dobro from './components/Dobro'
import DolarParaReal from './components/DolarParaReal'
import Filme from './components/Filme'
import ListaDeFilmes from './components/ListaDeFilmes'
import MensagemClima from './components/MensagemClima'
import Metade from './components/Metade'
import MetroParaCentimetro from './components/MetroParaCentimetro'
import OlaUsuario from './components/OlaUsuario'
import Potenciacao from './components/Potenciacao'
import RaizQuadrada from './components/RaizQuadrada'
import RealParaDolar from './components/RealParaDolar'
import SorteadorDeDados from './components/SorteadorDeDados'
import SorteadorDeNumeros from './components/SorteadorDeNumeros'
import StatusPedido from './components/StatusPedido'
import StyleGlobal from './components/StyleGlobal'
import StyleInline from './components/StyleInline'
import StyleInlineDinamico from './components/StyleInlineDinamico'
import TemperaturaEstacao from './components/TemperaturaEstacao'

function App() {

  const filmes = [
  { titulo: "Rei Leão", diretor: "Rob Minkoff e Roger Allers", ano: 1994 },
  { titulo: "Vingadores: Ultimato", diretor: "Anthony e Joe Russo", ano: 2019 },
  { titulo: "Interestelar", diretor: "Christopher Nolan", ano: 2014 },
  { titulo: "Parasita", diretor: "Bong Joon-ho", ano: 2019 },
  { titulo: "Homem-Aranha: Sem Volta Para Casa", diretor: "Jon Watts", ano: 2021 }
];

  return (
    <>
      {/*Componentes e Props*/}
      <OlaUsuario />
      <Dobro numero={4} />
      <Metade numero={4} />
      <Potenciacao numero={4} />
      <RaizQuadrada numero={4} />
      <Filme titulo={"Rei Leão"} diretor={"Disney"} ano={1999} />
      <ListaDeFilmes filmes={filmes} />
      <MensagemClima clima={"sol"}/>

      {/*Renderização Condicional com Funções*/}
      <Destino pais={"BR"} />
      <Destino pais={""} />
      <StatusPedido statusDoPedido={"enviado"} />

      {/*Conversores*/}
      <CentimetroParaMetro centimetros={100} />
      <MetroParaCentimetro metros={1} />
      <DolarParaReal valor={1} />
      <RealParaDolar valor={5} />

      {/*CSS Global*/}
      <StyleGlobal />

      {/*CSS Inline e Inline Dinâmico*/}
      <StyleInline />
      <StyleInlineDinamico ativo={true} />

      {/*CSS Module*/}
      <DiaDaSemana  dia={'Domingo'} />
      <TemperaturaEstacao estacao={'Inverno'} />

      {/*Hooks - useState*/}
      <ContadorDeCliques />
      <SorteadorDeNumeros />
      <SorteadorDeDados />
    </>
  )
}

export default App
