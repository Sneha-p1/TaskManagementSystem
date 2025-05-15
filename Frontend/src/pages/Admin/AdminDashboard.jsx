import React from "react";
import Sidebar from "../../layouts/Sidebar";
import CountUsers from "../../components/CountUsers";
import ProjectList from "../../components/ProjectList";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CountUsers />
        <ProjectList />
      </div>
    </div>
  );
};

export default AdminDashboard;
