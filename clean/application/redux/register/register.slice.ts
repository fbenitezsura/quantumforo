import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';
import { handleErrorResponse } from '@clean/application/redux/register/handleErrorResponse';
import { handleSuccessResponse } from '@clean/application/redux/register/handleSuccessResponse';
import { handleValidateParams } from '@clean/application/redux/register/handleValidateParams';
import QuantumForoUseCase from '@clean/domain/useCase/quantumForoUseCase';
import QuantumForoRepositoryImpl from '@clean/infrastructure/repositories/quantumForoRepositoryImpl';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Login } from '@clean/application/redux/auth/auth.slice';
import { PreCreateCustomerDto } from '@clean/domain/dtos/customer/precreate-customer.dto';
import { initialState } from '@clean/application/redux/register/initialStateRegister';
import { CreateCustomerDto } from '@clean/domain/dtos/customer/create-customer.dto';

const quantumForoRepo = new QuantumForoRepositoryImpl();
const quantumForoService = new QuantumForoUseCase(quantumForoRepo);

export const registerCustomer = createAsyncThunk(
  'register/registerCustomer',
  async (registerData: any, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState();
      const kind = 'registerCustomer';
      let processCompleted = false;
      const registerResult: any = await quantumForoService.registerUser(registerData);
      registerResult.fold(
        (err) => {
          console.log(err);
          handleErrorResponse(kind, err, thunkAPI);
          processCompleted = false;
        },
        (register) => {
          try {
            setTimeout(() => {
              console.log('registro exitoso',register)
              //thunkAPI.dispatch(Login({}));
            }, 5000);
          } catch (e) {
            console.log(e);
          }
          processCompleted = true;
        }
      );
      return processCompleted ? processCompleted : thunkAPI.rejectWithValue(false);
    } catch (e) {
      console.log(e);
    }
  }
);

export const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {
    resetRegister: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCustomer.pending, (state) => {
        state.loadingRegister = true;
        state.registerCompleted = false;
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.loadingRegister = false;
        state.registerCompleted = action.payload;
      })
      .addCase(registerCustomer.rejected, (state) => {
        state.loadingRegister = false;
        state.registerCompleted = false;
      });
  },
});

const { reducer } = registerSlice;

export const {
  resetRegister,
} = registerSlice.actions;

export default reducer;
