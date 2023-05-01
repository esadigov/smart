import { createSlice } from '@reduxjs/toolkit';

import { AUTOMATION_SECTIONS } from '../../mock';

// NOTE: get rid of any
interface StateType {
  selectedAutomation: any[],
  automationSection: any[],
  filteredAutomations: any[],
  searchQuery: string,
  selectedSheet: string,
};

const initialState = {
  selectedAutomation: [],
  automationSection: AUTOMATION_SECTIONS,
  filteredAutomations: AUTOMATION_SECTIONS,
  searchQuery: '',
  selectedSheet: 'FirstSheet',
} as StateType;

export const automationSlice = createSlice({
  name: 'automations',
  initialState,
  reducers: {
    setAutomation(state, action) {
      state.selectedAutomation = action.payload;
    },
    switchAutomation(state, action) {
      state.selectedAutomation = state.selectedAutomation.map(automation =>
        automation.id === action.payload
          ? { ...automation, enabled: !automation.enabled }
          : automation,
      );
    },
    searchAutomations(state, action) {
      state.filteredAutomations = state.automationSection.filter(
        section =>
          section.id.includes(action.payload) ||
          section.title.includes(action.payload),
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
  setAutomation,
  switchAutomation,
  searchAutomations,
  setSearchQuery,
  setSheet,
} = automationSlice.actions;

export default automationSlice.reducer;