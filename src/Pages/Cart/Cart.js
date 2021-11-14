// import React, { useEffect, useState } from 'react';
// import { Container, Row } from 'react-bootstrap';
// import Rating from 'react-rating';
// import localStorageHandler from '../../hooks/localStorage';
// import Header from '../Shared/Header/Header';

// const Cart = () => {
//     const { getStoredCart,removeFromLS } = localStorageHandler();
//     const [toys, setToys ] = useState([]);

//     let total = 0;
//     toys.map(toy => {
//         const subTotal = toy.price*toy.quantity;
//         total = total + subTotal;
//     })
//     const tax = total*0.1;

//     useEffect( ()=>{
//         fetch('https://sleepy-stream-84446.herokuapp.com/toys')
//         .then(res=> res.json())
//         .then( toys =>{
//             const savedCart = getStoredCart();
//             const storedCart = [];
//             if(savedCart){
//                 for (const key in savedCart){
//                     const filteredToy = toys.find( toy => toy._id === key)
//                     if (filteredToy) {
//                         // set quantity
//                         const quantity = savedCart[key];
//                         filteredToy.quantity = quantity;
//                         storedCart.push(filteredToy);
//                     }
//                 }
//             }
//             setToys(storedCart); 
//         })
//     },[getStoredCart])
//     console.log(toys);
//     return (
//         <>
//             <Header/>
//             <Container className="py-3">
//                 <h3 className="text-center my-4">Your Cart</h3>
//                 <hr/>
//                 <Row className="g-5">
//                     <div className="col-md-8">
//                         {
//                             toys.map(toy=><Row style={{alignItems:'start'}}>
//                                 <div className="col-md-4">
//                                     <img className="img-fluid" src={toy.img} />
//                                 </div>
//                                 <div className="col-md-7">
//                                 <h5>{toy.title}</h5>
//                                 <h6>Price: ${toy.price}.00</h6>
//                                 <h6>Quantity: {toy.quantity}</h6>
//                                 <Rating
//                                 style={{color:'#FFC200',marginBottom:'10px'}}
//                                 readonly
//                                 initialRating={toy.rate}
//                                 emptySymbol="far fa-star"
//                                 fullSymbol="fas fa-star"
//                                 />
//                                 <h6>Total: ${toy.price * toy.quantity}.00</h6>
//                                 </div>
//                                 <div onClick={ ()=> removeFromLS(toy._id) } className="col-md-1 btn btn-danger">
//                                 <b>X</b>
//                                 </div>
//                                 <hr/>
//                             </Row>)
//                         }
//                     </div>
//                     <div className="col-md-4 p-3">
//                         <Row>
//                         <div className="col-6">
//                             <h6>SubTotal :</h6>
//                             <h6>Tax :</h6>
//                             <h4>Total :</h4>

//                         </div>
//                         <div className="col-6">
//                             <h6>${total}.00</h6>
//                             <h6>${tax.toFixed(2)}</h6>
//                             <h6>${total+tax}</h6>
//                         </div>
//                         <button className="btn btn-primary my-3">CheckOut</button>
//                         </Row>
//                     </div>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default Cart;