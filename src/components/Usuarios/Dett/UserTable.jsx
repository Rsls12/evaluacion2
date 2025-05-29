// UserTable.jsx
import React from 'react';

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Fecha</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="red">#{user.id}</td>
            <td>{user.fecha}</td>
            <td>S/{user.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
