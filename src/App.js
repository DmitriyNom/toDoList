import { useState } from "react";
import AddNoteForm from "./widgets/AddNoteForm";
import ListWindow from "./widgets/ListWindow";
import Note from "./components/Note";
import './styles/App.css';

function App() {

  const [notes, setNotes] = useState([
    { id: 1, name: "First Note" },
    { id: 2, name: "Second Note" },
    { id: 3, name: "Third Note" },
  ]);

  function addNote(newNote) {
    setNotes([...notes, newNote])
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id != id));
  }

  return (
    <div className="App">
      <ListWindow notes={notes} deleteNote={deleteNote} />
      <AddNoteForm addNote={addNote} id={(notes[notes.length - 1].id) + 1} />
    </div>
  );
}

export default App;
