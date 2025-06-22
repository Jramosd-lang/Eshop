function Cardproduct({ imagen, nombre, precio }) {
    return (
        <div>
            <img src={imagen} alt={nombre} />
            <h2>{nombre}</h2>
            <p>{precio}</p>
        </div>
    );
}