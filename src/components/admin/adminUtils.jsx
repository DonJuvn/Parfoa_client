// adminUtils.js

let orders = [];

export const saveOrderDetailsToAdmin = (orderDetails) => {
  orders.push(orderDetails);
  console.log('Order details saved to admin:', orderDetails);
};

export const getAllOrders = () => {
  return orders;
};
