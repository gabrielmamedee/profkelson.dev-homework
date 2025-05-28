/*
8. Crie dois componentes: `MetroParaCentimetro` e `CentimetroParaMetro`. Eles recebem um valor e fazem a conversão.
*/

const CentimetroParaMetro = ({ centimetros }) => {
    const converterParaMetro = (valor) => {
        return valor / 100
    }
  return (
    <>
        <h3>{centimetros} cm é igual a {converterParaMetro(centimetros)} metros.</h3>
    </>
  )
}

export default CentimetroParaMetro