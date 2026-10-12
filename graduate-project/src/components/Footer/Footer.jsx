import React from 'react'


import { Link } from "react-router-dom";

export default function Footer() {
    return (
    <>
        <footer className="bg-dark text-light border-top border-secondary mt-5">
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-md-6 col-lg-5">
                        <h3 className="fw-bold">Cine<span className="text-danger">Zone</span></h3>
                        <p className="text-secondary mt-3">Discover amazing movies, explore new stories,and find your next favorite film.</p>
                    </div>
                    <div className="col-6 col-md-3 col-lg-3 offset-lg-1">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                        <li className="mb-2">
                            <Link to="/" className="link-secondary text-decoration-none">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/moveList" className="link-secondary text-decoration-none">Movies List</Link>
                        </li>
                        <li className="nav-item">
                                <Link to={`/watchList`} className="link-secondary text-decoration-none" >Watch List</Link>
                        </li>
                        
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h5 className="mb-3">Contact</h5>
                        <a href="abdoali1532005@gmail.com" className="link-secondary text-decoration-none">Email Us</a>
                    </div>
                </div>
                <hr className="border-secondary my-4" />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <p className="text-secondary mb-0 small">
                        &copy; 2026 CineZone. All rights reserved.
                    </p>
                    <p className="text-secondary mb-0 small">
                        Made for movie lovers.
                    </p>
                </div>
            </div>
        </footer>
    </>
    );
}
