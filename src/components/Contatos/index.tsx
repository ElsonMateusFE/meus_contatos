import { Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'
import { useEffect, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alterarStatus } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Titulo } from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contatos = ({
  nome,
  categoria,
  status,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    setEmail(emailOriginal), setTelefone(telefoneOriginal)
  }, [emailOriginal, telefoneOriginal])

  const resetDescricoes = () => {
    setEstaEditando(false),
      setEmail(emailOriginal),
      setTelefone(telefoneOriginal)
  }

  const alterando = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      alterarStatus({
        id,
        finalizado: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          defaultChecked={status === enums.Status.OFFLINE}
          onChange={alterando}
        />
        <Titulo as="p">{nome}</Titulo>
      </label>
      <S.Tag parametro="categoria" categoria={categoria}>
        {categoria}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.BarraAcoes />
      <S.Descricao
        disabled={!estaEditando}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    categoria,
                    status,
                    email,
                    telefone,
                    id
                  })
                )
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={resetDescricoes}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contatos
