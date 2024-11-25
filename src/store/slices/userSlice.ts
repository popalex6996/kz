import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  photoURL: null,
  displayName: null,
  name: null,
  lastName: null,
  phoneNumber: null,
  password: null,
  birth: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email || state.email;
      state.token = action.payload.token || state.token;
      state.id = action.payload.id || state.id;
      state.photoURL = action.payload.photoURL || state.photoURL;
      state.displayName = action.payload.displayName || state.displayName;
      state.name = action.payload.name || state.name;
      state.lastName = action.payload.lastName || state.lastName;
      state.phoneNumber = action.payload.phoneNumber || state.phoneNumber;
      state.password = action.payload.password || state.password;
      state.birth = action.payload.birth || state.birth;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.photoURL = null;
      state.displayName = null;
      state.name = null;
      state.lastName = null;
      state.phoneNumber = null;
      state.password = null;
      state.birth = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
