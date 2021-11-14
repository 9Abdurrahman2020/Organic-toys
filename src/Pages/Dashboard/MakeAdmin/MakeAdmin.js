import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://sleepy-stream-84446.herokuapp.com/users', {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert(`Successfully made this ${data.email} user Admin !`)
                }
            })
    }
    return (
        <div className="form-dashboard">
            <h2 className="my-5">Make An Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required type="email" {...register("email")} placeholder="Email" />
                <input type="submit" value="Make Admin" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default MakeAdmin;