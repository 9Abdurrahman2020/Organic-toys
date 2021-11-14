import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    const [toy, setToy] = useState({});
    const { register, handleSubmit } = useForm();
    const history = useHistory()

    useEffect(() => {
        fetch(`https://sleepy-stream-84446.herokuapp.com/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data);
            })
    }, [id])


    const onSubmit = data => {
        const product = {
            title: data.title || toy.title,
            price: data.price || toy.price,
            img: data.img || toy.img,
            des: data.des || toy.des,
            rate: data.rate || toy.rate
        }
        fetch(`https://sleepy-stream-84446.herokuapp.com/products/${id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Successfully updated the Product info !')
                    history.push('/dashboard/manage')
                }
            })
    }

    return (
        <div className="form-dashboard">
            <h2 className="my-5">Update Product info</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <b>Product Name:</b>
                <input required type="text" {...register("title")} defaultValue={toy?.title} />
                <b>Product Price:($)</b>
                <input required type="number" {...register("price")} defaultValue={toy?.price} />
                <b>Image URL:</b>
                <input required type="url" {...register("img")} defaultValue={toy?.img} />
                <b>Product Description:</b>
                <textarea required style={{ marginBottom: '10px' }} type="text" {...register("des")} defaultValue={toy?.des} />
                <b>Product Rating:</b>
                <input required {...register("rate")} placeholder="Give a Rating(1-5)" defaultValue={toy?.rate} />
                <input type="submit" value="Update" className="btn btn-primary mt-2" />
            </form>
        </div>
    );
};

export default UpdateProduct;