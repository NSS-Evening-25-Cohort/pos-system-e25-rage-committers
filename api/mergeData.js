// import { getAllOrders } from './orderData';
// import { getAllCustomers, getSingleCustomer } from './customerData';

// const getAllOrdersCustomers = () => new Promise((resolve, reject) => {
//   getAllOrders().then((ordersArray) => {
//     getAllCustomers().then((customersArray) => {
//       resolve({ ordersArray, customersArray });
//     }).catch(reject);
//   });
// });

// const mergeOrdersMasterArray = () => new Promise((resolve, reject) => {
//   getAllOrders()
//     .then((ordersArray) => {
//       getAllCustomers()
//         .then((customersArray) => {
//           resolve({ ordersArray, customersArray });
//         }).catch(reject);
//     });
// });

// export default mergeOrdersMasterArray;