import "./Galeria.css"
import React, { useState, useEffect } from 'react';


  function GaleriaPets() {

    const petsLista = [
        { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4 },
        { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
        { id: 3, nome: "Luna", especie: "Cachorro", idade: 1 },
        { id: 4, nome: "Nino", especie: "Gato", idade: 3 },
        { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5 },
        { id: 6, nome: "Frajola", especie: "Gato", idade: 6 },
        { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2 },
        { id: 8, nome: "Tom", especie: "Gato", idade: 3 },
        { id: 9, nome: "Mel", especie: "Cachorro", idade: 1 },
        { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7 },
        { id: 11, nome: "Salem", especie: "Gato", idade: 2 },
        { id: 12, nome: "Max", especie: "Cachorro", idade: 3 },
        { id: 13, nome: "Amora", especie: "Gato", idade: 5 },
        { id: 14, nome: "Nina", especie: "Cachorro", idade: 4 },
        { id: 15, nome: "Simba", especie: "Gato", idade: 2 }
      ];

        const [pets, setPets] = useState([]);
      
        useEffect(() => {
          setPets(petsLista);
          console.log("Página da galeria carregada");
          return () => {
            console.log("Saindo da galeria de pets");
          };
        }, []);


  return (
    <div className="Pets">
      <h2>Galeria de pets</h2>
      
      <p>Total de pets disponíveis: {pets.length}</p>
      <div className="conteudo-pets">
      <ul className="lista-pets">
        {pets.map(pets => (
          <div key={pets.id} className="id-pet">
            <span className="nome-pet">{pets.nome}</span>
            <span className="especie-pet">{pets.especie}</span>
            <span className="idade-pet">{pets.idade}</span>
          </div>
          
        ))}
      </ul>
      </div>
    </div>
    );
    }

export default GaleriaPets;