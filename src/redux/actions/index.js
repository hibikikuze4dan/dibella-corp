import { choiceExistsFunc } from "../../data/utils";

export const toggleOpenSectionAction = (state, action) => {
  state.openSections = {
    ...state.openSections,
    [action.payload]: !state.openSections[action.payload],
  };
};

export const updateEnhancementsAction = (state, action) => {
  const { orficeType, data } = action.payload;
  const stateKey = `${orficeType}Enhancements`;

  const exists = choiceExistsFunc(state[stateKey], data);
  state[stateKey] = exists
    ? [...state[stateKey].filter(({ title }) => title !== data.title)]
    : [...state[stateKey], data];
};
