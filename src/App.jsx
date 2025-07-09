import SearchCard from "./components/SearchCard";
import "./App.css";
import Header from "./components/Header";
import BanList from "./components/BanList";
import { useEffect, useState } from "react";
import SeenPokemon from "./components/SeenPokemon";

function App() {
  const [banlist, setBanlist] = useState([]);
  const [seen, setSeen] = useState([]);

  // useEffect( () => {
  //   console.log("Seen:", seen)
  // }, [seen] )

  const addBan = (type) => {
    if (!banlist.includes(type)) {
      setBanlist((prev) => [...prev, type]);
    }
  };

  const removeBan = (typeToRemove) => {
    setBanlist((prev) => prev.filter((type) => type !== typeToRemove));
  };

  console.log(banlist);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "55em",
          // backgroundColor: "red",
          margin: "0 auto"
        }}
      >
        <Header />
        <BanList banlist={banlist} removeBan={removeBan} />
        <SearchCard banlist={banlist} addBan={addBan} setSeen={setSeen} />
      </div>
      <SeenPokemon seen={seen} />
    </div>
  );
}

export default App;
