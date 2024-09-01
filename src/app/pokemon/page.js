"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../Navbar";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Pokemon List</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>
            <Link href={`/pokemon/${poke.name}`}>
              {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
