import { createSlice } from '@reduxjs/toolkit';

import { ROOMS } from '../../mock';

// NOTE: get rid of any
type StateType = {
  rooms: any[];
  filteredRooms: any[];
  searchQuery: string;
};

const initialState = {
  rooms: ROOMS,
  filteredRooms: ROOMS,
  searchQuery: '',
} as StateType;

export const roomSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    switchRoom(state, action) {
      state.filteredRooms = state.filteredRooms.map(device =>
        device.id === action.payload
          ? { ...device, enabled: !device.enabled }
          : device,
      );
    },
    searchRooms(state, action) {
      state.filteredRooms = state.rooms.filter(
        room =>
          room.id.includes(action.payload) ||
          room.name.includes(action.payload),
      );
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { searchRooms, setSearchQuery, switchRoom } = roomSlice.actions;

export default roomSlice.reducer;
