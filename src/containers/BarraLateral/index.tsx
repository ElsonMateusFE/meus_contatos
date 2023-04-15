import * as S from './styles'
import FiltroCard from '../../components/FiltroCard'
import { Campo } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            tipo="status"
            valor={enums.Status.ONLINE}
            legenda="online"
          />
          <FiltroCard
            tipo="status"
            valor={enums.Status.OFFLINE}
            legenda="offline"
          />
          <FiltroCard
            valor={enums.Categoria.FAMILIA}
            tipo="categoria"
            legenda="família"
          />
          <FiltroCard
            valor={enums.Categoria.AMIGO}
            tipo="categoria"
            legenda="amigo"
          />
          <FiltroCard
            valor={enums.Categoria.TRABALHO}
            tipo="categoria"
            legenda="trabalho"
          />
          <FiltroCard tipo="todas" legenda="todos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
