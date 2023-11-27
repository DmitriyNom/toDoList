import { useState, useEffect } from "react";
import AddNoteForm from "./widgets/AddNoteForm";
import ListWindow from "./widgets/ListWindow";
// import Note from "./components/Note";
import './styles/App.css';
import addressList from './addressList.js';

// сделать page из этой страницы, а app вынести отдельным над-компонентом

function App() {

  const [notes, setNotes] = useState([]);

  function printNotes() {
    let currentAddress = addressList.get("getAllNotes");

    let response = fetch(currentAddress)
      .then(value => {
        return value.json();
      })
      .then(value => {
        setNotes(value)
      })
  }

  printNotes();

  let notesCounter = (notes.length === 0) ? 0 : notes[notes.length - 1].id;


  function addNote(newNote) {
    setNotes([...notes, newNote])
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div className="App">
      <ListWindow notes={notes} deleteNote={deleteNote} />
      <AddNoteForm addNote={addNote} id={notesCounter + 1} />
    </div>
  );
}

export default App;
