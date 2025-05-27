/*
7. Crie um componente `StatusPedido`. Se a prop `status` for `"enviado"`, mostra "Seu pedido foi enviado! 📦". Se `"pendente"`, mostra "Seu pedido está em processamento ⏳". Se `"cancelado"`, mostra "Seu pedido foi cancelado ❌".
*/

const StatusPedido = ({ statusDoPedido }) => {
    if (statusDoPedido === "enviado") return <p>Seu pedido foi enviado! 📦</p>
    if (statusDoPedido === "pendente") return <p>Seu pedido está em processamento ⏳</p>
    if (statusDoPedido === "cancelado") return <p>Seu pedido foi cancelado ❌</p>
    return <p>Status Invalido</p>
}

export default StatusPedido