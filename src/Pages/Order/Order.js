import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Order = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [toy, setToy] = useState({});
    const history = useHistory()

    useEffect(() => {
        fetch(`https://sleepy-stream-84446.herokuapp.com/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data);
            })
    }, [id]);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const order = {
            productName: toy.title,
            price: toy.price,
            email: user.email,
            phone: data.phone,
            address: data.address,
            status: 'pending'
        }
        fetch('https://sleepy-stream-84446.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(result => {
                if (result.status === 200) {
                    alert('Your Order placement done !')
                    history.push('/')
                }
            })
    }

    return (
        <>
            <Header />
            <div className="form-container">
                <h2 className="my-5">Give Order info</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required type="text" {...register("productName")} placeholder="Name" value={toy?.title} />
                    <input required type="email" {...register("email")} placeholder="Email" value={user?.email} />
                    <input required type="number" {...register("price")} placeholder="Price" value={toy?.price} />
                    <input required type="number" {...register("phone")} placeholder="Your Phone Number" />
                    <input required type="text" {...register("address")} placeholder="Your Address" />
                    <input type="submit" value="Order Now" className="btn btn-primary" />
                </form>
            </div>
        </>
    );
};

export default Order;