import React from 'react'
import HookContador from './components/HookContador'
import TodoList from './components/TodoList'
import HookMegaSena from './components/HookMegaSena'
import HookQuina from './components/HookQuina'
import Aluno from './components/Aluno'

const App = () => {
  const alunos = [
    {
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      curso: 'Engenharia de Software'
    },
    {
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      curso: 'Ciência da Computação'
    },
    {
      nome: 'Pedro Santos',
      email: 'pedro.santos@example.com',
      curso: 'Análise e Desenvolvimento de Sistemas'
    }
  ];
  return (
    <>
      <HookContador/>
      <TodoList/>
      <HookMegaSena/>
      <HookQuina/>
      <div>
        <h2>Lista de alunos</h2>
        {alunos.map((aluno, index) => (
          <Aluno 
            nome={aluno.nome} 
            email={aluno.email} 
            curso={aluno.curso} 
            key={index} 
          />
        ))}
      </div>
    </>
  )
}

export default App