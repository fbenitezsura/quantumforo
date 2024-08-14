interface AuthType {
  userLogged: boolean;
  loadingLogin: boolean;
  forceLogout: boolean;
}

export const initialState : AuthType = {
  userLogged: false,
  loadingLogin: false,
  forceLogout: false
};
