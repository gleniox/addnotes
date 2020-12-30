import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notesReducer';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context'

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []); // const [state, dispatch] = useReducer(...)

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes: notes });
    }
  }, []); //[] works like class method didmount

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    // console.log("useEffect ran");
  }, [notes]);

  return (
    <NotesContext.Provider value={{notes, dispatch}}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
