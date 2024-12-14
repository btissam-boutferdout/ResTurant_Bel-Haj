import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuPizza = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Pizza.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Pizza" menuItem={menuItemsWithQuantity} />;
};

export default MenuPizza;
