import { useState } from "react";
import "../App.css";
import PokemonDisplay from "./PokemonDisplay";
import TypeButton from "./TypeButton";
export default function SearchCard({ banlist, addBan, setSeen }) {

  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [name, setName] = useState("");

  const fullBan = banlist.length==18

  const getRandomDexNum = (length) => {
    return Math.floor(Math.random() * length) + 1;
  };

  const getPokemon = async () => {

    setAttributes([]);

    try {
      setLoading(true);

      let banned = true
      let data, types

      while (banned) {

        const dexNum = getRandomDexNum(1025);

        const results = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${dexNum}`
        );

        if (!results.ok) {
          throw new Error(`HTTP Error, Status: ${results.status}`);
        }

        data = await results.json();
        types = data.types.map((item) => item.type.name);
        
        const isValid = !types.some(type => banlist.includes(type));

        if (isValid) {
          banned = false;
        }
      }

      const pokemonInfo = data;
      console.log("Types:", types)
      console.log(pokemonInfo);

      setTimeout(() => {
        const sprite = pokemonInfo.sprites.other["official-artwork"].front_default
        const name = pokemonInfo.name
        setImg(sprite);
        setName(name);
        setLoading(false);
        setAttributes((prev) => [...prev, ...types]);
  
        const pokemonObj = {
          sprite: sprite,
          name: capitalize(name)
        }

        setSeen(prev => [...prev, pokemonObj])

      }, 700);


    } catch (error) {
      console.error("Error:", error);
    }
  };

  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="search-card">
      {name && !loading && !fullBan && (
        <h2>
          You discovered{" "}
          {"aeiou".includes(name.charAt(0).toLowerCase()) ? "an" : "a"}{" "}
          {capitalize(name)}!
        </h2>
      )}

      <PokemonDisplay loading={loading} image={img} fullBan={fullBan}/>

      <div style={{display: "flex", gap: "1em"}}>
        {attributes && !fullBan &&
          attributes.map((item, idx) => (
            <TypeButton key={idx} type={item} action={addBan}/>
          ))}
      </div>

      <button className="discover" onClick={getPokemon}>
        Discover 🔍
      </button>
    </div>
  );
}
