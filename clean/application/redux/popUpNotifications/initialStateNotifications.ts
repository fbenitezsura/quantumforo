interface PopUpProps {
  title: string;
  text: string;
  timer: number;
}

interface StateType {
  popUpNotificationType: any | null; // Use a specific type instead of 'any' if you know the possible types.
  isOpen: boolean;
  popUpProps: PopUpProps;
}

export const initialState = {
  popUpNotificationType: null,
  isOpen: false,
  popUpProps: {
    title: '',
    text: '',
    timer: 4000, // default
  },
};
