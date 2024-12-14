import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuSalade = () => {
  // Transform MenuData.Brouchette to conform to CartItem type
  const menuItemsWithQuantity = MenuData.Salades.map((item) => ({
    ...item,
    id: String(item.id), // Convert `id` to string
    quantity: 1, // Add a default quantity
  }));

  return <MenuSection title="Salade" menuItem={menuItemsWithQuantity} />;
};

export default MenuSalade;
