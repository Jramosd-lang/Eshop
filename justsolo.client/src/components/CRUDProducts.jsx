import { useState } from 'react';
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

            <CardProduct/>
        </div>
    );
}

export default Products;
