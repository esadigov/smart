import { configureStore } from '@reduxjs/toolkit';

import automationSlice from './slices/automationSlice';
import deviceSlice from './slices/deviceSlice';
import roomSlice from './slices/roomSlice';

export const store = configureStore({
  reducer: {
    deviceSlice,
    roomSlice,
    automationSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
