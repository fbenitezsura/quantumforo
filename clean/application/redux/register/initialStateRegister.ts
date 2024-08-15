interface RegisterState {
  loadingRegister: boolean;
  loadingPreRegister: boolean;
  registerCompleted: boolean;
  needValidationPhone: boolean;
  preRegisterCompleted: boolean;
  steps: Array<any>,
  currentStep: number,
  checkPhone: boolean,
}

export const initialState: RegisterState = {
  loadingRegister: false,
  loadingPreRegister: false,
  registerCompleted: false,
  preRegisterCompleted: false,
  needValidationPhone: false,
  steps: [],
  currentStep: 1,
  checkPhone: false
};
