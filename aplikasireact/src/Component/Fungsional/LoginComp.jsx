import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
const LoginComp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onChangeusername = (e) => {
        const value = e.target.value
        setUsername(value)
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }
    return (
        <Container>
            
     <p><center> <h1>LOGIN</h1> </center></p>   
        <div style={{ marginTop: "170px" }}>
         <div className="container">
            <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="text-left">
                                     <label>Username</label>
                                    </div>
                                    <input type="text" placeholder="username" className="form-control" value={username} onChange={onChangeusername} />
                                </div>
                                <div className="form-group">
                                    <div className="text-left">
                                     <label>Password</label>
                                    </div>
                                    <input type="password" placeholder="password" className="form-control" value={password} onChange={onChangePassword} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-left">
                                        <button>
                                            <Link to="/homepage" className="btn btn-primary text-left">Masuk</Link>
                                        </button>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <Link to="/daftar" className="">
                                           Sign Up
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}
export default LoginComp