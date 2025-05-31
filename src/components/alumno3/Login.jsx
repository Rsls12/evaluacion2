import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ← importante
import './Login.css';
import Footer from '../Footer/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Completa todos los campos');
      return;
    }
    if (email === 'usuario@gmail.com' && password === '123456') {
      alert('Inicio exitoso');
      navigate('/');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <input
            type="email"
            placeholder="usuario@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Iniciar sesión</button>

          <div className="login-links">
            <Link to="/register">Registrarme</Link>
            <Link to="/recover">¿Olvidé mi contraseña?</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
