import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.fundoBarraLateral};
  height: 100vh;
  border-right: 3px solid ${variaveis.fundoCardBarraLateral};
`
export const Filtros = styled.div`
  display: block;
  margin-top: 16px;
`
export const Campo = styled.input`
  border: none;
  margin-left: 16px;
  color: ${variaveis.textoSecundario};
  background-color: transparent;
  font-size: 20px;
  &:focus-visible {
    outline: none;
    color: ${variaveis.branco};
  }
`
export const Icon = styled.i`
  color: ${variaveis.textoSecundario};
`
export const BotaoRetornar = styled.button`
  margin-top: 24px;
  cursor: pointer;
  padding: 8px 16px;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  background-color: ${variaveis.vermelho};
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 60px rgba(300, 0, 0, 0.6);
  color: ${variaveis.branco};
  text-decoration: none;
  transition: 0.8s ease;
  border: none;
  &:hover {
    background-color: ${variaveis.fundoVermelho};
    box-shadow: none;
    transition: 0.5s ease;
  }
`
