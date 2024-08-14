import { showPopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';
export const handleValidateParams = async (kind, Params, thunkAPI) => {
  let errorDetected = false;
  switch (kind) {
    case 'preRegisterCustomer':
      var hasErrorRC = await validateValidPassword(Params, thunkAPI);
      if (hasErrorRC) {
        errorDetected = true;
      }
      break;
    case 'registerCustomer':
      var hasErrorRC = await validateValidPhoneNumber(Params, thunkAPI);
      if (hasErrorRC) {
        errorDetected = true;
      }
      break;
    default:
  }

  return errorDetected;
};

const validateValidPhoneNumber = async (formData, thunkAPI) => {
  if (formData.needValidationPhone && !formData.isValid) {
    await thunkAPI.dispatch(
      showPopUp({
        type: 'ERROR',
        popUpProps: {
          title: 'Error',
          text: 'Debes validar tu teléfono antes de continuar.',
          timer: 5000,
        },
      })
    );
    return true;
  }
  return false;
};

const validateValidPassword = async (formData, thunkAPI) => {
  if (!formData.validPassword) {
    await thunkAPI.dispatch(
      showPopUp({
        type: 'ERROR',
        popUpProps: {
          title: 'Error',
          text: 'La contraseña no cumple requisitos',
          timer: 5000,
        },
      })
    );
    return true;
  }
  return false;
};
