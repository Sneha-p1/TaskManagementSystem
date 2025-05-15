import React from 'react'
import Sidebar from '../../layouts/Sidebar'

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '32px' }}>
        AdminDashboard
      </div>
    </div>
  )
}

export default AdminDashboard