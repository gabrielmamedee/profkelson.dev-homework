/**
 * 20. Crie um simulador de postagem chamado `PostarComentario`. Campos:
- Nome
- Comentário

Ao enviar, o comentário deve ser exibido abaixo do formulário na própria tela (não no console).
 */
import { useState } from "react"
import { Button, Card, Form } from "react-bootstrap"

const PostarComentario = () => {
    const [nome, setNome] = useState('')
    const [textoComentario, setTextoComentario] = useState('')
    const [comentarios, setComentarios] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        const valores = {
            nome: nome,
            textoComentario: textoComentario
        }

        setComentarios(comentariosAnteriores => [valores, ...comentariosAnteriores])

        setNome('')
        setTextoComentario('')
    }
  return (
    <div>
        <h1>Postar Comentario</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>nome</Form.Label>
                <Form.Control
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    value={textoComentario}
                    onChange={(e) => setTextoComentario(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">Enviar</Button>
        </Form>
        <br />
        <hr />
        <br />
        <div>
            {comentarios.map((comentario, index) => (
                <Card key={index} className="mb-4">
                    <Card.Body>{comentario.textoComentario}</Card.Body>
                    <Card.Footer>{comentario.nome}</Card.Footer>
                </Card>
            ))}
        </div>
    </div>

  )
}

export default PostarComentario