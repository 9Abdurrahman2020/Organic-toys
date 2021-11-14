import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './login.css'

const Login = () => {
    const { loginUser, authError } = useAuth();
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const history = useHistory();

    const onSubmit = data =>{
        loginUser(data.email,data.pass,location,history)
    }
    return (
        <>
        <Header/>
        <div className="form-container">
            <h2 className="my-5">Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder="Email" />
                <input type="password" {...register("pass")} placeholder="Password"/>
                <p>New user? <Link to="/register">Register</Link></p>
                <p className="text-danger">{authError}</p>
                <input type="submit" value="Login" className="btn btn-primary" />               
            </form>
        </div>
        </>
    );
};

export default Login;