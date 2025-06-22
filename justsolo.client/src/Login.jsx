/* eslint-disable no-useless-catch */

import './styles/App.css';
import { useState } from 'react';


async function confirmLogin(email, password) {
    try {
        const response = await fetch('https://localhost:7121/api/Usuario/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ correo: email, clave: password }) 
        });

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const user = await confirmLogin(email, password);
            if (user) {
                window.location.href = '/home';
            } else {
                setError('Usuario o contraseña incorrectos');
            }
        } catch (err) {
            setError(err.message || 'Error al iniciar sesión');
        }
    };

    return (
        <div id="background" style={{
            fontFamily: 'Roboto', backgroundImage: 'url("/Resources/circle-scatter-haikei.svg")',
            backgroundSize: 'cover', width: '100vw', height: '100vh', color: 'white',
            display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div id="containerLogin">
                <div className="containerImage">
                    <img src="/Resources/circle-scatter-haikei (2).svg" alt="" />
                </div>
                <section className="containerInputLogin">
                    <form onSubmit={handleSubmit}>
                        <h3>Iniciar Sesión</h3>
                        <img src="/Resources/usuario (3).png"/>
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
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <button type="submit">Iniciar Sesion</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default App;