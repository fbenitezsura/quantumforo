interface initialState {
    listStore: any;
    loadingGetStore: Boolean;
    categories: Array<string>;
    categorySelected: string;
    listSearchStore: any;
    loadingSearchStore: Boolean;
};


export const initialState: initialState = {
    listStore: [],
    loadingGetStore: true,
    loadingSearchStore: true,
    listSearchStore: [],
    categories: [{
        name: 'Popular'
    },
    {
        name: 'Nuevos'
    },
    {
        name: 'Cerca de ti'
    }
    ],
    categorySelected: 'Popular'
};
