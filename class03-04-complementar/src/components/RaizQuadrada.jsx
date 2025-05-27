/*
2. Crie 4 componentes: `Potenciacao`, `RaizQuadrada`, `Dobro` e `Metade`. Cada um recebe uma prop `numero` e retorna o cálculo respectivo.
*/

const RaizQuadrada = ({ numero }) => {
    const calculaRaizQuadrada = (n) => Math.sqrt(n)

  return (
    <>
        <h3>A Raiz Quadrada de {numero.toFixed(2)} é igual a: {calculaRaizQuadrada(numero)}</h3>
    </>
  )
}

export default RaizQuadrada