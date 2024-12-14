import MenuData from "../Pages/MenuData";
import MenuSection from "./MenuSection";

const MenuBrochette = () => {
  // تحويل البيانات لتتوافق مع نوع CartItem
  const menuItemsWithQuantity = MenuData.Brouchette.map((item) => ({
    ...item,
    id: String(item.id), // تحويل `id` إلى string
    quantity: 1, // إضافة الخاصية `quantity` بقيمة افتراضية
  }));

  return <MenuSection title="Brouchette" menuItem={menuItemsWithQuantity} />;
};

export default MenuBrochette;
