
const StyleInlineDinamico = ({ ativo }) => {
  return (
    <div style={{
        backgroundColor: ativo ? 'green' : 'grey',
        color: ativo ? '#fff' : 'black'
    }}>StyleInlineDinamico</div>
  )
}

export default StyleInlineDinamico