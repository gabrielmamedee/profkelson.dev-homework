/*
13. Crie um componente `DiaDaSemana` que recebe a prop `dia` e, de acordo com o dia, muda a cor de fundo e exibe uma mensagem.
- Segunda → azul → "Começo da semana!"
- Sexta → verde → "Sextou!"
- Domingo → vermelho → "Dia de descanso!"
*/
import styles from './DiaDaSemana.module.css'

const DiaDaSemana = ({ dia }) => {
    const renderizaMensagen = (diaDaSemana) => {
        if (diaDaSemana === 'Segunda') {
            return "Começo da semana!"
        } else if (diaDaSemana === 'Sexta') {
            return "Sextou!"
        } else if (diaDaSemana === 'Domingo') {
            return "Dia de descanso!"
        }
    }

    const renderizaStyle = (diaDaSemana) => {
        if (diaDaSemana === 'Segunda') {
            return styles.segunda
        } else if (diaDaSemana === 'Sexta') {
            return styles.sexta
        } else if (diaDaSemana === 'Domingo') {
            return styles.domingo
        }
    }
  return (
    <div className={renderizaStyle(dia)}>
        {renderizaMensagen(dia)}
    </div>
  )
}

export default DiaDaSemana