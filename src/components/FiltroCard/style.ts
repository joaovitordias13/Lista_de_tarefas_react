import styled from 'styled-components'

import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  width: 240px;
  height: 50px;
  background-color: ${variaveis.fundoCardBarraLateral};
  border-radius: 8px;
  text-align: center;
  margin: 16px 0;
  transition: 0.5s ease;
`

export const CardPendente = styled(Card)`
  border: 2px solid
    ${(props) =>
      props.ativo ? `${variaveis.laranja}` : `${variaveis.fundoCinza}`};
`
export const CardConcluido = styled(Card)`
  border: 2px solid
    ${(props) =>
      props.ativo ? `${variaveis.verde}` : `${variaveis.fundoCinza}`};
`
export const CardUrgente = styled(Card)`
  border: 2px solid
    ${(props) =>
      props.ativo ? `${variaveis.vermelho}` : `${variaveis.fundoCinza}`};
`
export const CardTodas = styled(Card)`
  border: 2px solid
    ${(props) =>
      props.ativo ? `${variaveis.azul}` : `${variaveis.fundoCinza}`};
`
export const ContadorPendentes = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: ${variaveis.fundoLaranja};
  color: ${variaveis.laranja};
`
export const ContadorConcluidos = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: ${variaveis.fundoVerde};
  color: ${variaveis.verde};
`
export const ContadorUrgente = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: ${variaveis.fundoVermelho};
  color: ${variaveis.vermelho};
`
export const ContadorTodas = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: ${variaveis.fundoAzul};
  color: ${variaveis.azul};
`
export const Label = styled.span`
  font-size: 18px;
  color: ${variaveis.branco};
  font-weight: bold;
`
