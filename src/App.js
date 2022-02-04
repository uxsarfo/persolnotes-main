import React, { useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import NoteDetail from "./components/NoteDetail";

function App(props) {
  const [notes, setNotes] = useState([]);
  let [msg, setMsg] = useState("");
  let [msgTitle, setMsgTitle] = useState("");
  let [editNote, setEditNote] = useState(false);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });

  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  function noteDetailDisplay(id) {
    msgTitle = document.getElementById(id).childNodes[0].textContent;
    setMsgTitle(msgTitle);

    const msg = document.getElementById(id).childNodes[1].textContent;

    setMsg(msg);
  }

  function returnCurrentState() {
    return { msg, msgTitle }
  }


  function handleEdit() {
    return setEditNote(!editNote)
  }


  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      />{" "}
      <CreateArea
        onAdd={addNote}
        editNote={editNote ? returnCurrentState() : null}
      />

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {msgTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{msg}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleEdit}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container noteList">
        {" "}
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClick={noteDetailDisplay}
            onDelete={deleteNotes}
          />
        ))}{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
