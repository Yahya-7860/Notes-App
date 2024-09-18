import React, { useState } from "react";
import "../CSS Folder/Modal.css";

function Modal({ title, content, setisOpen, id, setNotes }) {
  const [titleContent, setTitleContent] = useState({
    title: title,
    content: content,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTitleContent({
      ...titleContent,
      [name]: value,
    });
  };

  const handleCross = () => {
    setisOpen(false);
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(titleContent),
  };

  const options2 = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const handleSaveBtn = () => {
    fetch(`http://localhost:8000/note/update?id=${id}`, options)
      .then((res) => res.json())
      .then((data) => {
        return fetch("http://localhost:8000/note/get", options2)
          .then((res) => res.json())
          .then((data) => {
            setNotes(data);
          });
      });
    setisOpen(false);
  };
  return (
    <div className="mainContainer">
      <div className="cardContainer">
        <i
          className="fa-solid fa-circle-xmark crossBTN"
          onClick={handleCross}
        />
        <textarea
          name="title"
          value={titleContent.title}
          onChange={handleChange}
          rows={3}
          cols={25}
          className="ModalTitle"
        />
        <textarea
          name="content"
          value={titleContent.content}
          onChange={handleChange}
          rows={5}
          cols={38}
          className="ModalContainer"
        />
        <button className="ModalBTN" onClick={handleSaveBtn}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Modal;
