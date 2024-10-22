import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  roomId: '',
  participants: [],
  room: null,
};

const videoCallSlice = createSlice({
  name: 'videoCall',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.participants = action.payload;
    },
    setRoomId: (state, action) => {
      state.participants = action.payload;
    },
    setParticipants: (state, action) => {
      state.participants = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
  },
});

export const { setUserName, setRoomId, setParticipants, setRoom } =
  videoCallSlice.actions;

export default videoCallSlice.reducer;
