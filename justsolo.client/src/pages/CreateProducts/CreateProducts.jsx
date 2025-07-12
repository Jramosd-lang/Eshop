import { useState } from 'react';
import Header from '../../components/Header.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import CRUDProducts from '../../components/CRUDProducts.jsx';
import './CreateProducts.css';


function CreateProducts() {
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

export default CreateProducts;