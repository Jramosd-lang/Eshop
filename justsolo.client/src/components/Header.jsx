import "./styleComponents/Header.css";
import { useNavigate } from "react-router-dom";



function Header({ toggleSidebar }) {

    const navigate = useNavigate();

    return (

        <header style={{
            background: 'rgba(23, 23, 23, 0.85)',
            backdropFilter:'blur(30px)',
            height: '10vh',
            borderBottom:'1px solid #ffffff23',
            display: 'flex',
            alignItems: 'center',
            paddingRight: '20px',
            justifyContent: 'flex-end',
            fontFamily: 'Roboto',
            position: 'absolute',
            zIndex:'3',
            width: '100vw',
            padding:' 0 10px'
        }}>
            
            <button className="menu"
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

            
            <div className="logoHeader" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px',marginRight:'auto' }}>
                <div className="logo-container" onClick={() => navigate("/home")}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="code-icon" 
                    aria-hidden="true">
                        <path d="m16 18 6-6-6-6"></path>
                        <path d="m8 6-6 6 6 6"></path>
                     </svg>
                </div> 
                <div className="logo">

                </div>
                <div className="logo-text-container">
                     <a className="logo" style={{marginRight: 'auto', fontWeight: '900',fontSize:'25px', cursor: 'pointer'}}>ECOMMERCE</a>

                </div>

            </div>

            <ul className="flex-gap-style">
                <li className="optionsHeader">Ofertas</li>
                <li className="optionsHeader">Mi carrito</li>
            </ul>

            <div id="sectionLogin">
                <button className="buttonLogear"
                    onClick={() => { navigate("/");}}
                >
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;
