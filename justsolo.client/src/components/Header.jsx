import "./styleComponents/Header.css";
import { useNavigate } from "react-router-dom";



function Header({ toggleSidebar }) {

    const navigate = useNavigate();

    return (

        <header style={{
            backgroundColor: '#2e2d31ff',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '20px',
            fontFamily: 'Roboto',
            gap: '10px',
            position: 'relative'
        }}>
            
            <button
                onClick={toggleSidebar}
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    outline: '0'
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                    <rect y="4" width="24" height="2" rx="1" />
                    <rect y="11" width="24" height="2" rx="1" />
                    <rect y="18" width="24" height="2" rx="1" />
                </svg>
            </button>

            <a style={{ color: 'white' , marginRight: 'auto', fontWeight: '700', cursor: 'pointer'}}>ECOMMERCE</a>

            <div style={{ display: 'flex', gap: '30px', marginRight: '40px', color: 'white' }}>
                <li>Ofertas</li>
                <li>Mi carrito</li>
            </div>

            <div id="sectionLogin" style={{ display: 'flex'}}>
                <button
                    style={{
                        width: '100px',
                        padding: '20px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onClick={() => { navigate("/");}}
                >
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;
