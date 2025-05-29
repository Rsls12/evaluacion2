import React from 'react';
import UserDetail from './UserDetail';
import '../Dett/Fijo.css'
const Fijo = () => {
  const usuarioSeleccionado = {
    nombre: 'Juan Perez',
    email: 'juan.perez@gmail.com',
    fechaRegistro: '20/01/2025',
    estado: 'Activo',
    img: 'https://i.pravatar.cc/100?img=1',
    usuarios: [
      { id: '1234', fecha: '20/01/2025', total: '199.00' },
      { id: '2356', fecha: '20/02/2025', total: '199.00' },
      { id: '4577', fecha: '20/03/2025', total: '199.00' },
      { id: '3743', fecha: '20/03/2025', total: '199.00' },
    ],
  };

  return (
    <>
    <h1>Detalles del Usuario</h1>
    <div>
      <UserDetail user={usuarioSeleccionado} />
    </div>
    </>
  );
};

export default Fijo;

