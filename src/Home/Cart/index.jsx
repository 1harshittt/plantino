import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { RxCross2 } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = parseInt(localStorage.getItem("Count")) || 0;

  const closeCart = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  // Apply CSS to hide scrollbar when the cart is open
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const removedItem = cart[index];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("Count", (count - removedItem.quantity).toString()); // Update the count by subtracting the quantity of the removed item
    }
  };

  return (
    <div>
      <div className={`cart ${isOpen ? "open" : ""}`}>
        <div className="cart-head">
          <h2>Shopping cart</h2>
          <span className="closebtn" onClick={closeCart}>
            <RxCross2 className="head-cross-icon" />
          </span>
        </div>
        {cart.length === 0 ? (
          <div className="empty-mini-cart">
            <FiShoppingCart className="shopping-icon" />

            <span>No items added to your cart</span>
            <Link to="/products">
              <a href="#">Continue Shopping</a>
            </Link>
          </div>
        ) : (
          <div>
            <div className="mini-cart">
              {cart.map((item) => (
                <div className="mini-cart-item" key={item.id}>
                  <img src={item.image} alt={`img${item.id}`} />
                  <div className="mini-cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <div className="cancel">
                    <MdOutlineCancel
                      className="cancel-icon"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="billing">
              <p>
                Total Items = <span>{count}</span>
              </p>
              <div className="checkout-part">
                <div className="total">
                  <label>Subtotal</label>
                  <span>Rs. 6999.00</span>
                </div>
                <div className="align-part">
                  <div className="cart-agreement">
                    <input type="checkbox" />
                    <label>
                      <p>
                        I agree with the <span>terms & conditions</span>
                      </p>
                    </label>
                  </div>

                  <div className="checkout-button common-button-scss">
                    <span>Checkout</span>
                  </div>
                  <div className="viewcart-button common-button-scss">
                    <span>View Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isOpen && <div className="cart-overlay" onClick={closeCart} />}
    </div>
  );
};

export default Cart;
