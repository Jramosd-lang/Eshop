import './styles/Login.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

async function confirmLogin(email, password) {
    try {
        const response = await fetch('https://localhost:7121/api/Usuario/Login', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ correo: email, clave: password }) });

        if (!response.ok) {
            let errorMsg = 'Error de red o credenciales incorrectas';
            try {
                const errorData = await response.json();
                if (errorData && errorData.message) errorMsg = errorData.message;
            } catch { /* vacío */ }
            throw new Error(errorMsg);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        if (err instanceof TypeError && err.message === 'Failed to fetch') {
            throw new Error('No se pudo conectar con el servidor. Verifica que el backend esté corriendo y que no haya problemas de CORS.');
        }
        throw err;
    }
}

function App() {
    const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [error, setError] = useState(''); const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const user = await confirmLogin(email, password);
            if (user) {
                navigate('/home');
            } else {
                setError('Usuario o contraseña incorrectos');
            }
        } catch (err) {
            setError(err.message || 'Error al iniciar sesión');
        }
    };

    return (
        <div id="background" >
            <motion.div
                className="circle"
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                animate={{ x: [0, 200, 400, 200, 0], y: [0, 120, 240, 120, 0] }}
                id="circle1"
            ></motion.div>
            <motion.div
                className="circle"
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                animate={{ x: [0, 120, 240, 120, 0], y: [0, -80, 0, 80, 0] }}
                id="circle2"
            ></motion.div>
            <motion.div
                className="circle"
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                animate={{ x: [0, 40, 0, -40, 0], y: [0, -60, -120, -60, 0] }}
                id="circle3"
            ></motion.div>
            <motion.div
                className="circle"
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                animate={{ x: [0, -100, -200, 100, 250, 120, 0], y: [0, 200, 0, -200, 0, 100, 0] }}
                id="circle4"
            ></motion.div>
            <motion.div
                className="circle"
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                animate={{ x: [0, 100, 0, -100, 0], y: [0, -60, -120, -60, 0] }}
                id="circle5"
            ></motion.div>
            <motion.div
                className="circle"
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                animate={{ x: [0, -120, -60, 60, 120, 0], y: [0, 60, 120, 120, 60, 0] }}
                id="circle6"
            ></motion.div>

            <div id="bc">
                <div id="containerLogin">
                    <section className="containerLogin">
                        <form onSubmit={handleSubmit}>
                            <h3>Iniciar Sesión</h3>
                            <div className="container-group">
                                <div className="form-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="tú@ejemplo.com"
                                        required
                                        autoFocus
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="**********"
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="check-box"
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                    />
                                    <label htmlFor="remember">Recuérdame</label>
                                </div>
                            </div>
                            <p className="help-links">
                                <a href="/forgot-password">¿Olvidaste tu contraseña?</a> |
                                <a href="/register">Crear cuenta</a>
                            </p>
                            {error && <p style={{ color: '#333333' }}>{error}</p>}
                            <button className="buttonLogin" type="submit">Iniciar Sesión</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;