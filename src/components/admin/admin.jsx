// AdminPage.jsx

import React from 'react';
import { getAllOrders } from './adminUtils';

const AdminPage = () => {
  const orders = getAllOrders();

  return (
    <div>
      <h2>Admin Page</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Total Sum</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.totalSum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
