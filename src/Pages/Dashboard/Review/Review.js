import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch('https://sleepy-stream-84446.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Thanks for giving your feedback !')
                    history.push('/')
                };
            })
    }
    return (
        <div>
            <div className="form-container">
                <h3>Give Your Feedback !</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("reviewer")} placeholder="Name" defaultValue={user?.displayName} />
                    <input required type="email" {...register("email")} placeholder="Email" defaultValue={user?.email} />
                    <textarea required style={{ marginBottom: '10px' }} type="text" {...register("comments")} placeholder="Write Your Feedback" />
                    <input required {...register("rate")} placeholder="Rate us Between 1-5" />
                    <input type="submit" value="Post" className="btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default Review;