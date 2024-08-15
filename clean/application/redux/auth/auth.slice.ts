import { hideModal } from '@clean/application/redux/modal/modal.slice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '@clean/application/redux/auth/initialStateAuth';
import QuantumForoUseCase from '@clean/domain/useCase/quantumForoUseCase';
import QuantumForoRepositoryImpl from '@clean/infrastructure/repositories/quantumForoRepositoryImpl';
import { handleSuccessResponse } from '@clean/application/redux/auth/handleSuccessResponse';
import { handleErrorResponse } from '@clean/application/redux/auth/handleErrorResponse';

const quantumForoRepo = new QuantumForoRepositoryImpl();
const quantumForoService = new QuantumForoUseCase(quantumForoRepo);

export const Login = createAsyncThunk(
  'auth/Login',
  async (loginData, thunkAPI) => {
    const kind = 'Login';
    try {
      // Llama a la API para autenticar al usuario
      const loginResult = await quantumForoService.login(loginData);
      let newUser = {};
      loginResult.fold(
        (err) => {
          console.log(err);
          handleErrorResponse(kind, err, thunkAPI);
        },
        (loginUser) => {
          handleSuccessResponse(kind, thunkAPI);
          const { jwt, user } = loginUser;
          window.localStorage.setItem('jwt', jwt);
          newUser = user;
        }
      );
      if (Object.keys(newUser).length !== 0) {
        return newUser;
      } else {
        return thunkAPI.rejectWithValue({ kind, error: 'Error inesperado en la autenticación' });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ kind, error: 'Error inesperado en la autenticación' });
    }
  }
);

export const ForgottenPassword = createAsyncThunk(
  'auth/ForgottenPassword',
  async (email, thunkAPI) => {
    const kind = 'ForgottenPassword';
    try {
      // Llama a la API para solicitar un cambio de contraseña
      const result = await quantumForoService.forgottenPassword(email);
      result.fold(
        (err) => {
          console.log(err);
        },
        (success) => {
          handleSuccessResponse(kind, thunkAPI);
        }
      );
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue({ kind, error: 'Error inesperado en la solicitud de cambio de contraseña' });
    }
  }
);

export const ResetPassword = createAsyncThunk(
  'auth/ResetPassword',
  async (resetData, thunkAPI) => {
    const kind = 'ResetPassword';
    try {
      // Llama a la API para resetear la contraseña
      const result = await quantumForoService.resetPassword(resetData.password, resetData.passwordConfirmation, resetData.code);
      result.fold(
        (err) => {
          console.log(err);
        },
        (success) => {
          handleSuccessResponse(kind, thunkAPI);
        }
      );
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue({ kind, error: 'Error inesperado en el reseteo de la contraseña' });
    }
  }
);

export const Logout = createAsyncThunk('auth/Logout', async (ars, thunkAPI) => {
  const kind = 'logout';
  try {
    window.localStorage.removeItem('jwt')
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
        state.userLogged = true;
        state.loadingLogin = false;
        state.userInfo = action.payload;
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
        state.userInfo = {};
      });
  },
});

const { reducer } = authSlice;
export const { changeUserLogged } = authSlice.actions;
export default reducer;
