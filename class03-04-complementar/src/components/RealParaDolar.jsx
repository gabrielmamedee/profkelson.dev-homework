/*
9. Crie dois componentes: `RealParaDolar` e `DolarParaReal`. Eles recebem um valor e convertem utilizando uma taxa fixa de câmbio (ex: 1 dólar = 5 reais).
*/

const RealParaDolar = ({ valor }) => {
    const converterParaDolar = (real) => {
        return real / 5
    } 
  return (
    <>
        <h3>R${valor.toFixed(2)} é igual a ${converterParaDolar(valor).toFixed(2)}</h3>
    </>
  )
}

export default RealParaDolar