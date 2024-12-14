import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "CartContext is undefined. Make sure you're using CartProvider."
    );
  }

  const { cartItems, removeItemFromCart, updateItemQuantity } = context;

  // Calculate total price with safeguards
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.discountedPrice);
    const quantity = Math.max(item.quantity || 1, 0); // Default to 1, prevent negative quantity

    if (isNaN(price)) {
      console.error(
        `Invalid discountedPrice for item ${item.id}:`,
        item.discountedPrice
      );
      return total; // Skip invalid price and continue
    }

    return total + quantity * price;
  }, 0);

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      updateItemQuantity(id, newQuantity);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/Menu" className="btn btn-primary">
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {cartItems.map((item) => (
              <div key={item.id} className="col">
                <div
                  className="card shadow-sm h-100"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.description || "No description available"}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">
                        DH {Number(item.discountedPrice).toFixed(2)}
                      </span>
                      <div className="d-flex align-items-center">
                        {/* Remove Button */}
                        <button
                          className="btn btn-sm btn-danger me-3"
                          onClick={() => removeItemFromCart(item.id)}
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          Remove
                        </button>
                        {/* Quantity Control */}
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label={`Decrease quantity of ${item.title}`}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity || 1}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label={`Increase quantity of ${item.title}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: DH {totalPrice.toFixed(2)}</h4>
            <Link to="/ConfirmePage">
              <button className="btn btn-success mt-3">Confirm</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
