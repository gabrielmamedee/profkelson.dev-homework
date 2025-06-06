/**
 * 19. Crie um componente `FormularioDeLogin` com campos:
- Email
- Senha
 */
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const FormularioDeLogin = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const valores = {
            email: email,
            senha: senha
        }

        console.log(valores)

        setEmail('')
        setSenha('')
    }
  return (
    <div>
        <h1>FormularioDeLogin</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" variant='primary'>Entrar</Button>
        </Form>
    </div>
  )
}

export default FormularioDeLogin