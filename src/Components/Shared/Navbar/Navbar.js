import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="mx-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-danger fs-3 fw-bold" to="/"><img src="https://i.ibb.co/bWBkq21/idea-light-marketing-work-icon-1320086522113990465.png" width="30px" alt="" /><span className="text-primary">Marketing</span> <span className="text-warning">Star</span> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link me-3 " aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="#">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3 " to="/dashboard/order">Order</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/dashboard/addReview">Review</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3 " to="/dashboard">Admin</Link>
              </li>
              <button className="btn btn-warning"><i class="fas fa-user-circle"></i></button>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;