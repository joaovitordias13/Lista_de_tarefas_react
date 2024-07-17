import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Campo = styled.input`
  border: 2px solid ${variaveis.textoSecundario};
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 32px;
  color: ${variaveis.branco};
  background-color: transparent;
  font-size: 20px;
  transition: 0.5s ease;
  width: 100%;
  font-weight: bold;
  &:focus-visible {
    outline: none;
    border: 2px solid ${variaveis.fundoVerde};
    color: ${variaveis.verde};
    transition: 0.5s ease;
  }
`
export const CampoDescricao = styled.textarea`
  border: 2px solid ${variaveis.textoSecundario};
  padding: 8px;
  color: ${variaveis.textoSecundario};
  background-color: transparent;
  font-size: 16px;
  border-radius: 8px;
  transition: 0.5s ease;
  resize: none;
  width: 100%;
  height: 160px;
  &:focus-visible {
    outline: none;
    border: 2px solid ${variaveis.fundoVerde};
    color: ${variaveis.branco};
    transition: 0.5s ease;
  }
`
export const Form = styled.form`
  display: block;
  margin: 0 auto;
  max-width: 900px;
`
export const Opcoes = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${variaveis.branco};

  p {
    margin-bottom: 8px;
    font-size: 18px;
  }

  label {
    margin-right: 20px;
  }
`
export const Botao = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  background-color: ${variaveis.fundoVerde};
  border-radius: 8px;
  text-align: center;
  color: ${variaveis.branco};
  text-decoration: none;
  transition: 0.6s ease;
  border: none;
  &:hover {
    background-color: ${variaveis.verde};
    box-shadow: 0 0 60px rgba(0, 200, 0, 0.6);
    transition: 0.8s ease;
  }
`
export const Opcao = styled.div`
  display: inline;
`
