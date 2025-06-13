import React from "react";
import "../pages/Galeria.css"

function PetBloco({ pet }) {
  return (
    <div className="pet-bloco">
      <h3>{pet.nome}</h3>
      <p><strong>Espécie:</strong> {pet.especie}</p>
      <p><strong>Idade:</strong> {pet.idade} anos</p>
    </div>
  );
} 

export default PetBloco;