import { hideModal } from '@clean/application/redux/modal/modal.slice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '@clean/application/redux/auth/initialStateAuth';

export const Login = createAsyncThunk(
  'auth/Login',
  async ({ url = '' }: { url?: string }, thunkAPI) => {
    const kind = 'Login';
    return true;
  }
);

export const Logout = createAsyncThunk('auth/Logout', async (ars, thunkAPI) => {
  const kind = 'logout';
  try {
    setTimeout(() => {
      thunkAPI.dispatch(hideModal());
    }, 1); // Nasty Hack
  } catch (e) {
    console.log(e);
  }

  return true;
});

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    changeUserLogged: (state, action) => {
      state.userLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.fulfilled, (state, action) => {
        state.loadingLogin = false;
      })
      .addCase(Login.pending, (state, action) => {
        state.loadingLogin = true;
      })
      .addCase(Login.rejected, (state, action) => {
        state.loadingLogin = false;
        state.userLogged = false;
      })
      .addCase(Logout.fulfilled, (state, action) => {
        state.userLogged = false;
      });
  },
});

const { reducer } = authSlice;
export const { changeUserLogged } = authSlice.actions;
export default reducer;
