import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.TRABALHO)

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        categoria,
        status: enums.Status.OFFLINE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Cadastrar novo contato</Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <Campo
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Campo
          as="textarea"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Campo
          as="textarea"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <S.Opcoes>
          <p>Categoria</p>
          {Object.values(enums.Categoria).map((categoria) => (
            <S.Opcao key={categoria}>
              <input
                type="radio"
                id={categoria}
                name="categoria"
                value={categoria}
                defaultChecked={categoria === enums.Categoria.TRABALHO}
                onChange={(e) =>
                  setCategoria(e.target.value as enums.Categoria)
                }
              />
              <label htmlFor={categoria}>{categoria}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <BotaoSalvar>Cadastrar</BotaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
