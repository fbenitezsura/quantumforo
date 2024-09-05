import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';

export const handleErrorResponse = async (
  kind: string,
  error: any,
  thunkAPI: any
) => {
  switch (kind) {
    case 'addReview':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'ERROR',
          popUpProps: {
            title: 'Error',
            text: 'No se ha podido agregar el comentario.',
            timer: 5000,
          },
        })
      );
      break;
    case 'getReview':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'ERROR',
          popUpProps: {
            title: 'Error',
            text: 'No se han podido cargar los review',
            timer: 5000,
          },
        })
      );
      break;
    default:
  }
};
