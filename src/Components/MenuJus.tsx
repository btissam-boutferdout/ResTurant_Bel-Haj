import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuJus = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Jus.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Jus" menuItem={menuItemsWithQuantity} />;
};

export default MenuJus;
