import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import img from '../Images/register.jpg';
import { useState } from "react";
const styles = {
  // backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const CommonSignUp = () => {
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("admin");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  // signup
  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    console.log(res);
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/admin/log-in");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/admin/sign-up");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      toast.error("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    const userDetails = {
      companyName,
      userName,
      password,
      email,
      phoneNumber,
      userType,
    };

    signupSubmit(userDetails);
  };

  return (
    <div className="auth-container">
      {/* Left Panel */}
      <div className="auth-left-panel">
        <div className="auth-left-content">
          <div className="auth-brand">
            <img src="/src/assets/Images/Icon.jpeg" alt="TaskManager Logo" />
          </div>

          <div className="auth-testimonial">
            <p className="auth-testimonial-text">
              "One day after we started using TaskManager, it was really clear
              to us where we were standing."
            </p>
            {/* <p className="auth-testimonial-author">
              - JANE DOE, OPERATIONS DIRECTOR
            </p> */}
          </div>


        </div>
      </div>

      {/* Right Panel */}
      <div className="auth-right-panel">
        <div className="auth-right-header">
          <div className="auth-login-link">
            Have a TaskManager Account?{" "}
            <Link
              to="/admin/log-in"
              style={{ color: "#e72929", marginLeft: "8px", fontWeight: "500" }}
            >
              SIGN IN
            </Link>
          </div>
        </div>

        <h2 className="auth-header">Get Started in less than 30 seconds</h2>

        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="companyName" className="field-label">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="input-field"
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="portalUrl" className="field-label">
              Portal URL
            </label>
            <div className="auth-url-box">
              <div className="auth-url-prefix">
                https://projects.taskmanager.in/
              </div>
              <input
                id="portalUrl"
                name="portalUrl"
                className="auth-url-field"
                type="text"
                placeholder="portal"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="field-label">
              Business Email *
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              type="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="field-label">
              Password *
            </label>
            <input
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              type="password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="field-label">
              Phone Number *
            </label>
            <div className="phone-input-group">
              <div className="phone-code">+91</div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="phone-input"
                type="tel"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="userType" className="field-label">
              Account Type
            </label>
            <select
              id="userType"
              name="userType"
              className="select-field"
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="client">Client</option>
            </select>
          </div>

          <div className="auth-terms">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agreeTerms">
              I agree to the <a href="#terms">Terms of Service</a> and{" "}
              <a href="#privacy">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="submit-button">
            SIGN UP FOR FREE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommonSignUp;
