import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    list-style: none;
    box-sizing:  border-box;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 20px 40px 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Campo = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #6666666;
  border-color: #666666;
  width: 100%;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
