import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './filterSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducer,
});
