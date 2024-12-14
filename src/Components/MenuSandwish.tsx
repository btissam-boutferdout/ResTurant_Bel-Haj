import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuSandwich = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Sandwish.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Sandwich" menuItem={menuItemsWithQuantity} />;
};

export default MenuSandwich;
