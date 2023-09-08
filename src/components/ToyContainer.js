import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, removeToy, updateToyLikes }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          removeToy={removeToy}
          updateToyLikes={updateToyLikes}
        />
      ))}
    </div>
  );
}

export default ToyContainer;

