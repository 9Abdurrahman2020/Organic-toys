import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Register = () => {
    const { createUser, authError, successMes } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        createUser(data.email,data.pass,data.name)
    }
    return (
        <>
        <Header/>
        <div className="form-container">
            <h2 className="my-5">Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="Name" />
                <input type="email" {...register("email")} placeholder="Email" />
                <input type="password" {...register("pass")} placeholder="Password"/>
                <p>Already Registered? <Link to="/login">Login</Link></p>
                <p className="text-danger">{authError}</p>
                <p className="text-success">{successMes}</p>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </div>
        </>
    );
};

export default Register;