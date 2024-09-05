import { hideModal } from '@clean/application/redux/modal/modal.slice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '@clean/application/redux/reviews/initialStateReview';
import QuantumForoUseCase from '@clean/domain/useCase/quantumForoUseCase';
import QuantumForoRepositoryImpl from '@clean/infrastructure/repositories/quantumForoRepositoryImpl';
import { handleSuccessResponse } from '@clean/application/redux/reviews/handleSuccessResponse';
import { handleErrorResponse } from '@clean/application/redux/reviews/handleErrorResponse';

const quantumForoRepo = new QuantumForoRepositoryImpl();
const quantumForoService = new QuantumForoUseCase(quantumForoRepo);

export const getReview = createAsyncThunk(
  'reviews/getReview',
  async ({ storeId }, thunkAPI) => {
    const kind = 'getReview';
    try {
      let reviews = []
      const reviewResult = await quantumForoService.getReviews(storeId);
      reviewResult.fold(
        (err) => {
          console.log(err);
          handleErrorResponse(kind, err, thunkAPI);
        },
        (reviewsAll) => {
          reviews = reviewsAll
        }
      );
      return reviews;
    } catch (error) {
      return thunkAPI.rejectWithValue({ kind, error: 'Error inesperado en la obtencion de review' });
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (payload, thunkAPI) => {
    let processCompleted = false;
    const kind = 'addReview';
    try {
      const reviewResult = await quantumForoService.addReview(payload)
      reviewResult.fold(
        (err) => {
          console.log(err);
          handleErrorResponse(kind, err, thunkAPI);
        },
        (newReview) => {
          handleSuccessResponse(kind,thunkAPI);
          thunkAPI.dispatch(getReview({ storeId: payload.data.store.connect[0].id }));
          thunkAPI.dispatch(checkCanAddReview({ storeId: payload.data.store.connect[0].id, userId: payload.data.user.connect[0].id }));
        }
      );

    } catch (error) {
      return thunkAPI.rejectWithValue({ kind, error: 'Error inesperado en la creacion' });
    }
  }
);

export const checkCanAddReview = createAsyncThunk(
  'reviews/checkCanAddReview',
  async ({ storeId, userId }, thunkAPI) => {
    const kind = 'checkCanAddReview';
    try {
      let canAddReview = false;
      const reviewResult = await quantumForoService.checkCanAddReview(storeId, userId)
      reviewResult.fold(
        (err) => {
          console.log(err);
          handleErrorResponse(kind, err, thunkAPI);
        },
        (canAdd) => {
          console.log(canAdd);
          //Si posee mas de 1 review no puede agregar porque ya comento.
          canAddReview = canAdd.data.length > 0 ? false : true;
          console.log('canAddReview',canAddReview)
        }
      );
      return canAddReview;
    } catch (error) {
      return thunkAPI.rejectWithValue({ kind, error: 'Error inesperado en la obtencion de review' });
    }
  }
);

export const reviewsSlice = createSlice({
  name: 'Reviews',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReview.fulfilled, (state, action) => {
        state.loadingGetReviews = false;
        state.reviewStore = action.payload;
      })
      .addCase(getReview.pending, (state, action) => {
        state.loadingGetReviews = true;
      })
      .addCase(getReview.rejected, (state, action) => {
        state.loadingGetReviews = false;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.loadingAddReview = false;
      })
      .addCase(addReview.pending, (state, action) => {
        state.loadingAddReview = true;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.loadingAddReview = false;
      })
      .addCase(checkCanAddReview.fulfilled, (state, action) => {
        state.canAddReview = action.payload;
        state.loadingCanReview = false;
      })
      .addCase(checkCanAddReview.pending, (state, action) => {
        state.loadingCanReview = true;
      })
      .addCase(checkCanAddReview.rejected, (state, action) => {
        state.loadingCanReview = false;
      })
  },
});

const { reducer } = reviewsSlice;

export const { } = reviewsSlice.actions;

export default reducer;
