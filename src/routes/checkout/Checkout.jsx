import "./checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CheckOutItems from "../../components/checkout-items/CheckOutItems";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteProductFromCart,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItems
          key={cartItem.id}
          cartItem={cartItem}
          deleteProduct={deleteProductFromCart}
        />
      ))}
      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
