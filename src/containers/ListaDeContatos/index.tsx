import { useSelector } from 'react-redux'
import Contatos from '../../components/Contatos'
import { MainContainer } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const { termo, tipo, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (c) => c.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (tipo === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter(
          (c) => c.categoria === valor
        )
      } else if (tipo === 'status') {
        contatosFiltrados = contatosFiltrados.filter((c) => c.status === valor)
      }
    }
    return contatosFiltrados
  }

  const contatos = filtrarContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contatos
              id={c.id}
              nome={c.nome}
              categoria={c.categoria}
              status={c.status}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
