import React, { useState } from 'react';
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import {MdDone} from "react-icons/md"

function NoteItem({ text,  editNote, deleteNote, setEditId, isEditing, editId,id }) {
  const [editedNote, setEditedNote] = useState(text);

  const handleEdit = () => {
    console.log(isEditing)
    if (isEditing) {
      editNote(id, editedNote);
    }
    setEditId(isEditing ? null : id);
  };

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleTextareaChange = (e) => {
    setEditedNote(e.target.value);
  };

  return (
    <li>
      {isEditing ? (
        <textarea
          rows="4" // You can adjust the number of rows as needed
          cols="50" // You can adjust the number of columns as needed
          value={editedNote}
          onChange={handleTextareaChange}
        />
      ) : (
        <p>{text}</p>
      )}
      <div className='input_edit_btn'>
        <button onClick={handleEdit}>
          {isEditing ? <MdDone /> : <AiFillEdit />}
          </button>
        <button onClick={handleDelete}><AiFillDelete color='red' /></button>
      </div>
    </li>
  );
}

export default NoteItem;
