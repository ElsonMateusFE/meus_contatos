import * as enums from '../../utils/enums/Contato'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  tipo: 'categoria' | 'status' | 'todas'
  valor?: enums.Categoria | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  tipo: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.tipo = action.payload.tipo
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
