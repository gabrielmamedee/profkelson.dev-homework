/*
2. Crie 4 componentes: `Potenciacao`, `RaizQuadrada`, `Dobro` e `Metade`. Cada um recebe uma prop `numero` e retorna o cálculo respectivo.
*/

const Metade = ({ numero }) => {
    const metade = numero / 2
  return (
    <>
        <h3>A metade de {numero.toFixed(2)} é: {metade.toFixed(2)}</h3>
    </>
  )
}

export default Metade