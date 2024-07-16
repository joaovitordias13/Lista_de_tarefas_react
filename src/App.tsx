import ListaTelefonica from './containers/ListaTelefonica'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ListaTelefonica />
      </Container>
    </>
  )
}

export default App
