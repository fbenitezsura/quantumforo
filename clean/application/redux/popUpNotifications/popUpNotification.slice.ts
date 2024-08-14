import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@clean/application/redux/popUpNotifications/initialStateNotifications';

export const POP_UP_NOTIFICATION_TYPES = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
  QUESTION: 'QUESTION',
};

export const popUpNotificationsSlice = createSlice({
  name: 'popUpNotificationsSlice',
  initialState,
  reducers: {
    showPopUp: (state, action) => {
      state.isOpen = true;
      state.popUpNotificationType = POP_UP_NOTIFICATION_TYPES[action.payload.type],
      state.popUpProps = action.payload.popUpProps;
    },
    hidePopUp: () => initialState,
  },
});

export const { showPopUp, hidePopUp } = popUpNotificationsSlice.actions;

export default popUpNotificationsSlice.reducer;
