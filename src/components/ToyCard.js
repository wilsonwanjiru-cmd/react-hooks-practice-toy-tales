import React from "react";

function ToyCard({ toy, removeToy, updateToyLikes }) {
  const handleLike = () => {
    // Increase the number of likes
    const updatedLikes = toy.likes + 1;

    // Make a PATCH request to update the likes on the server
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then(() => {
        // Update the toy's likes in the parent component
        updateToyLikes(toy.id, updatedLikes);
      })
      .catch((error) => {
        console.error("Error updating likes:", error);
      });
  };

  const handleDelete = () => {
    // Make a DELETE request to delete the toy from the server
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the toy from the parent component
        removeToy(toy.id);
      })
      .catch((error) => {
        console.error("Error deleting toy:", error);
      });
  };

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes</p>
      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;

