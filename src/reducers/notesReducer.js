const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      console.log('Populate notes');
      return action.notes;
    case 'ADD_NOTE':
      console.log('Add note');
      return [...state, { title: action.title, content: action.content }];
    case 'REMOVE_NOTE':
      console.log('Remove note');
      return state.filter((note) => note.title !== action.title);
    default:
      return state;
  }
};

export { notesReducer as default };
