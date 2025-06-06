/**
 * 18. Crie um componente `FormularioDeFeedback` com os campos:
- Nome
- Feedback (textarea)
- Botão "Enviar"

Ao enviar, exibir o JSON no console com os dados preenchidos.
 */
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'

const FormularioDeFeedback = () => {
    const [nome, setNome] = useState('')
    const [feedback, setFeedback] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const valores = {
            nome: nome,
            feedback: feedback
        }

        console.log(valores)

        setNome('')
        setFeedback('')
    }

  return (
    <>
        <h1>Formulario De Feedback</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-4'>
                <Form.Label>Nome</Form.Label>
                <Form.Control 
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required 
                />
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                    as='textarea'
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                />

            </Form.Group>
            <Button variant='primary' type='submit' className='mb-4'>Enviar</Button>
        </Form>
    </>
  )
}

export default FormularioDeFeedback