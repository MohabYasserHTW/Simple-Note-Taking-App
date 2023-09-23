import React, { useState } from 'react';
import "./NoteInput.css"
function NoteInput({ addNote }) {
  const [newNote, setNewNote] = useState('');

  const handleChange = (e) => {
    setNewNote(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() === '') {
      return;
    }
    addNote(newNote);
    setNewNote('');
  }

  return (
    <div className='note-input_div'>
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your note here"
          value={newNote}
          onChange={handleChange}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default NoteInput;
