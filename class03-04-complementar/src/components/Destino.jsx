/* 
6. Crie um componente `Destino` com uma função `mostrarDestino(pais)`. Se `pais` for "BR", retorna `<h1>Brasil</h1>`. Senão, retorna `<h2>Exterior</h2>`. Use essa função dentro do JSX duas vezes.
*/

const Destino = ({ pais }) => {

    const mostrarDestino = (paisDeDestino) => {
        if (paisDeDestino === "BR") {
            return <h1>Brasil</h1>
        }
        return <h2>Exterior</h2>
    }
  return (
    <>
        {mostrarDestino(pais)}
    </>
  )
}

export default Destino