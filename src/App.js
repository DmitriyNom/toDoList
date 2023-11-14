import { useState } from "react";
import AddNoteForm from "./components/AddNoteForm";
import ListWindow from "./components/ListWindow";
import Note from "./shared/UI/Note";
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

  return (
    <div className="App">
      <ListWindow notes={notes} />
      <AddNoteForm addNote={addNote} id={notes.length + 1} />
    </div>
  );
}

export default App;
