"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@clean/application/redux/store';

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
