import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuTacos = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Tacos.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Tacos" menuItem={menuItemsWithQuantity} />;
};

export default MenuTacos;
