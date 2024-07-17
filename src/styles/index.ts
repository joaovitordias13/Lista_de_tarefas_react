import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`

export const Main = styled.main`
  background-color: ${variaveis.fundoTelaTarefas};
  height: 100vh;
  overflow-y: scroll;
`
export const TituloLista = styled.h2`
  font-size: 32px;
  color: ${variaveis.branco};
`

export const ContainerCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 50px;
  @media (max-width: 767px) {
    margin: 30px 20px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    margin: 30px 24px;
  }
`

export default EstiloGlobal
