/*
14. Crie um componente `TemperaturaEstacao` que recebe a prop `estacao` e muda a cor de fundo:
- Verão → laranja
- Inverno → azul claro
- Outono → marrom
- Primavera → verde
*/
import styles from './TemperaturaEstacao.module.css'

const TemperaturaEstacao = ({ estacao }) => {
    const renderizaStyle = (estacaoDoAno) => {
        if (estacaoDoAno === 'Verão') {
            return styles.verao
        } else if (estacaoDoAno === 'Inverno') {
            return styles.inverno
        } else if (estacaoDoAno === 'Outono') {
            return styles.outono
        } else if (estacaoDoAno === 'Primavera') {
            return styles.primavera
        }
    }
  return (
    <div className={renderizaStyle(estacao)}>TemperaturaEstacao</div>
  )
}

export default TemperaturaEstacao