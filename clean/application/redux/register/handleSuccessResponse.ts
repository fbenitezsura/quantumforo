import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';

export const handleSuccessResponse = async (kind, thunkAPI) => {
  switch (kind) {
    case 'preRegisterCustomer':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'SUCCESS',
          popUpProps: {
            title: 'Pre Registro Completo',
            text: '',
            timer: 5000,
          },
        })
      );
      break;
    case 'registerCustomer':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'SUCCESS',
          popUpProps: {
            title: 'Registro Completo',
            text: 'Registro Completo',
            timer: 5000,
          },
        })
      );
      break;
    default:
  }
};
