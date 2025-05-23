import React from "react";
const Cart = () => {
   // Retrieve cart items from local storage
   const cartItemsString = localStorage.getItem("cartItems");

   // Check if cartItemsString is not null and not undefined before parsing
   if (cartItemsString !== null) {
      const cartItems = JSON.parse(cartItemsString) || [];

      return (
         <div className="cart">
            <div className="container">
               <h2>Your Cart</h2>
               {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
               ) : (
                  <ul>
                     {cartItems.map((item) => (
                        <li key={item.id}>
                           {item.name} - {item.quantity} ml - KZT{" "}
                           {item.price * item.quantity}
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>
      );
   } else {
      // Handle the case where cartItemsString is null or undefined
      return <p>Unable to retrieve cart items.</p>;
   }
};

export default Cart;
