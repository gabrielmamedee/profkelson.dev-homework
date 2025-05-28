/*
8. Crie dois componentes: `MetroParaCentimetro` e `CentimetroParaMetro`. Eles recebem um valor e fazem a conversão.
*/

const MetroParaCentimetro = ({ metros }) => {
    const converterParaCentimetros = (valor) => {
        return valor * 100
    }
  return (
    <>
        <p>{metros} metro é igual a {converterParaCentimetros(metros)} centimetros.</p>
    </>
  )
}

export default MetroParaCentimetro