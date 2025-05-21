import React from 'react'
import HookContador from './components/HookContador'
import TodoList from './components/TodoList'
import HookMegaSena from './components/HookMegaSena'
import HookQuina from './components/HookQuina'
import Aluno from './components/Aluno'
import AlunoComFragment from './components/AlunoComFragment'

const App = () => {
  const alunos = [
    {
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      curso: 'Engenharia de Software',
      media: 6.5
    },
    {
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      curso: 'Ciência da Computação',
      media: 9.2
    },
    {
      nome: 'Pedro Santos',
      email: 'pedro.santos@example.com',
      curso: 'Análise e Desenvolvimento de Sistemas',
      media: 7.8
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
      <div>
        <h2>Lista de alunos com Fragments</h2>
        {alunos.map((aluno, index) => (
          <span key={index}><AlunoComFragment 
            nome={aluno.nome}
            email={aluno.email}
            curso={aluno.curso}
            media={aluno.media}
          /></span>
        ))}
      </div>
    </>
  )
}

export default App