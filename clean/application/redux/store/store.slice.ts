import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
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
    try {
      const state = thunkAPI.getState() as { storeSlice: typeof initialState };
      const selectedCategory = state.Store.categorySelected; 
      const storeResult = await quantumService.getAllStore(selectedCategory);
      let result;
      storeResult.fold(
        (err) => {
          console.log(err)
          thunkAPI.rejectWithValue({ kind, error: err.message });
          result = [];
        },
        (allStore) => {
          result = allStore;
        }
      );

      return result;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue({ kind, error: (error as Error).message });
    }
  }
);

export const searchStore = createAsyncThunk(
  'storeSlice/searchStore',
  async (searchParams: any, thunkAPI) => {
    const kind = 'searchStore';
    try {
      console.log(searchParams)
      const storeResult = await quantumService.searchStore(searchParams);
      let result;
      storeResult.fold(
        (err) => {
          console.log(err)
          thunkAPI.rejectWithValue({ kind, error: err.message });
          result = [];
        },
        (allStore) => {
          console.log('aca tenemos todo los all Store', allStore)
          result = allStore;
        }
      );

      return result;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue({ kind, error: (error as Error).message });
    }
  }
);

export const storeSlice = createSlice({
  name: 'storeSlice',
  initialState,
  reducers: {
    setCategorySelected: (state, action: PayloadAction<string>) => {
      state.categorySelected = action.payload;
    },
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
      })
      .addCase(searchStore.pending, (state) => {
        state.loadingSearchStore = true;
      })
      .addCase(searchStore.fulfilled, (state, action) => {
        state.loadingSearchStore = false;
        state.listSearchStore = action.payload;
      })
      .addCase(searchStore.rejected, (state, action) => {
        state.loadingSearchStore = false; 
      });
  },
});

export const { setCategorySelected } = storeSlice.actions;

export default storeSlice.reducer;
