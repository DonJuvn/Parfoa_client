import React, { useState, useEffect } from "react";const AdminPage = () => {
   const [password, setPassword] = useState("");
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      if (isAuthenticated) {
         const fetchOrders = async () => {
            try {
               // Replace 'https://parfua.pythonanywhere.com/api/orders/' with your actual API endpoint
               const response = await fetch(
                  "https://parfua.pythonanywhere.com/api/orders/"
               );
               const data = await response.json();

               setOrders(data);
            } catch (error) {
               console.error("Error fetching orders:", error);
            }
         };

         fetchOrders();
      }
   }, [isAuthenticated]);

   const handleDeliveryStatusChange = async (orderId, isDelivered) => {
      try {
         // Replace 'https://parfua.pythonanywhere.com/api/update-delivery/' with your actual API endpoint
         const response = await fetch(
            `https://parfua.pythonanywhere.com/api/orders/${orderId}`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  is_delivered: isDelivered,
               }),
            }
         );

         if (response.ok) {
            console.log(`Order ID ${orderId} - Delivered: ${isDelivered}`);
         } else {
            console.error(
               "Error updating delivery status:",
               response.statusText
            );
         }
      } catch (error) {
         console.error("Error updating delivery status:", error);
      }
   };

   const handlePasswordSubmit = () => {
      // Replace 'your-expected-password' with the correct password
      if (password === "1234") {
         setIsAuthenticated(true);
      } else {
         alert("Incorrect password. Please try again.");
      }
   };

   return (
      <div className="container">
         <div>
            {!isAuthenticated ? (
               <div>
                  <label>
                     Password:
                     <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </label>
                  <button onClick={handlePasswordSubmit}>Submit</button>
               </div>
            ) : (
               <div>
                  <h2>Admin Page</h2>
                  <table>
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Address</th>
                           <th>Total Sum</th>
                           <th>Is Delivered</th>
                        </tr>
                     </thead>
                     <tbody>
                        {orders.map((order, index) => (
                           <tr key={index}>
                              <td>{order.id}</td>
                              <td>{order.name}</td>
                              <td>{order.address}</td>
                              <td>{order.total_sum}</td>
                              <td>
                                 <label>
                                    <input
                                       type="checkbox"
                                       checked={order.isDelivered}
                                       onChange={() =>
                                          handleDeliveryStatusChange(
                                             order.id,
                                             !order.isDelivered
                                          )
                                       }
                                    />
                                 </label>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </div>
   );
};

export default AdminPage;
