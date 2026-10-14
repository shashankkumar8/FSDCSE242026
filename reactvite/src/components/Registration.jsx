import React from "react";

function Registration() {

    const [name, setName] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [number, setnumber] = React.useState("");

    function getData(e) {   
        e.preventDefault();
        //alert(name + " " + password + " " + number);
        const data = {
            name: name,
            password: password,
            number: number
        };
        console.log(data);
    }

    return (


        <div className="container mt-4">
            <h2>Registration</h2>
            <form onSubmit={getData} className="p-4 border rounded shadow-sm bg-light">
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                         onChange={(e)=>setName(e.target.value)}
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
                        onChange={(e)=>setpassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">phone number</label>
                    <input 
                        type="number" 
                        onChange={(e)=>setnumber(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="phone number" 
                    />
                </div>
                <div className="form-group form-check mb-3">
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
            </form>
        </div>
    );
}

export default Registration;