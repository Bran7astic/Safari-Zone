import "../App.css";

function PokemonCard({ name, sprite }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10em",
      }}
    >
      <img src={sprite} className="pkmnImage" />
      <h4>{name}</h4>
    </div>
  );
}

export default function SeenPokemon({ seen }) {
  return (
    <div>
      <h2>Pokemon Seen</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          flexDirection: "row-reverse",
          gap: "2em",
          width: "100%",
          justifyContent: "center",
        //   backgroundColor: "blue"
        }}
      >
        {seen.map((item, idx) => (
          <PokemonCard key={idx} name={item.name} sprite={item.sprite} />
        ))}
      </div>
    </div>
  );
}
