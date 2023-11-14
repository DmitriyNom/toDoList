import { useState } from "react";
import ListWindow from "./components/ListWindow";
import Note from "./shared/UI/Note";
import './styles/App.css';

function App() {

  const [notes, setNotes] = useState([
    { id: 1, name: "First Note" },
    { id: 2, name: "Second Note" },
    { id: 3, name: "Third Note" },
  ]);

  return (
    <div className="App">
      <ListWindow notes={notes} />
    </div>
  );
}

export default App;
