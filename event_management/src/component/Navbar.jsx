import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem('firstname'))
  })

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem(('firstname'))
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Eventkiya</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${isCollapsed ? "" : "show"}`}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Services
              </Link>
              <ul className="dropdown-menu">
                {["idea", "event", "service", "activation", "exhinitions", "artist", "intellectual", "merchanding", "wedding", "birthday"]
                  .map((service) => (
                    <li key={service}><Link className="dropdown-item" to={`/${service}`}>{service.charAt(0).toUpperCase() + service.slice(1)}</Link></li>
                  ))}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Gallery
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/photo">Photo</Link></li>
                <li><Link className="dropdown-item" to="/video">Video</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            
          </ul>

          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-blue-500 text-xl" to="#" data-bs-toggle="dropdown">
                  {/* <img src="/image/default-avatar.jpg" alt="User" className="h-8 rounded-circle me-2" /> */}
                  {`Welcome ${user}`}
                </Link>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle mr-12" to="#" data-bs-toggle="dropdown">
                  Account
                </Link>
                <ul className="dropdown-menu pr-40">
                  <li><Link className="dropdown-item" to="/login">Login</Link></li>
                  <li><Link className="dropdown-item mr-24" to="/registration">Registration</Link></li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
