import './Header.css';

function Header({ toggleSidebar }) {
    return (
        <header style={{
            backgroundColor: '#2E2F48',
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

            <section style={{ display: 'flex', gap: '30px', marginRight: '40px', color: 'white' }}>
                <li>Ofertas</li>
                <li>Mi carrito</li>
            </section>

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
                    onClick={() => { window.location.href = '/'; }}
                >
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;
