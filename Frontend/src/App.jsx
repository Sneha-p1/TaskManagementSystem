import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

// import allRoutes from "./Routes";
import CommonSignUp from "./pages/CommonLogin/CommonSignUp";
import Home from "./pages/Home/Home";
import ProjectList from "./components/ProjectList";
import CountUsers from "./components/CountUsers";
// import Navbar from "./layouts/Navbar";
import AdminDashboard from "./pages/Admin/AdminDashboard";
function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            margin: "0 auto",
            textAlign: "center",
            width: "fit-content",
            maxWidth: "90%",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "#4aed88",
            },
          },
          error: {
            duration: 4000,
            theme: {
              primary: "#ff4b4b",
            },
          },
        }}
      />
      {/* <Navbar /> */}

      {/* <Routes>{allRoutes}</Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/sign-up" element={<CommonSignUp />} />
        <Route path="/project-list" element={<ProjectList />} />
        {/* <Route path="/count-users" element={<CountUsers />} /> */}
      </Routes>
    </div>
  );
}

export default App;
