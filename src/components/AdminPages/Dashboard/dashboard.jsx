import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Header  from "../../../components/Header/header.jsx";
import './adminStyle.css';

// Componente de paginación
function Pagination({ currentPage = 1, totalPages = 10 }) {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button className="flex items-center justify-center h-8 w-8 border border-gray-300 rounded hover:bg-gray-50">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="h-8 w-8 bg-[#ff6b61] text-white rounded-full hover:bg-[#e55a51] font-medium">
        1
      </button>

      <button className="h-8 w-8 border border-gray-300 rounded-full hover:bg-gray-50">
        2
      </button>

      <button className="h-8 w-8 border border-gray-300 rounded-full hover:bg-gray-50">
        3
      </button>

      <span className="mx-1">...</span>

      <button className="h-8 w-8 border border-gray-300 rounded-full hover:bg-gray-50">
        10
      </button>

      <button className="flex items-center justify-center h-8 w-8 border border-gray-300 rounded hover:bg-gray-50">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// Componente de tarjetas de métricas
function MetricsCards() {
  const metrics = [
    { label: "Órdenes", value: "68" },
    { label: "Usuarios nuevos", value: "12" },
    { label: "Ingresos totales", value: "s/2348.00" }
  ];

  return (
    <div class="contenedor-tarjetas-metricas">
      {metrics.map((metric, index) => (
        <div key={index} class="contenedor-metrica">
          <p class="info-metricas">{metric.label}</p>
          <p class="info-metricas">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}

// Componente de tabla de usuarios
function UsersTable() {
    const usuariosRegistrados = [
        { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face", nombre:"Juan Perez", estado: "Activo", correo: "jperez@gmail.com", id: 1, fechaDeRegistro: "18/10/2024", compras: [{id:1324, fecha:"14/12/2024", totalPrecio:"199.99"},{id:1340, fecha:"30/12/2024", totalPrecio:"299.99"}] },
        { avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face", nombre:"Maria Gonzales", estado: "Inactivo", correo: "mgonzales@gmail.com", id: 2, fechaDeRegistro: "20/10/2024", compras: [] },
        { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", nombre:"Carlos Lopez", estado: "Activo", correo: "clopez@gmail.com", id: 3, fechaDeRegistro: "22/10/2024", compras: [{id:1325, fecha:"15/12/2024", totalPrecio:"99.99"}] },
        { avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face", nombre:"Laura Mendez", estado: "Activo", correo: "lmendez@gmail.com", id: 4, fechaDeRegistro: "25/10/2024", compras: [{id:1326, fecha:"16/12/2024", totalPrecio:"149.99"}] },
        { avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face", nombre:"Alejandro Ruiz", estado: "Inactivo", correo: "aruiz@gmail.com", id: 5, fechaDeRegistro: "28/10/2024", compras: [] },
        { avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face", nombre:"Sofia Torres", estado: "Activo", correo: "storres@gmail.com", id: 6, fechaDeRegistro: "30/10/2024", compras: [{id:1327, fecha:"17/12/2024", totalPrecio:"249.99"}] },
        { avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face", nombre:"Javier Martinez", estado: "Activo", correo: "jmartinez@gmail.com", id: 7, fechaDeRegistro: "02/11/2024", compras: [{id:1328, fecha:"18/12/2024", totalPrecio:"349.99"}] },
        { avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face", nombre:"Isabel Garcia", estado: "Inactivo", correo: "igarcia@gmail.com", id: 8, fechaDeRegistro: "05/11/2024", compras: [] },
    ];
  
    const users = [
    { id: 1, name: "Juan Perez", status: "Activo", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
    { id: 2, name: "Maria Gonzales", status: "Activo", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
    { id: 3, name: "Marco Aurelio", status: "Activo", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
    { id: 4, name: "Ana Diaz", status: "Activo", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" },
    { id: 5, name: "Carlos Lopez", status: "Activo", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" },
    { id: 6, name: "Laura Mendez", status: "Activo", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" },
    { id: 7, name: "Alejandro Ruiz", status: "Inactivo", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face" }
  ];

  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                <td>
                    <div>
                    <div>
                        <img
                        src={user.avatar || "/placeholder.svg"}
                        />
                    </div>
                    <div>
                        <div>{user.name}</div>
                    </div>
                    </div>
                </td>
                <td>
                    <span>
                    {user.status}
                    </span>
                </td>
                <td>
                    <div>
                    <button>
                        {user.status === "Activo" ? "Desactivar" : "Activar"}
                    </button>
                    <button>
                        Ver detalles
                    </button>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

// Componente de detalles del usuario
function UserDetails() {
  const userOrders = [
    { id: "#1234", date: "24/01/2024", total: "s/780.00" },
    { id: "#1235", date: "20/01/2024", total: "s/780.00" },
    { id: "#1677", date: "18/12/2023", total: "s/780.00" },
    { id: "#1543", date: "25/11/2023", total: "s/180.00" },
    { id: "#1783", date: "10/11/2023", total: "s/198.00" },
    { id: "#1743", date: "20/10/2023", total: "s/780.00" }
  ];

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold">Juan Perez</h3>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-gray-500">Correo:</span> juan.perez@gmail.com
            </p>
            <p className="text-sm">
              <span className="text-gray-500">Fecha de registro:</span> 20/01/2024
            </p>
            <p className="text-sm">
              <span className="text-gray-500">Estado:</span> <span className="text-green-600">Activo</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
              alt="Juan Perez"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 text-left text-sm font-medium text-gray-500">#ID</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Fecha</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userOrders.map((order, index) => (
              <tr key={index}>
                <td className="py-3 text-sm text-red-500 font-medium">{order.id}</td>
                <td className="py-3 text-sm">{order.date}</td>
                <td className="py-3 text-sm font-medium">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Componente de tabla de órdenes
function OrdersTable() {
  const orders = [
    { id: "#1234", user: "Alejandro Ruiz", date: "20/01/2025", total: "s/199.00", status: "Entregado" },
    { id: "#1234", user: "Alejandro Ruiz", date: "20/01/2025", total: "s/199.00", status: "Entregado" },
    { id: "#1234", user: "Alejandro Ruiz", date: "20/01/2025", total: "s/199.00", status: "Entregado" },
    { id: "#1234", user: "Alejandro Ruiz", date: "20/01/2025", total: "s/199.00", status: "Entregado" }
  ];

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">#ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Usuario</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Fecha de órden</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Total</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap text-sm text-red-500 font-medium">{order.id}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">{order.user}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">{order.date}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{order.total}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="text-sm text-green-600 font-medium">{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Componente principal del Dashboard
function Dashboard() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 space-y-6 max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        {/* Tarjetas de métricas */}
        <MetricsCards />

        {/* Sección de usuarios y detalles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Usuarios registrados</h2>
              <button className="bg-[#ff6b61] hover:bg-[#e55a51] text-white px-4 py-2 rounded text-sm font-medium">
                Ver todos los usuarios
              </button>
            </div>
            <UsersTable />
            <Pagination currentPage={1} totalPages={10} />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Detalle del usuario</h2>
            <UserDetails />
          </div>
        </div>

        {/* Sección de órdenes */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Listado de órdenes</h2>
            <div className="flex gap-2">
              <button className="bg-[#ff6b61] hover:bg-[#e55a51] text-white px-4 py-2 rounded text-sm font-medium">
                Ver productos
              </button>
              <button className="bg-[#ff6b61] hover:bg-[#e55a51] text-white px-4 py-2 rounded text-sm font-medium">
                Ver todas las órdenes
              </button>
            </div>
          </div>
          <OrdersTable />
          <Pagination currentPage={1} totalPages={10} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;