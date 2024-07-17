import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import { useDispatch } from 'react-redux'

import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'

import * as enums from '../../utils/enums/Tarefa'

import TarefaClass from '../../models/tarefa'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      {estaEditando && <em>Editando: </em>}
      <S.Titulo>
        <label htmlFor={titulo}>
          <input
            type="checkbox"
            id={titulo}
            checked={status === enums.Status.CONCLUIDO}
            onChange={alteraStatusTarefa}
          />
          {titulo}
        </label>
      </S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.SubTitulo>Detalhes:</S.SubTitulo>
      <S.Descricao
        disabled={!estaEditando}
        maxLength={572}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              <i className="bi bi-plus-lg" title="Salvar"></i>
            </S.BotaoSalvar>
            <S.BotaoDelete onClick={cancelarEdicao}>
              <i className="bi bi-x-lg" title="Cancelar"></i>
            </S.BotaoDelete>
          </>
        ) : (
          <>
            <S.BotaoEdit onClick={() => setEstaEditando(true)}>
              <i className="bi bi-pencil-fill" title="Editar"></i>
            </S.BotaoEdit>
            <S.BotaoDelete onClick={() => dispatch(remover(id))}>
              <i className="bi bi-trash3-fill" title="Deletar"></i>
            </S.BotaoDelete>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
