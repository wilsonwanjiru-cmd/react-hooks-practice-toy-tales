import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch the toy data when the component mounts
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, []);

  const addToy = (newToy) => {
    // Add the new toy to the toys array
    setToys([...toys, newToy]);
  };

  const removeToy = (toyId) => {
    // Remove the deleted toy from the toys array
    setToys(toys.filter((toy) => toy.id !== toyId));
  };

  const updateToyLikes = (toyId, updatedLikes) => {
    // Update the likes of the specified toy in the toys array
    setToys((prevToys) =>
      prevToys.map((toy) =>
        toy.id === toyId ? { ...toy, likes: updatedLikes } : toy
      )
    );
  };

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        removeToy={removeToy}
        updateToyLikes={updateToyLikes}
      />
    </>
  );
}

export default App;

