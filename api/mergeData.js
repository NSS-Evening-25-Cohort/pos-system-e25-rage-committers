import { getOrders } from './orderData';
import { getCustomers } from './customerData';

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

export default mergeOrdersCustomersArray;
