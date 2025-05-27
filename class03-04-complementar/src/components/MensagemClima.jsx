/*
5. Crie um componente chamado `MensagemClima`. Se a prop `clima` for "sol", renderiza "Dia de praia ☀️". Se for "chuva", renderiza "Leve o guarda-chuva ☔️".
*/

const MensagemClima = ({ clima }) => {
  if (clima === "sol") return <p>Dia de praia ☀️</p>;
  if (clima === "chuva") return <p>Leve o guarda-chuva ☔️</p>;
  return <p>Clima não informado</p>;
};

export default MensagemClima;