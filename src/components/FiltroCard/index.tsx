import { useDispatch, useSelector } from 'react-redux'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'

type Props = {
  legenda: string
  tipo: 'categoria' | 'status' | 'todas'
  valor?: enums.Categoria | enums.Status
}

const FiltroCard = ({ legenda, tipo, valor }: Props) => {
  const dispatch = useDispatch()

  const { filtro, contato } = useSelector((state: RootReducer) => state)

  const verificaContador = () => {
    if (tipo === 'todas') return contato.itens.length

    if (tipo === 'categoria') {
      return contato.itens.filter((c) => c.categoria === valor).length
    } else if (tipo === 'status') {
      return contato.itens.filter((c) => c.status === valor).length
    }
  }

  const verificaAtivo = () => {
    const mesmoTipo = filtro.tipo === tipo
    const mesmoValor = filtro.valor === valor

    return mesmoTipo && mesmoValor
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        tipo,
        valor
      })
    )
  }

  const contador = verificaContador()
  const ativo = verificaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
