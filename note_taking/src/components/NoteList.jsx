import React from 'react';
import NoteItem from './NoteItem';
import "./NoteList.css"
function NoteList({ notes, editNote, deleteNote, setEditId, editId }) {
  
  return (
    <div className='note-list_div'>
      <h2>Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <NoteItem
            key={note.id}
            text={note.text}
            index={index}
            editNote={editNote}
            deleteNote={deleteNote}
            setEditId={setEditId}
            isEditing={editId === note.id}
            editId={editId}
            id={note.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
