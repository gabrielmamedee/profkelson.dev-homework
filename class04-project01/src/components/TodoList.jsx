import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    
    const [listaDeTarefas, setListaDeTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")
    
    const adicionarTarefa = () => {
        setListaDeTarefas([...listaDeTarefas , novaTarefa])
        setNovaTarefa("")
    }

  return (
    <>
        <h2>Lista de Tarefas</h2>
        <input 
            type="text" 
            placeholder='Digite uma nova tarefa...'
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        {
            listaDeTarefas.map((tarefa, index) => (
                <p key={index}>{tarefa}</p>
            ))
        }

    </>
  )
}

export default TodoList