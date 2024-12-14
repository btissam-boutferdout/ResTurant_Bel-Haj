import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuPanini = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Panini.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Panini" menuItem={menuItemsWithQuantity} />;
};

export default MenuPanini;
