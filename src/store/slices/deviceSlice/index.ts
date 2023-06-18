import { createSlice } from '@reduxjs/toolkit';

import { DEVICE_SECTIONS } from '../../mock';

// NOTE: get rid of any
type StateType = {
  selectedDeviceSection: any[];
  deviceSections: any[];
  filteredSections: any[];
  searchQuery: string;
};

const initialState = {
  selectedDeviceSection: [],
  deviceSections: DEVICE_SECTIONS,
  filteredSections: DEVICE_SECTIONS,
  searchQuery: ''
} as StateType;

export const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setSelectedDevice(state, action) {
      state.selectedDeviceSection = action.payload;
    },
    switchDevice(state, action) {
      state.selectedDeviceSection = state.selectedDeviceSection.map(device =>
        device.id === action.payload
          ? { ...device, enabled: !device.enabled }
          : device
      );
    },
    searchDeviceSections(state, action) {
      state.filteredSections = state.deviceSections.filter(
        section =>
          section.id.includes(action.payload) ||
          section.title.includes(action.payload)
      );
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    }
  }
});

export const {
  setSelectedDevice,
  switchDevice,
  searchDeviceSections,
  setSearchQuery
} = devicesSlice.actions;

export default devicesSlice.reducer;
