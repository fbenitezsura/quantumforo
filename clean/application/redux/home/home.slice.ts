import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { title } from 'process';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);

const initialState = {
    featuredEntrepreneurship: [{
        "name": "Bless Colors",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store1.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    },{
        "name": "Bless Colors",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store1.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    }],
    newEntrepreneurship: [{
        "name": "Bless Colors",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store1.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    },{
        "name": "Bless Colors",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store1.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    }],
    featuredCategory: [{
        urlImg: 'https://quantumforo.imgix.net/store/store1.png',
        title: 'Moda'
    }],
    showShopPlans: true,
    showServicePlans: true
};

export const getHome = createAsyncThunk(
    'home/getHome',
    async (args, { getState }) => {
        const state: any = getState();
        const { countryDetected } = state.GeoLocation;
        let home;
        const resultMenuFooter = await layoutService.GetMenuFooter(countryDetected, 'es');
        resultMenuFooter.fold(
            (err) => (
                home = initialState
            ),
            (configHome) => (
                home = configHome
            )
        );

        return home;
    }
);

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHome.fulfilled, (state, action) => {
            state.featuredEntrepreneurship = action.payload.featuredEntrepreneurship;
            state.newEntrepreneurship = action.payload.newEntrepreneurship;
            state.featuredCategory = action.payload.featuredCategory;
            state.showShopPlans = action.payload.showShopPlans;
            state.showServicePlans = action.payload.showServicePlans;
        });
    },
});

const { reducer } = homeSlice;

export default reducer;
