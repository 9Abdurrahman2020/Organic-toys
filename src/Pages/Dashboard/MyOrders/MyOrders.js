import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user, deleteAnOrder } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://sleepy-stream-84446.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user, orders])
    return (
        <div>
            <Table responsive striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Status</th>
                        <th>Cancel/delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>{order.status}</td>
                            <td><button onClick={() => deleteAnOrder(order._id)} className="btn btn-danger">X</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;