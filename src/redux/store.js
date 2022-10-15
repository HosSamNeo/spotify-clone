import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './services/ShazamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(shazamCoreApi.middleware),

});
