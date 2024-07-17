import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContadorDeTarefas = styled.h4`
  color: ${variaveis.branco};
  font-weight: normal;
  margin: 16px 0 0 40px;
  @media (max-width: 767px) {
    margin: 30px 0 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    margin: 30px 0 0 24px;
  }
`

export const Grid = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 767px) {
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`
