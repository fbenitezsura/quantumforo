import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from '@clean/application/redux/store/initialStateStore';
import QuantumForoUseCase from '@clean/domain/useCase/quantumForoUseCase';
import QuantumForoRepositoryImpl from '@clean/infrastructure/repositories/quantumForoRepositoryImpl';

const quantumRepo = new QuantumForoRepositoryImpl();
const quantumService = new QuantumForoUseCase(quantumRepo);
// Example of an async thunk action
export const getAllStore = createAsyncThunk(
  'storeSlice/getAllStore',
  async (arg, thunkAPI) => {
    const kind = 'getAllStore';
    let processCompleted;
    const preRegisterResult = await quantumService.getAllStore();
    preRegisterResult.fold(
      (err) => {
        processCompleted = false;
        return [];
      },
      (allStore) => {
        processCompleted = true;
        return allStore;
      }
    );
  }
);

export const storeSlice = createSlice({
  name: 'storeSlice',
  initialState,
  reducers: {
    // Your synchronous reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStore.pending, (state) => {
        state.loadingGetStore = true;
      })
      .addCase(getAllStore.fulfilled, (state, action) => {
        state.loadingGetStore = false;
        state.listStore = action.payload;
      })
      .addCase(getAllStore.rejected, (state, action) => {
        state.loadingGetStore = false; 
      });
  },
});

export default storeSlice.reducer;
