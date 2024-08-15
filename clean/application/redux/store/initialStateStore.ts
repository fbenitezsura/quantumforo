interface initialState {
    listStore: any;
    loadingGetStore: Boolean;
    categories: Array<string>;
    categorySelected: string;
};


export const initialState: initialState = {
    listStore: [],
    loadingGetStore: true,
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
