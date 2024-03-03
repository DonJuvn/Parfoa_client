import React, { useState, useEffect } from "react";
const AdminPage = () => {
   const [password, setPassword] = useState("");
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      if (isAuthenticated) {
         const fetchOrders = async () => {
            try {
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
         const response = await fetch(
            `https://parfua.pythonanywhere.com/api/orders/${orderId}`,
            // `https://parfua.pythonanywhere.com/api/orders`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  id: orderId,
                  is_delivered: isDelivered,
               }),
            }
         );

         if (response.ok) {
            console.log(`Order ID ${orderId} - is_delievered: ${isDelivered}`);
         } else {
            console.error(
               `Error updating delivery status: Order ID ${orderId} - is_delievered: ${isDelivered}`,
               response.statusText
            );
         }
      } catch (error) {
         console.error("Error updating delivery status:", error);
      }
   };

   const handlePasswordSubmit = () => {
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
               <div id="admin">
                  <label>
                     Пароль:
                     <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </label>
                  <button className='admin-submit'onClick={handlePasswordSubmit}>Войти</button>
               </div>
            ) : (
               <div>
                  <h2>Страница администратора Parfoa</h2>
                  <table>
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Имя</th>
                           <th>Адрес</th>
                           <th>Итоговая сумма</th>
                           <th>Отправлено</th>
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
