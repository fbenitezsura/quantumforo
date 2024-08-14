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

const customerRepo = new QuantumForoRepositoryImpl();
const customerService = new QuantumForoUseCase(customerRepo);

export const preRegisterCustomer = createAsyncThunk(
  'register/preRegisterCustomer',
  async (formPreRegister: PreCreateCustomerDto, thunkAPI) => {
    const kind = 'preRegisterCustomer';
    const errorInParams = await handleValidateParams(
      kind,
      formPreRegister,
      thunkAPI
    );
    if (errorInParams) {
      return thunkAPI.rejectWithValue([]);
    }
    let processCompleted = false;
    const preCreateCustomer: PreCreateCustomerDto = {
      email: formPreRegister.email,
      identificationNumber: formPreRegister.identificationNumber,
    };
    const preRegisterResult = await customerService.PreRegisterCustomer(preCreateCustomer);
    preRegisterResult.fold(
      (err) => {
        handleErrorResponse(kind, err, thunkAPI);
        processCompleted = false;
      },
      async (preRegister) => {
        if (preRegister.message === 'Validación exitosa' && preRegister.valid) {
          thunkAPI.dispatch(setpreRegisterForm({ ...formPreRegister }));
          thunkAPI.dispatch(nextStep());
        }
        if (!preRegister.valid) {
          await thunkAPI.dispatch(
            showPopUp({
              type: 'ERROR',
              popUpProps: {
                title: 'Error',
                text: preRegister.message,
                timer: 5000,
              },
            })
          );
        }
        processCompleted = false;
        thunkAPI.rejectWithValue(false);
      }
    );
    return processCompleted || thunkAPI.rejectWithValue(false);
  }
);

export const registerCustomer = createAsyncThunk(
  'register/registerCustomer',
  async (formRegister: CreateCustomerDto, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState();
      const { Register, Currency, Fp } = state;
      const { code } = Currency.currency;
      const RegisterRequest: PreCreateCustomerDto & CreateCustomerDto = {
        ...Register.preRegisterForm,
        ...formRegister,
        currency: code,
        needValidationPhone: Register.needValidationPhone,
        selectCountry: Fp.countryDetected,
      };
      const kind = 'registerCustomer';
      const errorInParams = await handleValidateParams(
        kind,
        RegisterRequest,
        thunkAPI
      );
      if (errorInParams) {
        return thunkAPI.rejectWithValue([]);
      }
      let processCompleted = false;
      const registerResult: any = await customerService.RegisterCustomer(RegisterRequest);
      registerResult.fold(
        (err) => {
          handleErrorResponse(kind, err, thunkAPI);
          processCompleted = false;
        },
        (register) => {
          try {
            const allInfoRegister = {
              ...register,
              ...RegisterRequest,
              currency: code,
            };
            handleSuccessResponse(kind, thunkAPI);
            setTimeout(() => {
              thunkAPI.dispatch(Login({}));
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
    nextStep: (state) => {
      state.currentStep = state.currentStep + 1;
    },
    previousStep: (state) => {
      state.currentStep = state.currentStep - 1;
    },
    setpreRegisterForm: (state, action: PayloadAction<PreCreateCustomerDto>) => {
      state.preRegisterForm = {
        ...action.payload,
      };
    },
    setValidatePhoneResult: (state, action) => {
      state.preRegisterForm = {
        ...state.preRegisterForm,
        sendCodeSMS: action.payload.success,
      };
    },
    setCheckValidatePhoneResult: (state, action) => {
      state.preRegisterForm = {
        ...state.preRegisterForm,
        checkPhone: action.payload.success,
      };
    },
    updatepreRegisterForm: (state, action) => {
      state.preRegisterForm = {
        ...state.preRegisterForm,
        ...action.payload,
      };
    },
    setNeedPhoneValidation: (state, action) => {
      state.needValidationPhone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(preRegisterCustomer.pending, (state) => {
        state.loadingPreRegister = true;
        state.preRegisterCompleted = false;
      })
      .addCase(preRegisterCustomer.fulfilled, (state) => {
        state.loadingPreRegister = false;
        state.preRegisterCompleted = true;
        state.currentStep = 2;
      })
      .addCase(preRegisterCustomer.rejected, (state) => {
        state.loadingPreRegister = false;
        state.preRegisterCompleted = false;
      })
      .addCase(registerCustomer.pending, (state) => {
        state.currentStep = 3;
        state.loadingRegister = true;
        state.registerCompleted = false;
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.loadingRegister = false;
        state.registerCompleted = action.payload;
      })
      .addCase(registerCustomer.rejected, (state) => {
        state.currentStep = 2;
        state.loadingRegister = false;
        state.registerCompleted = false;
      });
  },
});

const { reducer } = registerSlice;

export const {
  resetRegister,
  nextStep,
  previousStep,
  setpreRegisterForm,
  setValidatePhoneResult,
  setCheckValidatePhoneResult,
  setNeedPhoneValidation,
} = registerSlice.actions;

export default reducer;
