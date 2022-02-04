import React from "react";
import { MdDelete } from "react-icons/md";

function Note({ title, content, onDelete, id, onClick }) {
  return (
    <div className="note" id={id} onClick={() => onClick(id)}>
      <div id="headerAndIcon">
        <h1>{title}</h1>
        <i
          class=""
          id="iconBesideHeader"
          aria-hidden="true"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></i>
      </div>
      <p data-bs-toggle="modal" data-bs-target="#exampleModal">
        {content}
      </p>
      <div className="iconWrapper">
        <div className="icons">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <small>2022/10/{Math.floor(Math.random(new Date().getDay) * 31)}</small>
        <button onClick={() => onDelete(id)}>
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
}

export default Note;
