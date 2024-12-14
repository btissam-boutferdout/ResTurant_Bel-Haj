import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuSpa = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Spa.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Spagitti" menuItem={menuItemsWithQuantity} />;
};

export default MenuSpa;
