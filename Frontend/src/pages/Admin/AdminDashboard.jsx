import React from 'react'
import Sidebar from '../../layouts/Sidebar'
import CountUsers from '../../components/CountUsers'

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <CountUsers/>
    </div>
  )
}

export default AdminDashboard