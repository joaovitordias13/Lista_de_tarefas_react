import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-image: url('./img/fundo.avif');
  background-position: center;
  background-size: cover;
  font-family: Roboto, sans-serif;
`

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export default EstiloGlobal
