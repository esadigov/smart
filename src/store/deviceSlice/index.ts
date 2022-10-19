import {createSlice} from '@reduxjs/toolkit';

type StateType = {
  selectedDeviceSection: any[];
};

const initialState = {
  selectedDeviceSection: [],
} as StateType;

export const snackBarSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setSelectedDevice(state, action) {
      state.selectedDeviceSection = action.payload;
    },
    switchDevice(state, action) {
      state.selectedDeviceSection = state.selectedDeviceSection.map(device =>
        device.id === action.payload
          ? {...device, enabled: !device.enabled}
          : device,
      );
    },
  },
});

export const {setSelectedDevice, switchDevice} = snackBarSlice.actions;

export default snackBarSlice.reducer;
