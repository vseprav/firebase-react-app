const dictionaries = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DICTIONARY':
      let d = state.dictionaries || [];
      d.push(action.payload.dictionary);
      state = {
        ...state,
        dictionaries: d
      };
      break;
  }
  return state;
};

export default dictionaries;
