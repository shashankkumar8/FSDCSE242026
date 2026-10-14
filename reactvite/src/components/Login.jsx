import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div>
            <h1>login page</h1>
        <form className="p-4 border rounded shadow-sm bg-light">
            <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                />
                <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            
            <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password" 
                />
            </div>
            
            <div className="form-check mb-3">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="exampleCheck1" 
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                </label>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form></div>
    );
}

export default Login;