import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const BotaoNewTask = styled(Link)`
  padding: 8px;
  display: inline-block;
  font-weight: bold;
  background-color: ${variaveis.verde};
  border-radius: 8px;
  text-align: center;
  color: ${variaveis.branco};
  box-shadow: 0 0 60px rgba(0, 200, 0, 0.6);
  text-decoration: none;
  transition: 0.6s ease;
  &:hover {
    background-color: ${variaveis.fundoVerde};
    box-shadow: none;
    transition: 0.8s ease;
  }
`
