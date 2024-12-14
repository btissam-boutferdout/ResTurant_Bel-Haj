import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuCosamia = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Cosamia.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Cosamia" menuItem={menuItemsWithQuantity} />;
};

export default MenuCosamia;
