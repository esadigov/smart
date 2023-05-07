import { createSlice } from '@reduxjs/toolkit';

import { ROOMS } from '../../mock';

// NOTE: get rid of any
interface StateType {
  selectedRoom: any[],
  selectedDevice: any[],
  roomSection: any[],
  filteredRooms: any[],
  searchQuery: string,
  selectedSheet: string,
};

const initialState = {
  selectedRoom: [],
  selectedDevice: [],
  roomSection: ROOMS,
  filteredRooms: ROOMS,
  searchQuery: '',
  selectedSheet: 'RoomOptions',
} as StateType;

export const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRoom(state, action) {
      state.selectedRoom = action.payload;
    },
    setDevice(state, action) {
      state.selectedDevice = action.payload;
    },
    switchRoom(state, action) {
      state.filteredRooms = state.filteredRooms.map(room =>
        room.id === action.payload
          ? { ...room, enabled: !room.enabled }
          : room,
      );
    },
    switchDevice(state, action) {
      state.selectedDevice = state.selectedDevice.map(device =>
        device.id === action.payload
          ? { ...device, enabled: !device.enabled }
          : device,
      );
    },
    searchRooms(state, action) {
      state.filteredRooms = state.roomSection.filter(
        section =>
          section.id.includes(action.payload) ||
          section.name.includes(action.payload),
      );
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSheet(state, action) {
      state.selectedSheet = action.payload;
    },
  },
});

export const {
  setRoom,
  setDevice,
  switchRoom,
  switchDevice,
  searchRooms,
  setSearchQuery,
  setSheet,
} = roomSlice.actions;

export default roomSlice.reducer;