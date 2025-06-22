import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Cardproduct from './components/CardProduct';
import "./styles/Home.css";

function Home() {
    const [mostrarSidebar, setMostrarSidebar] = useState(false);

    const toggleSidebar = () => setMostrarSidebar(!mostrarSidebar);

    return (
        <div>
            <Sidebar visible={mostrarSidebar} />
            <Header toggleSidebar={toggleSidebar} />
            <div style={{ background: '#E4EDF7', width:'100vw', height:'100vh', margin: '0', padding: '0'} }>
                <Cardproduct />
            </div>
        </div>
    );
}

export default Home;
