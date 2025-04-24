import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  getAuth } from "firebase/auth";
import { Navbar, Footer } from "../components";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { useAuth } from "../AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
   const {  login  } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await login(email, password);

        } catch (err) {
            setError(err.message);
            alert("Invalid Credentials");
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Login</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleLogin}>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <p>
                                    New Here?{" "}
                                    <Link to="/register" className="text-decoration-underline">
                                        Register
                                    </Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
