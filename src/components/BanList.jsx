import "../App.css";
import TypeButton from "./TypeButton";

export default function BanList({ banlist, removeBan }) {
  return (
    <div className="banlist">
      <h2>Scratch List</h2>
      <hr style={{width: "10em", marginTop: -15}}></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        {banlist.map((item, idx) => (
          // <button onClick={() => removeBan(item)} key={idx}>{item.toUpperCase()}</button>
          <TypeButton key={idx} action={removeBan} type={item} />
        ))}
      </div>
    </div>
  );
}
