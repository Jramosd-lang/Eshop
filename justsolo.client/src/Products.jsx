import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CRUDProducts from './components/CRUDproducts';
import './styles/Products.css';


function Products() {
    const [mostrarSidebar, setMostrarSidebar] = useState(false);

    const toggleSidebar = () => setMostrarSidebar(!mostrarSidebar);

    return (
        <div> 
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar visible={mostrarSidebar} />
            <div className="body">
                <CRUDProducts />
            </div>
        </div>
    );
}

export default Products;