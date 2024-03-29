import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'Ver aula 3 EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Fazer Academia',
    descricao: 'Treino ABC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar cartão de crédito',
    descricao: 'Nubank',
    prioridade: 'urgente',
    status: 'concluido'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas maracadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
