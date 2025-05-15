import React, { useState, useEffect } from "react";
import { FiUsers, FiUserCheck, FiUserPlus, FiUserX } from "react-icons/fi";
import { Link } from "react-router-dom";

const CountUsers = () => {
  // Sample stats data - in a real app you would fetch this from an API
  const [stats, setStats] = useState({
    clients: {
      count: 8652,
      percentChange: 2.97,
      increased: true,
    },
    leads: {
      count: 9254,
      percentChange: 18.25,
      increased: true,
    },
    members: {
      count: 753,
      percentChange: 3.75,
      increased: false,
    },
    students: {
      count: 63154,
      percentChange: 8.21,
      increased: true,
    },
  });

  // For demo purpose, you could simulate loading data
  useEffect(() => {
    // In a real application, you would fetch data from an API here
    // Example:
    // const fetchStats = async () => {
    //   try {
    //     const response = await fetch('/api/user-stats');
    //     const data = await response.json();
    //     setStats(data);
    //   } catch (error) {
    //     console.error('Error fetching stats:', error);
    //   }
    // };
    //
    // fetchStats();
  }, []);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <h1 className="breadcrumbs-title">Welcome!</h1>
      </div>

      {/* Stats Cards */}
      <div className="stats-container">
        {/* Clients Card */}
        <div className="stats-card">
          <div className="stats-content card-clients">
            <div className="stats-title">CLIENTS</div>
            <div className="stats-value">
              {stats.clients.count.toLocaleString()}
            </div>
          </div>
          <div className="stats-icon card-clients">
            <FiUsers size={20} />
          </div>
        </div>

        {/* Team Leads Card */}
        <div className="stats-card">
          <div className="stats-content card-leads">
            <div className="stats-title">TEAM LEADS</div>
            <div className="stats-value">
              {stats.leads.count.toLocaleString()}
            </div>
          </div>
          <div className="stats-icon card-leads">
            <FiUserCheck size={20} />
          </div>
        </div>

        {/* Team Members Card */}
        <div className="stats-card">
          <div className="stats-content card-members">
            <div className="stats-title">TEAM MEMBERS</div>
            <div className="stats-value">
              {stats.members.count.toLocaleString()}
            </div>
          </div>
          <div className="stats-icon card-members">
            <FiUserPlus size={20} />
          </div>
        </div>

        {/* Students Card */}
        <div className="stats-card">
          <div className="stats-content card-students">
            <div className="stats-title">STUDENTS</div>
            <div className="stats-value">
              {stats.students.count.toLocaleString()}
            </div>
          </div>
          <div className="stats-icon card-students">
            <FiUserX size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUsers;
