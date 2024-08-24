interface categoriesState {
  categories: Array<any>,
  categoriesWithNotes: any,
  loadingGetCategoriesWithNotes: boolean,
  loadingGetCategories: boolean
}

export const initialState : categoriesState = {
  categories: [],
  categoriesWithNotes: [],
  loadingGetCategoriesWithNotes: false,
  loadingGetCategories: false
};
