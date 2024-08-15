import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';

export const handleSuccessResponse = async (kind, thunkAPI) => {
  switch (kind) {
    case 'Login':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'SUCCESS',
          popUpProps: {
            title: 'Ingreso Correcto',
            text: 'Sesion Iniciada',
            timer: 5000,
          },
        })
      );
      break;
    default:
  }
};
