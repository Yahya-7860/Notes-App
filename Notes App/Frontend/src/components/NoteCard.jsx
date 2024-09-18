import React, { useState } from "react";
import "../CSS Folder/NoteCard.css";
import { useDispatch } from "react-redux";
import { deleteNote } from "../slice/noteSlice";
import Modal from "./Modal";

function NoteCard({ title, id, content, setNotes }) {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const options2 = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const hclick = (e) => {
    e.stopPropagation();
    fetch(`http://localhost:8000/note/delete?id=${id}`, options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(deleteNote(id));
        return fetch("http://localhost:8000/note/get", options2)
          .then((res) => res.json())
          .then((data) => {
            setNotes(data);
          });
      });
  };

  const hModalClick = () => {
    setisOpen(true);
  };

  return (
    <>
      <div className="cardTextContainer" onClick={hModalClick}>
        <div className="cardText">
          <p className="titleText">{title}</p>
          <p className="contentText">{content}</p>
          <i
            className="fa-solid fa-trash deleteBTN"
            onClick={(e) => hclick(e)}
          ></i>
        </div>
      </div>
      {isOpen && <Modal {...{ title, content, setisOpen, id, setNotes }} />}
    </>
  );
}

export default NoteCard;
