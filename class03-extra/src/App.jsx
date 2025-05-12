import './App.css'
import AnimalFavorito from './components/AnimalFavorito'
import DesejoDoDia from './components/DesejoDoDia'
import DivideComEstilo from './components/DivideComEstilo'
import EstudoHoje from './components/EstudoHoje'
import GaleriaImagens from './components/GaleriaImagens'
import Ny1 from './assets/ny1.jpg'
import Ny2 from './assets/ny2.jpg'
import Ny3 from './assets/ny3.jpg'
import HorasParaSegundos from './components/HorasParaSegundos'
import ListaDeFilmesDetalhados from './components/ListaDeFilmesDetalhados'
import MensagemClima from './components/MensagemClima'
import MinutosParaSegundos from './components/MinutosParaSegundos'
import MultiplicaComEstilo from './components/MultiplicaComEstilo'
import SegundosParaHoras from './components/SegundosParaHoras'
import SegundosParaMinutos from './components/SegundosParaMinutos'
import SomaComEstilo from './components/SomaComEstilo'
import SubtraiComEstilo from './components/SubtraiComEstilo'
import ImagemCondicional2 from './components/ImagemCondicional2'
import ListaDeFrutas from './components/ListaDeFrutas'
import ContatoUsuario from './components/ContatoUsuario'

function App() {

  const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

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
      <br />
      {/*4. Lista de Filmes com Gênero*/}
      <ListaDeFilmesDetalhados />
      <br />
      {/*5. Mensagem de Clima*/}
      <MensagemClima tipoClima={"sol"}/>
      <br />
      {/*6. Desejo do Dia*/}
      <DesejoDoDia mensagem={"Fazer Churrasco"}/>
      <br />
      {/*7. Renderizar Animal Favorito*/}
      <AnimalFavorito animal={"cachorro"} />
      <br />
      {/*8. Galeria de Imagens*/}
      <GaleriaImagens img1={Ny1} img2={Ny2} img3={Ny3} />
      <br />
      {/*9. Galeria Pública*/}
      <GaleriaImagens img1={"m1.jpeg"} img2={"m2.jpeg"} img3={"m3.jpeg"} />
      <br />
      {/*10. Imagem Alternativa*/}
      <ImagemCondicional2 tipoImagem={"PERSONAGEM"} />
      <br />
      {/*11. Renderização de Frutas*/}
      <ListaDeFrutas frutas={frutas} />
      <br />
      {/*12. Contato de Usuário*/}
      <ContatoUsuario nome={"Gabriel"} email={"gabriel@gmail.com"} telefone={"(83) 99999-9999"} />
    </>
  )
}

export default App
