import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);
interface NavbarState {
  menuNavbar: Array<Object> | null;
}

const initialState = {
  menuNavbar: [],
  lastUpdatedNavbar: null,
};

export const getMenuNavbar = createAsyncThunk(
  'navbar/getMenuNavbar',
  async (args, { getState, dispatch }) => {
    let MenuNavbar = [];
    const state: any = getState();
    const { countryDetected } = state.GeoLocation;
    const menuNavbar = await layoutService.GetMenuNavbar(countryDetected, 'es');
    await menuNavbar.fold(
      (err) => (MenuNavbar = []),
      (menu) => {
        MenuNavbar = menu
      }
    );
    return MenuNavbar;
  }
);

export const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuNavbar.fulfilled, (state, action) => {
      state.menuNavbar = action.payload;
      state.lastUpdatedNavbar = new Date();
    });
  },
});

const { reducer } = navbarSlice;

export default reducer;
