"use client"; 

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Image from 'next/image';
import styles from '../../page.module.css'; 

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [name]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>{pokemon.name}</h1>
      <Image
        className={styles['pokemon-image']}
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width={300}
        height={300}
      />
      <div className={styles.details}>
        <h2>Details</h2>
        <p>Height: {pokemon.height} decimetres</p>
        <p>Weight: {pokemon.weight} hectograms</p>
        <p>Base Experience: {pokemon.base_experience}</p>
        <h3>Abilities</h3>
        <ul className={styles.abilities}>
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
