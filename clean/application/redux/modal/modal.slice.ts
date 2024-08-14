import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@clean/application/redux/modal/initialStateModal';

export const MODAL_TYPES = {
  LOGIN_MODAL: 'LOGIN_MODAL'
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpen = true;
      state.modalType = MODAL_TYPES[action.payload];
    },
    hideModal: () => initialState,
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
