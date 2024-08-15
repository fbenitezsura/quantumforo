interface AuthType {
  userLogged: boolean;
  loadingLogin: boolean;
  forceLogout: boolean;
  userInfo: any;
}

export const initialState : AuthType = {
  userLogged: false,
  loadingLogin: false,
  userInfo: {},
  forceLogout: false
};
