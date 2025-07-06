import "../App.css"

export default function SearchCard( {addBan} ) {
    return (
        <div class="search-card">
            <button onClick={addBan}>Discover 🌱</button>
        </div>
    );
}