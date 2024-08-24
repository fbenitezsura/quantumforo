import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '@clean/application/redux/banners/initialStateBanners';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);

export const getPrimaryHomeBanner = createAsyncThunk(
  'banners/getPrimaryHomeBanner',
  async (payload, { getState }) => {
    const page = 'Home';
    const classBanner = 'Primary';
    const state: any = getState();
    const { countryDetected } = state.GeoLocation;

    let primaryBanners : Array<any> = [];
    const resultPrimaryBanners = await layoutService.GetBanners(page,countryDetected,classBanner,'es');

    resultPrimaryBanners.fold(
      (err) => {
        primaryBanners = []
      },
      (allbanners) => {
        primaryBanners = allbanners;
      }
    );
    return primaryBanners;
  }
);

export const getSecondaryHomeBanner = createAsyncThunk(
  'banners/getSecondaryHomeBanner',
  async (payload, { getState, dispatch }) => {
    const page = 'Home';
    const classBanner = 'Secondary';
    const state: any = getState();
    const { countryDetected } = state.GeoLocation;

    let secondaryBanners : Array<any> = [];

    const resultSecondaryBanners = await layoutService.GetBanners(page, countryDetected, classBanner, 'es');

    resultSecondaryBanners.fold(
      (err) => {
        secondaryBanners = [];
      },
      (allbanners) => {
        secondaryBanners = allbanners;
      }
    );

    return secondaryBanners;
  }
);

export const getPrimaryCasinoBanner = createAsyncThunk(
  'banners/getPrimaryCasinoBanner',
  async (payload, { getState, dispatch }) => {
    const page = 'Casino';
    const classBanner = 'Primary';
    const state: any = getState();
    const { countryDetected } = state.GeoLocation;

    let primaryBannersCasino : Array<any> = [];

    const resultPrimaryBannersCasino = await layoutService.GetBanners(page, countryDetected, classBanner, 'es');

    resultPrimaryBannersCasino.fold(
      (err) => {
        primaryBannersCasino = [];
      },
      (allbanners) => {
        primaryBannersCasino = allbanners;
      }
    );

    return primaryBannersCasino;
  }
);

export const getPrimaryLiveCasinoBanner = createAsyncThunk(
  'banners/getPrimaryLiveCasinoBanner',
  async (payload, { getState, dispatch }) => {

    const page = 'LiveCasino';
    const classBanner = 'Primary';
    const state: any = getState();
    const { countryDetected } = state.GeoLocation;

    let primaryBannersLiveCasino : Array<any> = [];

    const resultPrimaryBannersLiveCasino = await layoutService.GetBanners(page, countryDetected, classBanner, 'es');

    resultPrimaryBannersLiveCasino.fold(
      (err) => {
        primaryBannersLiveCasino = [];
      },
      (allbanners) => {
        primaryBannersLiveCasino = allbanners;
      }
    );

    return primaryBannersLiveCasino;
  }
);

export const bannersSlice = createSlice({
  name: 'bannersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrimaryHomeBanner.fulfilled, (state, action) => {
        state.primaryBannersHome = action.payload;
        state.loadingPrimaryBannersHome = false;
        state.lastUpdatedPrimaryHomeBanners = new Date();
      })
      .addCase(getPrimaryHomeBanner.pending, (state, action) => {
        state.loadingPrimaryBannersHome = true;
      })
      .addCase(getPrimaryHomeBanner.rejected, (state, action) => {
        state.loadingPrimaryBannersHome = false;
      })
      .addCase(getSecondaryHomeBanner.fulfilled, (state, action) => {
        state.secondaryBannersHome = action.payload;
        state.loadingSecondaryBannersHome = false;
        state.lastUpdatedSecondaryHomeBanners = new Date();
      })
      .addCase(getSecondaryHomeBanner.pending, (state, action) => {
        state.loadingSecondaryBannersHome = true;
      })
      .addCase(getSecondaryHomeBanner.rejected, (state, action) => {
        state.loadingSecondaryBannersHome = false;
      })
      .addCase(getPrimaryCasinoBanner.fulfilled, (state, action) => {
        state.primaryBannersCasino = action.payload;
        state.loadingPrimaryBannersCasino = false;
        state.lastUpdatedPrimaryCasinoBanners = new Date();
      })
      .addCase(getPrimaryCasinoBanner.pending, (state, action) => {
        state.loadingPrimaryBannersCasino = true;
      })
      .addCase(getPrimaryCasinoBanner.rejected, (state, action) => {
        state.loadingPrimaryBannersCasino = false;
      })
      .addCase(getPrimaryLiveCasinoBanner.fulfilled, (state, action) => {
        state.primaryBannersLiveCasino = action.payload;
        state.loadingPrimaryBannersLiveCasino = false;
        state.lastUpdatedPrimaryLiveCasinoBanners = new Date();
      })
      .addCase(getPrimaryLiveCasinoBanner.pending, (state, action) => {
        state.loadingPrimaryBannersLiveCasino = true;
      })
      .addCase(getPrimaryLiveCasinoBanner.rejected, (state, action) => {
        state.loadingPrimaryBannersLiveCasino = false;
      });
  },
});

const { reducer } = bannersSlice;

export default reducer;
