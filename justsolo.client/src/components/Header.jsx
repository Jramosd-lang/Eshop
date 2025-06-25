import "./styleComponents/Header.css";
import { useNavigate } from "react-router-dom";



function Header({ toggleSidebar }) {

    const navigate = useNavigate();

    return (

        <header style={{
            background: 'rgba(23, 23, 23, 0.85)',
            backdropFilter:'blur(30px)',
            height: '10vh',
            borderBottom:'1px solid white',
            display: 'flex',
            alignItems: 'center',
            paddingRight: '20px',
            justifyContent: 'flex-end',
            fontFamily: 'Roboto',
            gap: '10px',
            position: 'absolute',
            zIndex:'3',
            width:'100%'
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

            <a className="logo" style={{ color: 'white' , marginRight: 'auto', fontWeight: '900',fontSize:'25px', cursor: 'pointer'}}>ECOMMERCE</a>

            <div style={{ display: 'flex', gap: '30px', marginRight: '40px', color: 'white' }}>
                <li>Ofertas</li>
                <li>Mi carrito</li>
            </div>

            <div id="sectionLogin" style={{ display: 'flex', marginRight:'40px' }}>
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
