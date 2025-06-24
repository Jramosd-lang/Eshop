import "./styleComponents/Sidebar.css";



function Sidebar({visible}){
    return (
        <aside
            className={`sidebar ${visible ? "mostrar" : "ocultar"}`}
            style={{
                position: 'fixed',
                top: '12.75%',
                width: '250px',
                height: '100vh',
                paddingTop: '40px',
                color: 'white',
                borderRight: '5px solid #3f4489'
            }}
        >
            <h3 style={{ color: 'white', fontFamily: 'Roboto', width: 'auto', padding: '0 auto',fontWeight:'600' ,textAlign: 'center'}}>ECOMMERCE</h3>
            <div>
                <li class="listaSideBar"> Productos</li>
                <li class="listaSideBar">Categorias</li>
                <li class="listaSideBar">PQRS</li>
            </div>
        </aside>
    );
}




export default Sidebar;