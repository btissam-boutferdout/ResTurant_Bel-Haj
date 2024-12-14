import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuBrochette = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Brouchette.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Brouchette" menuItem={menuItemsWithQuantity} />;
};

export default MenuBrochette;
