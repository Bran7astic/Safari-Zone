export default function PokemonDisplay({ loading, image }) {
  
    if (!(loading || image)) return;

    return (
    <div className="imageContainer">
      {image &&
        (!loading ? (
          <img className="pkmnImage" src={image} />
        ) : (
          <img
            className="loading"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2l5cXN4cWRhZDNwZGtxdTJibHdmNHgwaHo0bGc2bDk1cDVtbGswbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jQbinPsqqfg8GFxbQw/giphy.gif"
          />
        ))}
    </div>
  );
}
