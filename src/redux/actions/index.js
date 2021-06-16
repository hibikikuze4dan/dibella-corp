export const toggleOpenSectionAction = (state, action) => {
  state.openSections = {
    ...state.openSections,
    [action.payload]: !state.openSections[action.payload],
  };
};
