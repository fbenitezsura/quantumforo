import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { initialState } from '@clean/application/redux/notes/initialStateNotes';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);

export const getLastNotes = createAsyncThunk(
  'notes/getLastNotes',
  async (args, thunkAPI) => {
    const state: any = thunkAPI.getState();
    let notes: Array<any> = [];
    const { countryDetected } = state.GeoLocation;
    const { lastNotes } = state.Notes;
    const resultNotes = await layoutService.GetLastNote(countryDetected, {
      start: lastNotes.filterOffset,
      limit: lastNotes.filterLimit
    });
    resultNotes.fold(
      (err) => {
        notes = [];
      },
      (allNotes) => {
        notes = allNotes;
      }
    );

    return notes;
  }
);

export const getNotesByCategory = createAsyncThunk(
  'notes/getNotesByCategory',
  async (categoryId: string, thunkAPI) => {
    const state: any = thunkAPI.getState();
    let notes: Array<any> = [];
    const { countryDetected } = state.GeoLocation;
    const { notesForCategory } = state.Notes;
    const resultNotes = await layoutService.GetNotesByCategory(countryDetected, categoryId, {
      start: notesForCategory.filterOffset,
      limit: notesForCategory.filterLimit
    });
    resultNotes.fold(
      (err) => {
        notes = [];
      },
      (allNotes) => {
        notes = allNotes;
      }
    );
    return notes;
  }
);

export const searchNoteByTitle = createAsyncThunk(
  'notes/searchNoteByTitle',
  async (searchTitle: string, thunkAPI) => {
    const state: any = thunkAPI.getState();
    let notes: Array<any> = [];
    const { countryDetected } = state.GeoLocation;
    const resultNotes = await layoutService.GetNotesByTitle(countryDetected, searchTitle);
    resultNotes.fold(
      (err) => {
        notes = [];
      },
      (allNotes) => {
        notes = allNotes;
      }
    );
    return notes;
  }
);

export const notesSlice = createSlice({
  name: 'notesSlice',
  initialState,
  reducers: {
    resetNotes: () => initialState,
    resetPaginationLastNote: () => initialState,
    changePage: (state, action) => {
      state.lastNotes.page = action.payload;
      state.lastNotes.filterOffset = (action.payload) * state.lastNotes.filterLimit;
    },
    changePageNoteForCategory: (state, action) => {
      state.notesForCategory.page = action.payload;
      state.notesForCategory.filterOffset = (action.payload) * state.notesForCategory.filterLimit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLastNotes.pending, (state, action) => {
        state.lastNotes.loading = true;
      })
      .addCase(getLastNotes.fulfilled, (state, action) => {
        state.lastNotes.data = action.payload.data;
        state.lastNotes.loading = false;
        state.lastNotes.maxPage = Math.ceil(action.payload.pagination.total / state.lastNotes.filterLimit);
      })
      .addCase(getLastNotes.rejected, (state, action) => {
        state.lastNotes.loading = false;
        state.error = action.error.message;
      })
      .addCase(getNotesByCategory.pending, (state, action) => {
        state.notesForCategory.loading = true;
      })
      .addCase(getNotesByCategory.fulfilled, (state, action) => {
        state.notesForCategory.data = action.payload;
        state.notesForCategory.loading = false;
      })
      .addCase(getNotesByCategory.rejected, (state, action) => {
        state.notesForCategory.loading = false;
      })
      .addCase(searchNoteByTitle.pending, (state, action) => {
        state.searchNotes.loading = true;
      })
      .addCase(searchNoteByTitle.fulfilled, (state, action) => {
        state.searchNotes.data = action.payload;
        state.searchNotes.loading = false;
      })
      .addCase(searchNoteByTitle.rejected, (state, action) => {
        state.searchNotes.loading = false;
      });
  },
});

const { reducer } = notesSlice;

export const {
  resetPaginationLastNote,
  changePage,
  resetNotes,
  changePageNoteForCategory
} = notesSlice.actions;

export default reducer;
