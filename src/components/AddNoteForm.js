import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      title,
      content,
    });
    setTitle('');
    setContent('');
  };

  return (
    <>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        Title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Text:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>add note</button>
      </form>
    </>
  );
};

export { AddNoteForm as default };
