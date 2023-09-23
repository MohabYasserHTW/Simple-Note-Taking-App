import React, { useState, useEffect } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import NoteInput from "./components/NoteInput";
import SearchBar from "./components/SearchBar";
import { nanoid } from 'nanoid'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes") || '[]'));
  const [filterTerm, setFilterTerm] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Save notes to local storage whenever the notes state changes
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, {text:newNote,id:nanoid()}]);
  };

  const editNote = (id, updatedNote) => {
    console.log(id)
    const updatedNotes = notes.map(note => note.id === id?{...note,text: updatedNote}:note)
    setNotes(updatedNotes);
    setEditId(null);
  };

  const deleteNote = (id) => {
    
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes);
  };

  const filterNotes = (searchTerm) => {
    setFilterTerm(searchTerm);
  };

  return (
    <div className="App">
      <header>
        <h1>Notes App</h1>
        <SearchBar filterNotes={filterNotes} />
      </header>
      <main>
        <NoteInput addNote={addNote} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(filterTerm.toLowerCase())
          )}
          editNote={editNote}
          deleteNote={deleteNote}
          setEditId={setEditId}
          editId={editId}
        />
      </main>
      
    </div>
  );
}

export default App;
