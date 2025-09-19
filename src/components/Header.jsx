import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {
        navigate("/register");
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-1 " >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        {/* Use ms-auto here to push the ul and its siblings to the right */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="./">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success me-2" type="submit" onClick={handleRegister}>Register</button>
                            <button className="btn btn-outline-success" type="submit" onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}