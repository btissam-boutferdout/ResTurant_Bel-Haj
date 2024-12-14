import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuBurger = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Burger.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Burger" menuItem={menuItemsWithQuantity} />;
};

export default MenuBurger;
