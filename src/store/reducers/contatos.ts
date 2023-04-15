import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Pai',
      categoria: enums.Categoria.FAMILIA,
      status: enums.Status.OFFLINE,
      email: 'meupai@gamil.com',
      telefone: '11 12345-1234',
      id: 1
    },
    {
      nome: 'Chefe',
      categoria: enums.Categoria.TRABALHO,
      status: enums.Status.ONLINE,
      email: 'chefe@gamil.com',
      telefone: '11 12345-1234',
      id: 2
    },
    {
      nome: 'Charles',
      categoria: enums.Categoria.AMIGO,
      status: enums.Status.ONLINE,
      email: 'meupai@gamil.com',
      telefone: '11 12345-1234',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (c) => c.nome.toLowerCase() === action.payload.nome
      )

      if (contatoJaExiste) {
        alert('Contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novoContato)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].status = action.payload.finalizado
          ? enums.Status.OFFLINE
          : enums.Status.ONLINE
      }
    }
  }
})

export const { remover, editar, cadastrar, alterarStatus } =
  contatosSlice.actions
export default contatosSlice.reducer
