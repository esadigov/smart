import { createSlice } from '@reduxjs/toolkit';

import { AUTOMATIONS } from '../../mock';

// NOTE: get rid of any
type StateType = {
  automations: any[];
  filteredAutomations: any[];
  searchQuery: string;
};

const initialState = {
  automations: AUTOMATIONS,
  filteredAutomations: AUTOMATIONS,
  searchQuery: '',
} as StateType;

export const automationSlice = createSlice({
  name: 'automations',
  initialState,
  reducers: {
    switchAutomation(state, action) {
      state.filteredAutomations = state.filteredAutomations.map(automation =>
        automation.id === action.payload
          ? { ...automation, enabled: !automation.enabled }
          : automation,
      );
    },
    searchAutomations(state, action) {
      state.filteredAutomations = state.automations.filter(
        automation =>
          automation.id.includes(action.payload) ||
          automation.name.includes(action.payload),
      );
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  switchAutomation,
  searchAutomations,
  setSearchQuery,
} = automationSlice.actions;

export default automationSlice.reducer;
