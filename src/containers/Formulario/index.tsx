import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/Tarefa'
import { Main, TituloLista, ContainerCabecalho } from '../../styles/index'
import * as S from './style'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <Main>
      <ContainerCabecalho>
        <TituloLista>Nova Tarefa</TituloLista>
      </ContainerCabecalho>
      <S.Form onSubmit={cadastrarTarefa}>
        <S.Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <S.CampoDescricao
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          maxLength={572}
          placeholder="Descrição da tarefa"
        />
        <S.Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <S.Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <S.Botao type="submit">Adicionar Tarefa</S.Botao>
      </S.Form>
    </Main>
  )
}
export default Formulario
