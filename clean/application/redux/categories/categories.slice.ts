import type { ICustomer } from '@clean/domain/entities/customerEntity';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { initialState } from '@clean/application/redux/categories/initialStateCategories';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (args, thunkAPI) => {
    const state: any = thunkAPI.getState();    
    let categories : Array<any> = [];   
    const { countryDetected } = state.GeoLocation; 
    const resultCategories = await layoutService.GetAllCategories(countryDetected);
    resultCategories.fold(
      (err) => {
        categories = []
      },
      (allCategories) => {
        categories = allCategories;
      }
    );
    return categories;
  }
);

export const getCategoriesWithNotes = createAsyncThunk(
  'categories/getCategoriesWithNotes',
  async (args, thunkAPI) => {
    try{
      const state: any = thunkAPI.getState();    
    let categoriesWithNotes : Array<any> = []; 
    const { countryDetected } = state.GeoLocation;   
    const { categories } = state.Categories;
    for (const category of categories) {
      const resultCategories = await layoutService.GetNotesByCategory(countryDetected, category.id, { start: 0, limit: 5});

      resultCategories.fold(
        (err) => {
          console.error(`Error fetching notes for category ${category.id}`, err);
        },
        (WithNotes) => {
          categoriesWithNotes.push(...WithNotes);
        }
      );
    }
    return categoriesWithNotes;
    }catch(e){
      console.log(e);
    }
    
  }
);

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    resetCategories: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.loadingGetCategories = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loadingGetCategories = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loadingGetCategories = false;
      })
      .addCase(getCategoriesWithNotes.pending, (state, action) => {
        state.loadingGetCategoriesWithNotes = true;
      })
      .addCase(getCategoriesWithNotes.fulfilled, (state, action) => {
        state.categoriesWithNotes = action.payload;
        state.loadingGetCategoriesWithNotes = false;
      })
      .addCase(getCategoriesWithNotes.rejected, (state, action) => {
        state.loadingGetCategoriesWithNotes = false;
      });
  },
});

const { reducer } = categoriesSlice;

export const { resetCategories } = categoriesSlice.actions;

export default reducer;
