import React, { useState } from "react";
import { FiRefreshCw, FiMinimize2, FiX } from "react-icons/fi";

const ProjectList = () => {
  // Initial project data based on the image
  const initialProjects = [
    {
      id: 1,
      name: "Velonic Admin v1",
      startDate: "01/01/2015",
      dueDate: "26/04/2015",
      status: "Released",
      assignedTo: "Techzaa Studio",
    },
    {
      id: 2,
      name: "Velonic Frontend v1",
      startDate: "01/01/2015",
      dueDate: "26/04/2015",
      status: "Released",
      assignedTo: "Techzaa Studio",
    },
    {
      id: 3,
      name: "Velonic Admin v1.1",
      startDate: "01/05/2015",
      dueDate: "10/05/2015",
      status: "Pending",
      assignedTo: "Techzaa Studio",
    },
    {
      id: 4,
      name: "Velonic Frontend v1.1",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Work In Progress",
      assignedTo: "Techzaa Studio",
    },
    {
      id: 5,
      name: "Velonic Admin v1.3",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Coming soon",
      assignedTo: "Techzaa Studio",
    },
    {
      id: 6,
      name: "Velonic Admin v1.3",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Coming soon",
      assignedTo: "Techzaa Studio",
    },
    {
      id: 7,
      name: "Velonic Admin v1.3",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Cool",
      assignedTo: "Techzaa Studio",
    },
  ];

  // State for projects and UI state
  const [projects, setProjects] = useState(initialProjects);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to refresh projects
  const handleRefresh = () => {
    setIsLoading(true);

    // Simulating a refresh with a timeout
    setTimeout(() => {
      // In a real app, you'd fetch from API here
      setProjects([...initialProjects]);
      setIsLoading(false);
    }, 800);
  };

  // Function to minimize the project list
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (isClosed) setIsClosed(false);
  };

  // Function to close the project list but keep first row
  const handleClose = () => {
    setIsClosed(!isClosed);
    if (isMinimized) setIsMinimized(false);
  };

  // Function to determine status badge class
  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "released":
        return "status-released";
      case "pending":
        return "status-pending";
      case "work in progress":
        return "status-progress";
      case "coming soon":
        return "status-coming-soon";
      case "cool":
        return "status-cool";
      default:
        return "";
    }
  };

  // Set container class based on UI state
  const containerClass = `project-list-container ${
    isMinimized ? "minimized" : ""
  } ${isClosed ? "closed" : ""}`;

  return (
    <div className={containerClass}>
      <div className="project-list-header">
        <h2 className="project-list-title">Projects</h2>
        <div className="project-list-actions">
          <button
            className="project-list-action-btn"
            onClick={handleRefresh}
            disabled={isLoading}
            title="Refresh projects"
          >
            <FiRefreshCw className={isLoading ? "spin" : ""} />
          </button>
          <button
            className="project-list-action-btn"
            onClick={handleMinimize}
            title={isMinimized ? "Expand" : "Minimize"}
          >
            <FiMinimize2 />
          </button>
          <button
            className="project-list-action-btn"
            onClick={handleClose}
            title={isClosed ? "Expand" : "Close"}
          >
            <FiX />
          </button>
        </div>
      </div>

      <table className="project-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.startDate}</td>
              <td>{project.dueDate}</td>
              <td>
                <span
                  className={`status-badge ${getStatusBadgeClass(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </td>
              <td>{project.assignedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
