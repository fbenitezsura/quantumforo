import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { thunk } from 'redux-thunk';

import Auth from './auth/auth.slice';
import Modal from './modal/modal.slice';
import PopUpNotifications from './popUpNotifications/popUpNotification.slice';
import Register from './register/register.slice';
import Store from './store/store.slice';


const rootReducer = combineReducers({
  Auth,
  Modal,
  PopUpNotifications,
  Register,
  Store,
});

const makeConfiguredStore = (reducer) => {
  const store: any = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware([thunk]),
  });
  return store;
};

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  }
  // we need it only on client side
  const {
    createMigrate,
    persistStore,
    persistReducer,
  } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;
  const versionStore = 1;

  const persistConfig = {
    key: process.env.NEXT_PUBLIC_KEY_PERSIST,
    storage,
    version: versionStore,
    debug: true,
    stateReconciler: hardSet,
    migrate: createMigrate(null, { debug: false }),
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer);

  store.__persistor = persistStore(store); // Nasty hack

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const store = makeStore();
