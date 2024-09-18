import React from "react";
import "../CSS Folder/UserProfileCard.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserProfileCard({ username, setIsOpen, userId }) {
  const navigate = useNavigate();
  const handleCross = () => {
    setIsOpen(false);
  };

  const option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const handleUserDelete = () => {
    fetch(`http://localhost:8000/profile/delete?id=${userId}`, option)
      .then((res) => res.json())
      .then((data) => {
        setIsOpen(false);
        navigate("/login");
        toast.success("Profile Deleted");
      });
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <i
          className="fa-solid fa-circle-xmark crossButton"
          onClick={handleCross}
        ></i>
        <div className="profileSection">
          <i className="fa-solid fa-user profileLogo"></i>
          <h2 className="username">Username : {username}</h2>
        </div>
        <button className="deleteButton" onClick={handleUserDelete}>
          Delete Profile
        </button>
      </div>
    </div>
  );
}

export default UserProfileCard;
