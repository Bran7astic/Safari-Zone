import "../App.css"

export default function BanList({ list, removeBan }) {
    
    return (
        <div className="banlist">
            <h2>Ban List</h2>
            {list.map((item, idx) => (
                <button onClick={() => removeBan(item)} key={idx}>{item}</button>
            ))}
        </div>
    );
}