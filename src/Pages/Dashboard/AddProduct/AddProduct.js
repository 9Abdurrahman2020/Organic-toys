import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://sleepy-stream-84446.herokuapp.com/toys', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully added a product')
                }
            })
    }
    return (
        <div className="form-dashboard">
            <h2 className="my-5">Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required type="text" {...register("title")} placeholder="Product Name" />
                <input required type="number" {...register("price")} placeholder="Product Price" />
                <input required type="url" {...register("img")} placeholder="Product Image(url)" />
                <textarea required style={{ marginBottom: '10px' }} type="text" {...register("des")} placeholder="Product Description" />
                <input required {...register("rate")} placeholder="Give a Rating(1-5)" />
                <input type="submit" value="Add" className="btn btn-primary my-2" />
            </form>
        </div>
    );
};

export default AddProduct;