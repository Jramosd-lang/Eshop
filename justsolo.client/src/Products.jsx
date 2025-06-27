import { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import CRUDProducts from './components/CRUDProducts.jsx';
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