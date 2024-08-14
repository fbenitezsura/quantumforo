interface StateType {
  modalType: any; // or you could be more specific if you know possible types
  isOpen: boolean;
  modalProps: { [key: string]: any }; // Object with any set of key-value pairs
}

export const initialState : StateType = {
  modalType: null,
  isOpen: false,
  modalProps: {},
};
