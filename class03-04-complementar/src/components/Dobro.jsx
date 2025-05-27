/*
2. Crie 4 componentes: `Potenciacao`, `RaizQuadrada`, `Dobro` e `Metade`. Cada um recebe uma prop `numero` e retorna o cálculo respectivo.
*/

const Dobro = ({ numero }) => {
    const dobro = numero * 2

  return (
    <>
        <h3>O Dobro de {numero.toFixed(2)} é: {dobro.toFixed(2)}</h3>
    </>
  )
}

export default Dobro