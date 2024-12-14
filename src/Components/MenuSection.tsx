import { useContext } from "react";
import { CartContext } from "./CartContext";

// Define the CartItem interface if it's not already defined
interface CartItem {
  id: string;
  title: string;
  description: string;
  image: string;
  discountedPrice: string;
  quantity: number;
}

// Define MenuSectionProps interface for typing the props
interface MenuSectionProps {
  title: string;
  menuItem: CartItem[];
}

// Define the MenuSection component with proper types
const MenuSection: React.FC<MenuSectionProps> = ({ title, menuItem }) => {
  const context = useContext(CartContext);

  // If context is undefined, handle the error or return null
  if (!context) {
    throw new Error(
      "CartContext is undefined. Make sure you're using CartProvider."
    );
  }
  const { addItemToCart } = context;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">🍽️ Explore Our {title}</h1>
      <div className="row gy-4">
        {menuItem?.length > 0 ? (
          menuItem.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card border-0 shadow-lg position-relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top img-fluid" // Added img-fluid to make image responsive
                  style={{ objectFit: "cover", height: "200px" }} // Ensures image fills space correctly
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.description || "No description"}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>DH {item.discountedPrice}</span>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => addItemToCart(item)} // Passes item to context
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default MenuSection;
