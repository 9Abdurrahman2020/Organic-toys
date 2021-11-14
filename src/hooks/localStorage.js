// const localStorageHandler = () =>{
//         const addToLS = id =>{
//         const exists = getLS();
//         let toys ={}
//         if(!exists){
//             toys[id] = 1;
//         }
//         else{
//             toys = JSON.parse(exists)
//             if(toys[id]){
//                 const increment = toys[id] + 1;
//                 toys[id] = increment;
//             }else{
//                 toys[id] = 1;
//             }
//         }
//         updateLS(toys)
//         }
//         // get existing data
//         const getLS = () => localStorage.getItem('toys');
//         // set to local storage
//         const updateLS = toys => {
//             localStorage.setItem('toys', JSON.stringify(toys));
//           }
//         // remove from local storage
//         const removeFromLS = id => {
//             const exists = getLS();
//             if (!exists) {
          
//             }
//             else {
//               const toys = JSON.parse(exists);
//               delete toys[id];
//               updateLS(toys);
//             }
//           }
//         // get local data
//         const getStoredCart = () => {
//             const exists = getLS();
//             return exists ? JSON.parse(exists) : '';
//           }
//         // clear the local storage info
//         const clearTheCart = () => {
//             localStorage.removeItem('shopping_cart');
//           }
          
//     return{
//         addToLS,
//         removeFromLS,
//         getStoredCart,
//         clearTheCart
//     }
// }
// export default localStorageHandler;