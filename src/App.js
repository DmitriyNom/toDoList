import { useState, useEffect } from "react";
import AddNoteForm from "./widgets/AddNoteForm";
import ListWindow from "./widgets/ListWindow";
import './styles/App.css';
import addressList from './addressList.js';


// сделать page из этой страницы, а app вынести отдельным над-компонентом

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    printNotes();
  }, [])

  function printNotes() {
    let currentAddress = addressList.get("getAllNotes");

    fetch(currentAddress, {
      method: "GET",
      headers: { "Accept": "application/json" }
    }).then(value => {
      return value.json();
    })
      .then(value => {
        setNotes(value);
      })
    // Добавить обработку ошибок
  }

  function addNote(newNote) {

    let postNewNoteAddress = addressList.get("postNewNote");


    fetch(postNewNoteAddress, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(newNote)
    })
      .then(value => {
        value.json().then(value => {
          if (value.id) {
            setNotes([...notes, { id: value.id, ...newNote }]);
          } else {
            console.log(value.message);
          }
        })
      })

  }

  function deleteNote(id) {

    let deletePostAddress = addressList.get("getAllNotes") + "/" + id;

    fetch(deletePostAddress, {
      method: "DELETE"
    })
      .then(value => {
        if (value.status === 200) {
          setNotes(notes.filter(note => note.id !== id));
        } else {
          console.log(value);
        }
      })

  }

  return (
    <div className="App">
      <ListWindow notes={notes} deleteNote={deleteNote} />
      <AddNoteForm addNote={addNote} />
    </div>
  );
}

export default App;
