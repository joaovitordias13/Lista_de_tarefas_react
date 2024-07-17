import { useDispatch, useSelector } from 'react-redux'
import {
  FiltroCardPendente,
  FiltroCardConcluido,
  FiltroCardUrgente,
  FiltroCardTodas
} from '../../components/FiltroCard'
import { useNavigate } from 'react-router-dom'

import * as S from './style'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Icon className="bi bi-search"></S.Icon>
            <S.Campo
              type="text"
              placeholder="Buscar..."
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCardPendente
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="Pendentes"
              />
              <FiltroCardConcluido
                valor={enums.Status.CONCLUIDO}
                criterio="status"
                legenda="Concluidas"
              />
              <FiltroCardUrgente
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="Urgente"
              />
              <FiltroCardTodas criterio="todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <S.BotaoRetornar onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </S.BotaoRetornar>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
