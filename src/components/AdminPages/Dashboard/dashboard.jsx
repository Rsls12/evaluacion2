import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Header  from "../../../components/Header/header.jsx";
import './adminStyle.css';
import Pagination from '../../Categorias/Paginacion/Pag.jsx';
import TablaCategorias from '../../Categorias/CateTabla/TablaCategorias.jsx';

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

  const navigate = useNavigate();

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
            <TablaCategorias class="users-table"
                  headers={["Nombre", "Estado", "Acciones"]}
                  data={currentUsers}
                  renderRow={(item) => (
                    <>
                      <td>
                        <div className="user-info">
                          <img src={item.avatar || "/placeholder.svg"} alt={item.name} className="user-avatar" />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td><span className={`status ${item.status.toLowerCase()}`}>{item.status}</span></td>
                      <td>
                        <div className="actions">
                          <button className="btn-deactivate">{item.status === 'Activo' ? 'Desactivar' : 'Activar'}</button>
                          <button className="btn-details" onClick={() => handleUserSelect(item)}>
                            Ver detalles
                          </button>
                        </div>
                      </td>
                    </>
                  )}
            />
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
                <TablaCategorias class="transactions-table-principal"
                  headers={["#ID", "Fecha", "Total"]}
                  data={transactions}
                  renderRow={(item) => (
                    <>
                      <td className='transaction-id'>{item.id}</td>
                      <td>{item.date}</td>
                      <td>{item.total}</td>
                    </>
                  )}
                />
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
            <button onClick={() => navigate('/listaProductos')} className="btn-products">Ver productos</button>
            <button className="btn-view-orders">Ver todas las órdenes</button>
          </div>
        </div>

        <div className="table-container">
          <TablaCategorias class="orders-table"
                  headers={["#ID", "Usuario", "Fecha de orden", "Total", "Estado"]}
                  data={currentOrders}
                  renderRow={(item) => (
                    <>
                      <td className='transaction-id'>{item.id}</td>
                      <td>{item.user}</td>
                      <td>{item.date}</td>
                      <td>{item.total}</td>
                      <td><span className={"status entregado"}>{item.status}</span></td>
                    </>
                  )}
          />
          <Pagination currentPage={ordersPage} totalPages={totalOrdersPages} onPageChange={setOrdersPage} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard