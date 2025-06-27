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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const user = await confirmLogin(email, password);
            if (user) {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 1500));
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
            {loading && (
                <motion.div className="container-spinner">
                    <motion.div
                        className="spinner"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            )}

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
                            <h3 className="titleLogin">Iniciar Sesión</h3>
                            <div className="container-group">
                                <div className="form-group">
                                    <label htmlFor="email">correo electrónico</label>
                                    <div className="inputGroup">
                                        <div className="inputSVG">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                stroke="#fffafa"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                                id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                                </g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5"
                                                width="18" height="14" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                                        </div>
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
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">contraseña</label>
                                    <div className="inputGroup">
                                        <div className="inputSVG">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 
                                                10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4
                                                17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854
                                                19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883
                                                10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
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
                                </div>
                                <div className="form-checked">
                                    <input
                                        className="check-box"
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                    />
                                    <label htmlFor="remember">Recuérdame</label>
                                    <a href="/forgot-password">¿Olvidaste tu contraseña?</a>

                                </div>
                            </div>
                         
                            <div className= "section-button-session">
                                <button className="buttonLogin" type="submit">Iniciar Sesión</button>
                                o inicia sesion cón
                                <button className="button-google"> 
                                <svg>
                                        <svg width="20" height="20" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 
                                            12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path
                                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 
                                            31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 
                                            71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 
                                            165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>

                                </svg>Google</button>
                                <div className="a-crear-cuenta">
                                    ¿no tienes cuenta? <a>Crea tu cuenta</a>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;