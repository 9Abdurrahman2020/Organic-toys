import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
    const { deleteAnOrder, updateTheOrder } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://sleepy-stream-84446.herokuapp.com/orders/`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [orders])
    return (
        <div>
            <Table responsive striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Status</th>
                        <th>Cancel</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>{order.status}</td>
                            <td>
                                {
                                    order.status == 'pending' ? <button className="btn btn-success" onClick={() => updateTheOrder(order._id)}>Approve</button> : <p className="text-success">Approved</p>
                                }
                            </td>
                            <td><button onClick={() => deleteAnOrder(order._id)} className="btn btn-danger">X</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;