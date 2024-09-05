import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';

export const handleSuccessResponse = async (kind, thunkAPI) => {
  switch (kind) {
    case 'addReview':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'SUCCESS',
          popUpProps: {
            title: 'Comentario agregado !',
            text: 'Comentario agregado !',
            timer: 5000,
          },
        })
      );
      break;
    default:
  }
};
