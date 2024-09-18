import React, { useRef, useState } from "react";
import "../CSS Folder/TaskBar.css";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../slice/noteSlice";
import { useNavigate } from "react-router-dom";

function TaskBar() {
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hclick = (e) => {
    e.preventDefault();
    const content = contentRef.current.value;
    const title = titleRef.current.value;
    if (title !== "") {
      const userId = localStorage.getItem("userId");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, content, userId }),
      };

      fetch(`http://localhost:8000/note/add`, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(
            addNote({ title: title, content: content, id: data.note._id })
          );
          contentRef.current.value = "";
          titleRef.current.value = "";
          if (data.Error === "Invalid token or session Expired, Login Again") {
            navigate("/login");
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={hclick} className="taskbar_container">
        <div className="textbar">
          <input
            type="text"
            autoFocus
            placeholder="Title"
            className="textBox titleBox"
            ref={titleRef}
          />
          <input
            type="text"
            placeholder="Take a note..."
            className="textBox contentBox"
            ref={contentRef}
          />
        </div>
        <button type="submit" className="addbtn" onClick={hclick}>
          Add
        </button>
      </form>
    </>
  );
}

export default TaskBar;
