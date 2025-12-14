function GenreFilter({ genres }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        backgroundColor: "rgb(240,240,240)",
        padding: "20px",
      }}
      onClick={(e) => {
        if (e.target.tagName === "BUTTON") {
          console.log(`Filtering by ${e.target.textContent}`);
        }
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Filter by Genre</h1>
      {genres.map((genre) => (
        <button
          key={genre}
          style={{ marginRight: "8px", padding: "10px", marginBottom: "10px" }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
