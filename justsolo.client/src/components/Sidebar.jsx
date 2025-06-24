import "./styleComponents/Sidebar.css";



function Sidebar({visible}){
    return (
        <aside
            className={`sidebar ${visible ? "mostrar" : "ocultar"}`}
            style={{
                position: 'fixed',
                top: '10%',
                left: '0',
                width: '250px',
                background: 'linear-gradient(to bottom,#000000, #2e2d31ff)',
                height: '100vh',
                paddingTop: '40px',
                color: 'white',
                zIndex: '3'
            }}
        >
            <h3 style={{ color: 'white', fontFamily: 'Roboto', width: 'auto', padding: '0 auto',fontWeight:'600' ,textAlign: 'center'}}>ECOMMERCE</h3>
            <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
                <li className="listaSideBar">Productos</li>
                <li className="listaSideBar">Categorías</li>
                <li className="listaSideBar">PQRS</li>
            </ul>
        </aside>
    );
}




export default Sidebar;