import { deleteOrder, getOrders, getSingleOrder } from './orderData';
import { getCustomers, deleteSingleCustomer } from './customerData';
import {
  getOrderItems,
  getSingleItem,
  deleteSingleItem,
} from './itemData';

const mergeOrdersCustomersArray = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      getCustomers()
        .then((customersArray) => {
          // eslint-disable-next-line
          const mergedArray = ordersArray.map(({ customer_id, ...rest }) => (
            {
              customer_id,
              ...Object.assign({}, ...customersArray.filter((customer) => customer.firebaseKey
              // eslint-disable-next-line
              === customer_id)),
              ...rest
            }
          ));
          resolve(mergedArray);
        }).catch(reject);
    });
});

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((ordersObject) => {
    getSingleItem(ordersObject.customer_id)
      .then((itemObject) => resolve({ ...ordersObject, itemObject }));
  }).catch(reject);
});

const getItemDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleItem(firebaseKey).then((ordersObject) => {
    getSingleOrder(ordersObject.customer_id)
      .then((itemObject) => resolve({ ...ordersObject, itemObject }));
  }).catch(reject);
});

const deleteOrderItemRelationship = (orderFirebaseKey, customerFirebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(orderFirebaseKey).then((ItemsArray) => {
    console.log(ItemsArray);
    const deleteItemPromises = ItemsArray.map((item) => deleteSingleItem(item.firebaseKey));
    Promise.all(deleteItemPromises).then(() => {
      deleteSingleCustomer(customerFirebaseKey).then(() => {
        deleteOrder(orderFirebaseKey);
      });
    }).then(resolve);
  }).catch(reject);
});

export {
  mergeOrdersCustomersArray,
  getItemDetails,
  getOrderDetails,
  deleteOrderItemRelationship
};
