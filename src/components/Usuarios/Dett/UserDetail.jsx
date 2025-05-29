import React from 'react';
import accion from "../../../../public/img/acciones.png"
const UserDetail = ({ user }) => {
  return (
    <div className="box">
      <h2>Últimas Órdenes</h2>
      <div className="user-detail">
        <img src={user.img} alt="" className="avatar-large" />
        <div>
          <p><strong>{user.nombre}</strong></p>
          <p>Correo: {user.email}</p>
          <p>Fecha de registro: {user.fechaRegistro}</p>
          <p>Estado: {user.estado}</p>
        </div>
      </div>
      <table>
        <thead>
          <tr><th>#ID</th><th>Fecha</th><th>Total</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {user.usuarios.map((orden, index) => (
            <tr key={index}>
              <td className="red">#{orden.id}</td>
              <td>{orden.fecha}</td>
              <td>S/{orden.total}</td>
              <td><img src={accion} alt="accion" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
