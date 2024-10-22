import { configureStore } from '@reduxjs/toolkit';
import videoCallReducer from '../store/features/videoCallSlice';

const store = configureStore({
  reducer: {
    videoCall: videoCallReducer,
  },
});

export default store;
