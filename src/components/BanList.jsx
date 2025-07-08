import "../App.css"

export default function BanList({ banlist, removeBan }) {
    
    return (
        <div className="banlist">
            <h2>Ban List</h2>
            {banlist.map((item, idx) => (
                <button onClick={() => removeBan(item)} key={idx}>{item.toUpperCase()}</button>
            ))}
        </div>
    );
}