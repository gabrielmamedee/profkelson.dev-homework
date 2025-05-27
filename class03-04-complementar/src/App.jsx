import './App.css'
import Destino from './components/Destino'
import Dobro from './components/Dobro'
import Filme from './components/Filme'
import ListaDeFilmes from './components/ListaDeFilmes'
import MensagemClima from './components/MensagemClima'
import Metade from './components/Metade'
import OlaUsuario from './components/OlaUsuario'
import Potenciacao from './components/Potenciacao'
import RaizQuadrada from './components/RaizQuadrada'
import StatusPedido from './components/StatusPedido'

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
    </>
  )
}

export default App
