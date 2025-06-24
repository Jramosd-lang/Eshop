import React, { useState } from 'react';
import './styleComponents/CRUDProduct.css';

function Products() {
  

    const [Name, setName] = useState('');
    const [UrlImage, setUrlImage] = useState('');
    const [Stock, setStock] = useState('');
    const [Value, setValue] = useState('');
    const [Description, setDescription] = useState('');

    return (
        <div className="targetProductsDev">
            <h1>Gesti{'\u00F3'}n de productos</h1>
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
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="sectionInput">
                    <label>Cargar imagen</label>
                    <input
                        type="file"
                        name="UrlImage"
                        required
                        autoFocus
                        value={UrlImage}
                        onChange={e => setUrlImage(e.target.value)}
                    />
                </div>
                <div className="sectionInput">
                    <label>Stock</label>
                    <input
                        className="input"
                        type="number"
                        placeholder="Introduzca numero en inventario"
                        name="Stock"
                        required
                        autoFocus
                        value={Stock}
                        onChange={e => setStock(e.target.value)}
                    />
                </div>
                <div className="sectionInput">
                    <label>Valor del producto</label>
                    <input
                        className="input"
                        placeholder="insertar valor del producto"
                        type="number"
                        name="Value"
                        required
                        autoFocus
                        value={Value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div id="sectionArea" >
                    <label>Descripci{'\u00F3'}n </label><br />
                    <textarea 
                        style={{ borderRadius: '12px' }}
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Escribe una descripci{'\u00F3'}n detallada..."
                        rows={4}
                        cols={50}
                    />
                </div>
            </form>
            <button>Agregar</button>
        </div>
    );
}

export default Products;
