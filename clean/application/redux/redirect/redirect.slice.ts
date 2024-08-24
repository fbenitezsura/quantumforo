import { createSlice } from '@reduxjs/toolkit';

interface RedirectState {
  currentPath: string | null;
  pendingRedirect: Object | null;
}

const initialState: RedirectState = {
  currentPath: null,
  pendingRedirect: {
    redirectTo: null, // si no es nulo, existe un path pendiente
    credentials: false, // por si el redirect necesita estar logeado previamente para realizarlo
  },
};

export const redirectSlice = createSlice({
  name: 'redirectSlice',
  initialState,
  reducers: {
    resetRedirect: () => initialState,
    changeCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
    changePendingRedirect: (state, action) => {
      state.pendingRedirect = action.payload;
    },
  },
});

const { reducer } = redirectSlice;

export const { resetRedirect, changeCurrentPath, changePendingRedirect } =
  redirectSlice.actions;

export default reducer;
