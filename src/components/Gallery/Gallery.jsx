import "./Gallery.scss";

export default function Gallery({ list }) {
  return (
    <div className="card-wrapper">
      {list.map((item) => (
        <figure key={item.id}>
          <li className="card">
            <img className="cardImage" src={item.image} alt={item.name} />

            <figcaption className="card-info-name">{item.name}</figcaption>
            <figcaption className="card-info-data">
            🧬{item.species}🧬 <br></br>
              Now this character is {item.status}
            </figcaption>
          </li>
        </figure>
      ))}
    </div>
  );
}
