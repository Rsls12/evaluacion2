import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Header  from "../../../components/Header/header.jsx";
import './adminStyle.css';

// Generate fake user data
const generateUsers = () => {
  const names = [
    "Juan Perez",
    "Maria Gonzales",
    "Marco Aurelio",
    "Ana Max",
    "Carlos Lopez",
    "Laura Mendez",
    "Alejandro Ruiz",
    "Sofia Martinez",
    "Diego Rodriguez",
    "Carmen Silva",
    "Roberto Torres",
    "Elena Vargas",
    "Fernando Castro",
    "Patricia Morales",
    "Luis Herrera",
    "Andrea Jimenez",
    "Miguel Santos",
    "Valeria Ramos",
    "Gabriel Flores",
    "Natalia Vega",
    "Sebastian Ortiz",
    "Isabella Cruz",
    "Mateo Delgado",
    "Camila Guerrero",
    "Nicolas Medina",
  ]

  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: `${name.toLowerCase().replace(" ", ".")}@email.com`,
    status: Math.random() > 0.2 ? "Activo" : "Inactivo",
    registrationDate: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}/01/2025`,
    avatar: `https://i.pravatar.cc/40?img=${index + 1}`,
  }))
}

// Generate fake orders
const generateOrders = () => {
  const users = generateUsers()
  const orders = []

  for (let i = 1; i <= 50; i++) {
    const user = users[Math.floor(Math.random() * users.length)]
    orders.push({
      id: `#${String(1234 + i).padStart(4, "0")}`,
      user: user.name,
      date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}/01/2025`,
      total: `$/199.00`,
      status: "Entregado",
    })
  }

  return orders
}

// Generate user transactions
const generateTransactions = () => {
  return [
    { id: "#1234", date: "20/01/2025", total: "$/199.00" },
    { id: "#1235", date: "20/01/2025", total: "$/199.00" },
    { id: "#1236", date: "20/02/2025", total: "$/199.00" },
    { id: "#1237", date: "20/04/2025", total: "$/199.00" },
    { id: "#1238", date: "20/03/2025", total: "$/199.00" },
    { id: "#1239", date: "20/03/2025", total: "$/199.00" },
  ]
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const pages = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, "...", currentPage, "...", totalPages)
      }
    }

    return pages
  }

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-arrow">
        ‹
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`pagination-btn ${currentPage === page ? "active" : ""} ${typeof page !== "number" ? "dots" : ""}`}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-arrow"
      >
        ›
      </button>
    </div>
  )
}

function Dashboard() {
  const [usersPage, setUsersPage] = useState(1)
  const [ordersPage, setOrdersPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState(null)

  const users = generateUsers()
  const orders = generateOrders()
  const transactions = generateTransactions()

  const usersPerPage = 7
  const ordersPerPage = 4

  const totalUsersPages = Math.ceil(users.length / usersPerPage)
  const totalOrdersPages = Math.ceil(orders.length / ordersPerPage)

  const currentUsers = users.slice((usersPage - 1) * usersPerPage, usersPage * usersPerPage)

  const currentOrders = orders.slice((ordersPage - 1) * ordersPerPage, ordersPage * ordersPerPage)

  const handleUserSelect = (user) => {
    setSelectedUser(user)
  }

  return (
    <>
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <span className="metric-label">Órdenes</span>
          <span className="metric-value">68</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Usuarios nuevos</span>
          <span className="metric-value">12</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Ingresos totales</span>
          <span className="metric-value">$/2348.00</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Users Table */}
        <div className="users-section">
          <div className="section-header">
            <h2>Usuarios registrados</h2>
          </div>

          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info">
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="user-avatar" />
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                    </td>
                    <td>
                      <div className="actions">
                        <button className="btn-deactivate">{user.status === 'Activo' ? 'Desactivar' : 'Activar'}</button>
                        <button className="btn-details" onClick={() => handleUserSelect(user)}>
                          Ver detalles
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagination currentPage={usersPage} totalPages={totalUsersPages} onPageChange={setUsersPage} />
          </div>
        </div>

        {/* User Details */}
        <div className="user-details">
            

          {selectedUser ? (
            <div className="user-profile">
              <div className="profile-header">
                <div className="profile-info">
                  <h3>{selectedUser.name}</h3>
                  <p>Correo: {selectedUser.email}</p>
                  <p>Fecha de registro: {selectedUser.registrationDate}</p>
                  <p>Estado: {selectedUser.status}</p>
                </div>
                <img
                  src={selectedUser.avatar || "/placeholder.svg"}
                  alt={selectedUser.name}
                  className="profile-avatar"
                />
              </div>

              <div className="transactions-table">
                <table class='transactions-table-principal'>
                  <thead>
                    <tr>
                      <th>#ID</th>
                      <th>Fecha</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td className="transaction-id">{transaction.id}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="no-user-selected">
              <p>Selecciona un usuario para ver sus detalles</p>
            </div>
          )}
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-section">
        <div className="section-header">
          <h2>Listado de órdenes</h2>
          <div className="orders-actions">
            <button className="btn-products">Ver productos</button>
            <button className="btn-view-orders">Ver todas las órdenes</button>
          </div>
        </div>

        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Usuario</th>
                <th>Fecha de orden</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.user}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className="status entregado">{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination currentPage={ordersPage} totalPages={totalOrdersPages} onPageChange={setOrdersPage} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard