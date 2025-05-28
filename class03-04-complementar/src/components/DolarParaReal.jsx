/*
9. Crie dois componentes: `RealParaDolar` e `DolarParaReal`. Eles recebem um valor e convertem utilizando uma taxa fixa de câmbio (ex: 1 dólar = 5 reais).
*/

const DolarParaReal = ({ valor }) => {
    const converterParaReal = (dolar) => {
        return dolar * 5
    }
  return (
    <>
        <h3>${valor.toFixed(2)} é igual a R${converterParaReal(valor).toFixed(2)}</h3>
    </>
  )
}

export default DolarParaReal