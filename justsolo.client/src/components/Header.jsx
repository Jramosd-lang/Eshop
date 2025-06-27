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
            position: 'absolute',
            zIndex:'3',
            width: '100%',
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

            <img className="logoSVG" style={{ width:'95px',height:'80px'}} src="./Resources/Frame 1 (2).svg" />

            <a className="logo" style={{ color: 'white' , marginRight: 'auto', fontWeight: '900',fontSize:'25px', cursor: 'pointer'}}>ECOMMERCE</a>

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
