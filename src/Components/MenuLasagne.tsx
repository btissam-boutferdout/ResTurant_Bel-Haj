import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuLasagne = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Lasagne.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Lasagne" menuItem={menuItemsWithQuantity} />;
};

export default MenuLasagne;
