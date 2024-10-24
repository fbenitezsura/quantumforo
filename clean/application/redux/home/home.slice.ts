import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { title } from 'process';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);

const initialState = {
    featuredEntrepreneurship: [{
        "id": 1,
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
        "id": 2,
        "name": "Mary Cris",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store2.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    },
    {
        "id": 3,
        "name": "Ehf Concept",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store3.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    }],
    newEntrepreneurship: [{
        "name": "Happy Paws",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store4.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    },{
        "name": "Da Vinci",
        "url": "https://blesscolor-front.vercel.app/",
        "description": "Tienda Sustentable con los mejores productos",
        "location": "Concepción",
        "coverageArea": "Todo Chile",
        "createdAt": "2024-08-14T14:50:55.144Z",
        "updatedAt": "2024-09-22T02:52:53.801Z",
        "publishedAt": "2024-08-14T14:50:57.598Z",
        "imgUrl": "https://quantumforo.imgix.net/store/store5.png",
        "backgroundColor": "#008f39",
        "latitud": "-37.03386",
        "longitud": "-73.14019"
    }],
    featuredCategory: [{
        urlImg: '/category/c1.png',
        title: 'Mascotas'
    },{
        urlImg: '/category/c2.png',
        title: 'Games'
    },{
        urlImg: '/category/c3.png',
        title: 'Fitness'
    },{
        urlImg: '/category/c4.png',
        title: 'Hogar'
    },{
        urlImg: '/category/c5.png',
        title: 'Bicicletas'
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
                home = initialState
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
