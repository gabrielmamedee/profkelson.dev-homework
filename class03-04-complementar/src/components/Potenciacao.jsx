/*
2. Crie 4 componentes: `Potenciacao`, `RaizQuadrada`, `Dobro` e `Metade`. Cada um recebe uma prop `numero` e retorna o cálculo respectivo.
*/

const Potenciacao = ({ numero }) => {
    const calculaPotenciacao = (base, expoente) => Math.pow(base, expoente)
  return (
    <>
        <h3>{numero.toFixed(2)} elevedao a ele mesmo é igual a: {calculaPotenciacao(numero, numero)}</h3>
    </>
  )
}

export default Potenciacao