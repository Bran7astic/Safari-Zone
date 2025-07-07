import { useEffect, useState } from "react";
import "../App.css";
import PokemonDisplay from "./PokemonDisplay";

export default function SearchCard({ addBan }) {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  const [attributes, setAttributes] = useState([]);

  const getRandomDexNum = () => {
    return Math.floor(Math.random() * 1025) + 1;
  };

  const getPokemon = async () => {
    setAttributes([]);
    const dexNum = getRandomDexNum();

    try {
      setLoading(true);
      const results = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${dexNum}`
      );

      if (!results.ok) {
        throw new Error(`HTTP Error, Status: ${results.status}`);
      }

      const data = await results.json();
      setTimeout(() => {
        setImg(data.sprites.other["official-artwork"].front_default);
        setLoading(false);
        // Parse data to json
        console.log(data);

        // Sets iamge
        const types = data.types.map((item) => item.type.name);
        setAttributes((prev) => [...prev, ...types]);
      }, 700);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="search-card">
      <PokemonDisplay loading={loading} image={img} />

      <div>
        {attributes &&
          attributes.map((item, idx) => 
            <button key={idx} onClick={() => addBan(item)}>{item}</button>
        )}
      </div>

      <button className="discover" onClick={getPokemon}>
        Discover 🔍
      </button>
    </div>
  );
}
