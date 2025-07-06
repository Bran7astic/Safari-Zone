import "../App.css"

export default function BanList({ list }) {
    
    return (
        <div className="banlist">
            {list.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
        </div>
    );
}