import React, { useState } from 'react';
import './styleComponents/CRUDProduct.css';
import CardProduct from './CardProduct.jsx';

function Products() {
    const [Name, setName] = useState('');
    const [UrlImage, setUrlImage] = useState('');
    const [Stock, setStock] = useState('');
    const [Value, setValue] = useState('');
    const [Description, setDescription] = useState('');

    return (
        <div className="containerCRUDProduct">
            <div className="targetProductsDev">
                <h1>Gestión de productos</h1>
                <form>
                    <div className="sectionInput">
                        <label>Nombre del producto</label>
                        <input
                            className="input"
                            type="text"
                            name="Name"
                            placeholder="Insertar nombre del producto"
                            required
                            autoFocus
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="sectionInput">
                        <label>Cargar imagen</label>
                        <input
                            type="file"
                            name="UrlImage"
                            required
                            autoFocus
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    const file = e.target.files[0];
                                    const newUrl = URL.createObjectURL(file);

                                    // Limpia la URL anterior si existía
                                    if (UrlImage) {
                                        URL.revokeObjectURL(UrlImage);
                                    }

                                    setUrlImage(newUrl);
                                }
                            }}
                        />
                    </div>

                    <div className="sectionInput">
                        <label>Stock</label>
                        <input
                            className="input"
                            type="number"
                            placeholder="Introduzca número en inventario"
                            name="Stock"
                            required
                            autoFocus
                            value={Stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>

                    <div className="sectionInput">
                        <label>Valor del producto</label>
                        <input
                            className="input"
                            placeholder="Insertar valor del producto"
                            type="number"
                            name="Value"
                            required
                            autoFocus
                            value={Value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>

                    <div id="sectionArea">
                        <label>Descripción</label><br />
                        <textarea
                            
                            style={{ borderRadius: '12px', padding:'5px' }}
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Escribe una descripción detallada..."
                            rows={4}
                            cols={50}
                        />
                    </div>
                </form>
                <button>Agregar</button>
            </div>

            <div
                className="containerCard"
                style={{
                    background: 'none',
                    width: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    justifyItems: 'flex-start',
                    height: '400px',
                    fontFamily: 'Roboto',
                    alignItems: 'center',
                    position: 'relative',
                    fontWeight: '900',
                }}
            >
                <div style={{ height: '250px' }}>
                    <img
                        className="img"
                        src={UrlImage || ''}
                        style={{ width: '250px', height: '100%', objectFit: 'cover' }}
                        alt="Vista previa"
                    />
                </div>

                <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '900' }}>{Name}</h2>
                    <p style={{ fontSize: '18px', marginTop: '-10px', color: '#10b981' }}>
                        {`$${Value} COP`}
                    </p>
                </div>

                <button className="botonCompra">
                    <svg className="icono-carrito" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>{' '}
                    COMPRAR
                </button>

                <button
                    className="buttonFavorite"
                    style={{
                        border: 'none',
                        cursor: 'pointer',
                        width: '40px',
                        height: '40px',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        zIndex: 2,
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.27 4.41c.23-.52.35-.78.5-.85.14-.07.3-.07.44 0 .15.07.27.33.5.85l1.84 4.14c.07.15.11.24.17.3.05.06.12.11.18.14.07.03.15.04.32.06l4.5.48c.56.06.84.09.96.22.11.11.16.27.13.42-.03.18-.24.37-.65.74l-3.36 3.03c-.13.11-.2.18-.24.25-.04.06-.07.14-.08.22-.01.08.01.17.04.32l.94 4.43c.12.56.17.84.09.99-.07.14-.21.26-.38.29-.18.03-.42-.09-.91-.37l-3.92-2.26a.61.61 0 0 0-.48 0l-3.92 2.26c-.5.28-.74.4-.91.37a.44.44 0 0 1-.38-.29c-.08-.15-.03-.43.09-.99l.94-4.43c.03-.15.05-.24.04-.32a.61.61 0 0 0-.08-.22c-.04-.07-.11-.14-.24-.25l-3.36-3.03c-.41-.37-.62-.56-.65-.74a.43.43 0 0 1 .13-.42c.12-.13.4-.16.96-.22l4.5-.48c.17-.02.25-.03.32-.06.06-.03.13-.08.18-.14.06-.06.1-.15.17-.3l1.84-4.14Z"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Products;
