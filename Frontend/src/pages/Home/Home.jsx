import React from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaChartLine, FaUsers, FaClock } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="/src/assets/Images/Icon.jpeg"
            alt="Task Management Logo"
            className="logo"
          />
          <h1>TaskManager</h1>
        </div>

        <ul className="navbar-menu">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </ul>

        <div className="navbar-right">
          <Link to="/log-in" className="sign-in-btn">
            SIGN IN
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Task Management System</h1>
        <p className="hero-subtitle">
          Prioritize. Organize. Manage. Repeat. With our task management
          software, your days of burnout are behind you. Spend more time
          completing your tasks and less time managing them, and enhance
          productivity at scale by tracking milestones, setting dependencies,
          and accomplishing task goals.
        </p>
        <Link to="/sign-up" className="cta-button">
          GET STARTED
        </Link>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2 className="section-title">
          Why Choose Our Task Management System?
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaTasks />
            </div>
            <h3 className="feature-title">Task Organization</h3>
            <p className="feature-description">
              Create, assign, and organize tasks with ease. Set priorities,
              deadlines, and dependencies to keep your projects on track.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3 className="feature-title">Performance Tracking</h3>
            <p className="feature-description">
              Monitor progress with visual dashboards and reports. Identify
              bottlenecks and optimize your team's workflow.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3 className="feature-title">Team Collaboration</h3>
            <p className="feature-description">
              Foster teamwork with shared tasks, comments, and file attachments.
              Keep everyone aligned and productive.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaClock />
            </div>
            <h3 className="feature-title">Time Management</h3>
            <p className="feature-description">
              Track time spent on tasks, set time estimates, and analyze time
              utilization for better resource management.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <p className="footer-copyright">
          © 2025 TaskManager. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
