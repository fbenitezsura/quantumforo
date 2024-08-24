export const initialState = {
  lastNotes: {
    data: [],
    filterOffset: 0,
    filterLimit: 5,
    page: 0,
    maxPage: 0,
    loading: false,
    error: null
  },
  notesForCategory: {
    data: [],
    filterOffset: 0,
    filterLimit: 24,
    page: 1,
    maxPage: 0,
    loading: false,
    error: null,
    categoryId: null
  },
  searchNotes: {
    data: [],
    loading: false,
    error: null
  }
};

