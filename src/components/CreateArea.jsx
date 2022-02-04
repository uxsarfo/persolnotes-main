import React, { useState, useEffect } from "react";

import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";

function CreateArea({ onAdd, editNote, handleEdit }) {
  const [isExpanded, setExpanded] = useState(false);
  const [tempState, setTempState] = useState(editNote);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (editNote) {
      console.log(editNote);
      const { msg, msgTitle } = editNote;
      setNote({
        title: msgTitle,
        content: msg,
      });
    }
    return () => {
      editNote = null;
    };
  }, [editNote]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>

        {tempState ? (
          <button onClick={submitButton}>
            <BiEdit size={35} />
          </button>
        ) : (
          <button onClick={submitButton}>
            <IoIosAdd size={35} />
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
