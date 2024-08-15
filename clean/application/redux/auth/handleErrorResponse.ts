import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';


export const handleErrorResponse = async (
  kind: string,
  error: any,
  thunkAPI: any
) => {
  switch (kind) {
    case 'Login':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'ERROR',
          popUpProps: {
            title: 'Error',
            text: 'Contraseña o usuario incorrecto',
            timer: 5000,
          },
        })
      );
      break;
    default:
  }
};
