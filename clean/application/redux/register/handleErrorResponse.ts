import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';

const translateError = (kind, errorMessage) => {
  let messageTranslate = '';
  switch (kind) {
    case 'registerCustomer':
      switch (errorMessage) {
        case 'Customer already exists by phoneNumber':
          messageTranslate =
            'Lo sentimos, el celular ya se <br /> encuentra registrado, ingrese otro nuevamente.';
          break;
        case 'Customer already exists by username':
          messageTranslate =
            'Lo sentimos, el nombre de usuario seleccionado ya está siendo utilizado, ingrese uno diferente';
          break;
        case 'Customer already exists by email':
          messageTranslate =
            'Lo sentimos, el correo ingresado ya está siendo utilizado, ingrese uno diferente';
          break;
        default:
          break;
      }
      break;
    case 'preRegisterCustomer':
      switch (errorMessage) {
        case 'Documento de identidad ya está en uso':
          messageTranslate =
            'Documento de identidad ya está en uso';
          break;
        default:
          break;
      }
      break;
    default:
      'Ocurrió un problema';
  }
  return messageTranslate;
};

export const handleErrorResponse = async (
  kind: string,
  error: any,
  thunkAPI: any
) => {
  switch (kind) {
    case 'registerCustomer':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'ERROR',
          popUpProps: {
            title: 'Error',
            text: translateError(kind, error?.error?.message),
            timer: 5000,
          },
        })
      );
      break;
    case 'preRegisterCustomer':
      await thunkAPI.dispatch(
        showPopUp({
          type: 'ERROR',
          popUpProps: {
            title: 'Error',
            text: translateError(kind, error?.error?.message),
            timer: 5000,
          },
        })
      );
      break;
    default:
  }
};
