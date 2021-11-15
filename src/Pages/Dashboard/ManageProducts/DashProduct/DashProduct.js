import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const DashProduct = ({ product }) => {
    const { title, price, img, rate, _id } = product;
    let { path, url } = useRouteMatch();

    const deleteProduct = id => {
        const confirm = window.confirm('Are you sure? want to delete?');
        if (confirm) {
            fetch(`https://sleepy-stream-84446.herokuapp.com/toys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        }
    }

    return (
        <div className="col-md-4">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h6 class="card-title">{title}</h6>
                            <p className="my-0">Price: ${price}</p>
                            <p className="my-0">Rating: {rate}</p>
                        </div>
                    </div>
                    <div className="card-footer d-flex" style={{ justifyContent: 'space-between' }}>
                        <Link to={`${url}/update/${_id}`}><button className="btn btn-success">Modify</button></Link>
                        <button onClick={() => deleteProduct(_id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashProduct;