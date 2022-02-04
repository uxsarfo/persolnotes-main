import React from "react";

function NoteDetail({ id }) {
  console.log("I was called with id=>", id);
  const msg = document.getElementById(id).innerHTML;
  console.log(msg);
  return (
    <div>
      <a href="#openModal-about">Modal</a>
      <div id="openModal-about" class="modalDialog">
        <div>
          <a href="#close" title="Close" class="close">
            X
          </a>
          <h2>Modal</h2>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}

export { NoteDetail };
