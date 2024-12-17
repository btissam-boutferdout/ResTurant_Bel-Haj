import PizzaMargarita from "../assets/pizza/margarita.avif";
import PizzaViandHache from "../assets/pizza/viande4.jpg";
import PizzaP from "../assets/pizza/poulet1.webp";
import PizzaV from "../assets/pizza/vegetarienne1.jpg";
import PizzaThon from "../assets/pizza/thon1.jpg";
import PizzaSea from "../assets/pizza/sea.webp";
import pizzaFour from "../assets/pizza/4sea.jpg";
import PizzaSpecial from "../assets/pizza/special1.png";
import saldeImage from "../assets/salade/Salade_marocaine.jpeg";
import NecoiseImage from "../assets/salade/nicoise.jpeg";
import saladePate from "../assets/salade/pate1.jpeg";
import saladeriche from "../assets/salade/riche1.jpg";
import saladechef from "../assets/salade/chef.jpg";
import saladeP from "../assets/salade/precheur.jpeg";
import PaniniOmlete from "../assets/panini/omlette.jpeg";
import PaniniViande from "../assets/panini/viand-hache.jpg";
import PaniniPoulet from "../assets/panini/-poulet-.jpeg";
import PaniniSauccaise from "../assets/panini/saucisse.jpeg";
import PaniniThon from "../assets/panini/THON.jpg";
import PaniniMixte from "../assets/panini/mixte.jpg";
import paniniseaFood from "../assets/panini/seaFood.jpg";
import CosamiaViande from "../assets/Cosamia/viande-hacher.png";
import SandwichOmlette from "../assets/Sandwish/omlette.jpeg";
import SaViande from "../assets/Sandwish/viande-hacher.jpeg";
import SaPoulet from "../assets/Sandwish/poulet.jpeg";
import SaSauccaisse from "../assets/Sandwish/Saucisse.jpeg";
import SaThon from "../assets/Sandwish/thon.jpeg";
import SaSeaFood from "../assets/Sandwish/seafood.webp";
import BurgerChesse from "../assets/Burger/cheese.jpeg";
import BurgerChiken from "../assets/Burger/chiken.jpeg";
import TacosViande from "../assets/Tacos/Viand-hacher.jpeg";
import TacosPoulet from "../assets/Tacos/poulet.avif";
import TacosSau from "../assets/Tacos/saucisse.avif";
import TacosThon from "../assets/Tacos/thon.jpg";
import TacosMixte from "../assets/Tacos/mixtes.jpg";
import LasagneSeaFood from "../assets/lasgne/seafood.jpg";
import LasgneViande from "../assets/lasgne/viade-hacher.jpg";
import Spagitti from "../assets/spagitti/bolognaise.jpeg";
import SpaPoulet from "../assets/spagitti/poulet.jpg";
import SpaSeaFood from "../assets/spagitti/seaFood.webp";
import JusOrange from "../assets/jus/orange.jpeg";
import JusBanane from "../assets/jus/banane.jpg";
import JusPomme from "../assets/jus/Pomme.jpeg";
import JusAvocat from "../assets/jus/Avocat.jpeg";
import Panacher from "../assets/jus/Panache.jpg";
import BrochetteVH from "../assets/Brochette/plats-VH.jpg";
import BrochettePoulet from "../assets/Brochette/poulet.jpeg";
import BrochetteSau from "../assets/Brochette/Saucisse.webp";
import BrochetteM from "../assets/Brochette/mixtes.avif";
//
const MenuData = {
  Pizza: [
    {
      id: 1,
      title: "Pizza Margherita",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: PizzaMargarita,
      originalPrice: "25.89DH",
      discountedPrice: "19.99",
    },
    {
      id: 2,
      title: "Pizza Viande Hacher",
      description: "Loaded with spicy pepperoni and melted cheese.",
      image: PizzaViandHache,
      originalPrice: "35.89DH",
      discountedPrice: "29.89",
    },
    {
      id: 3,
      title: "Pizza Poulet",
      description: "Topped with fresh veggies and creamy cheese.",
      image: PizzaP,
      originalPrice: "35.89DH",
      discountedPrice: "29.89",
    },
    {
      id: 4,
      title: "Pizza Vegetarienne",
      description: "Topped with fresh veggies and creamy cheese.",
      image: PizzaV,
      originalPrice: "35.89DH",
      discountedPrice: "29.89",
    },
    {
      id: 5,
      title: "Pizza Thon",
      description: "Topped with fresh veggies and creamy cheese.",
      image: PizzaThon,
      originalPrice: "35.89DH",
      discountedPrice: "29.89",
    },
    {
      id: 6,
      title: "Pizza SeaFood",
      description: "Topped with fresh veggies and creamy cheese.",
      image: PizzaSea,
      originalPrice: "35.89DH",
      discountedPrice: "29.89",
    },
    {
      id: 7,
      title: "Pizza 4 Seasons",
      description: "Topped with fresh veggies and creamy cheese.",
      image: pizzaFour,
      originalPrice: "40.00DH",
      discountedPrice: "34.99",
    },
    {
      id: 8,
      title: "Pizza Special",
      description: "Topped with fresh veggies and creamy cheese.",
      image: PizzaSpecial,
      originalPrice: "40.00DH",
      discountedPrice: "34.99",
    },
  ],
  Salades: [
    {
      id: 1,
      title: "Salades Marocaine",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: saldeImage,
      originalPrice: "15.45DH",
      discountedPrice: "09.99DH",
    },
    {
      id: 2,
      title: "Salades Necoise",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: NecoiseImage,
      originalPrice: "18.45DH",
      discountedPrice: "14.99DH",
    },
    {
      id: 3,
      title: "Salades Pates",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: saladePate,
      originalPrice: "25.05DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 4,
      title: "Salades Riche",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: saladeriche,
      originalPrice: "25.05DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 5,
      title: "Salades Chef",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: saladechef,
      originalPrice: "35.44DH",
      discountedPrice: "24.99DH",
    },
    {
      id: 6,
      title: "Salades Precheur",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: saladeP,
      originalPrice: "25.65DH",
      discountedPrice: "29.89DH",
    },
  ],
  Panini: [
    {
      id: 1,
      title: "Panini Omlette",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: PaniniOmlete,
      originalPrice: "20.05DH",
      discountedPrice: "15.99DH",
    },
    {
      id: 2,
      title: "Panini Viande hache",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: PaniniViande,
      originalPrice: "23.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 3,
      title: "Panini Poulet",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: PaniniPoulet,
      originalPrice: "23.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 4,
      title: "Panini Sauccise",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: PaniniSauccaise,
      originalPrice: "23.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 5,
      title: "Panini Thon",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: PaniniThon,
      originalPrice: "23.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 6,
      title: "Panini Mixte",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: PaniniMixte,
      originalPrice: "29.65DH",
      discountedPrice: "24.89DH",
    },
    {
      id: 7,
      title: "Panini Fruits de mer",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: paniniseaFood,
      originalPrice: "35.75DH",
      discountedPrice: "29.89DH",
    },
  ],
  Cosamia: [
    {
      id: 1,
      title: "Cosamia Viande Hache",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: CosamiaViande,
      originalPrice: "25.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 2,
      title: "Cosamia Poulet",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: CosamiaViande,
      originalPrice: "23.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 3,
      title: "Cosamia Saussice",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: CosamiaViande,
      originalPrice: "23.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 4,
      title: "Cosamia Thon",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: CosamiaViande,
      originalPrice: "23.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 5,
      title: "Cosamia Mixte",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: CosamiaViande,
      originalPrice: "30.45DH",
      discountedPrice: "24.99DH",
    },
    {
      id: 6,
      title: "Cosamia Fruites d'mer ",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: CosamiaViande,
      originalPrice: "25.65DH",
      discountedPrice: "29.89DH",
    },
  ],
  Sandwish: [
    {
      id: 1,
      title: "Sandwish Omlette",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: SandwichOmlette,
      originalPrice: "15.45DH",
      discountedPrice: "09.99DH",
    },
    {
      id: 2,
      title: "Sandwish Viande Hache",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: SaViande,
      originalPrice: "18.45DH",
      discountedPrice: "14.99DH",
    },
    {
      id: 3,
      title: "Sandwish Poulet",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: SaPoulet,
      originalPrice: "18.45DH",
      discountedPrice: "14.99DH",
    },
    {
      id: 4,
      title: "Sandwish Saucisse",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: SaSauccaisse,
      originalPrice: "18.45DH",
      discountedPrice: "14.90DH",
    },
    {
      id: 5,
      title: "Sandwish Thon",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: SaThon,
      originalPrice: "18.45DH",
      discountedPrice: "14.90DH",
    },
    {
      id: 6,
      title: "Sandwish Sea Food",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: SaSeaFood,
      originalPrice: "29.65DH",
      discountedPrice: "24.89DH",
    },
  ],
  Burger: [
    {
      id: 1,
      title: "Burger Chesse",
      description: "Fresh Plats, basil, and tomato sauce.",
      image: BurgerChesse,
      originalPrice: "22.45DH",
      discountedPrice: "19.99DH",
    },
    {
      id: 2,
      title: "Burger Chiken",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: BurgerChiken,
      originalPrice: "22.45DH",
      discountedPrice: "19.99DH",
    },
  ],
  Tacos: [
    {
      id: 1,
      title: "Tacos Viande hacher",
      description: "Fresh Plats, basil, and tomato sauce.",
      image: TacosViande,
      originalPrice: "29.45 ",
      discountedPrice: "24.99",
    },
    {
      id: 2,
      title: "Tacos Chiken",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: TacosPoulet,
      originalPrice: "29.45DH",
      discountedPrice: "25.04",
    },
    {
      id: 3,
      title: "Tacos Saucisse",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: TacosSau,
      originalPrice: "29.45DH",
      discountedPrice: "25.04",
    },
    {
      id: 4,
      title: "Tacos Thon",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: TacosThon,
      originalPrice: "29.45DH",
      discountedPrice: "25.04",
    },
    {
      id: 5,
      title: "Tacos Mixtes",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: TacosMixte,
      originalPrice: "40.45DH",
      discountedPrice: "35.04",
    },
  ],
  Lasagne: [
    {
      id: 1,
      title: "Lasagne SeaFood",
      description: "Fresh Plats, basil, and tomato sauce.",
      image: LasagneSeaFood,
      originalPrice: "59.80DH",
      discountedPrice: "49.99",
    },
    {
      id: 2,
      title: "Lasagne Viande hacher",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: LasgneViande,
      originalPrice: "59.80DH",
      discountedPrice: "49.99",
    },
  ],
  Spa: [
    {
      id: 1,
      title: "Spagitti Bolognaise",
      description: "Fresh Plats, basil, and tomato sauce.",
      image: Spagitti,
      originalPrice: "35.80DH",
      discountedPrice: "29.99",
    },
    {
      id: 2,
      title: "Spagitti Poulet",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: SpaPoulet,
      originalPrice: "35.80DH",
      discountedPrice: "29.99",
    },
    {
      id: 3,
      title: "Spagitti SeaFood",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: SpaSeaFood,
      originalPrice: "45.80DH",
      discountedPrice: "34.99",
    },
  ],
  Jus: [
    {
      id: 1,
      title: "Jus Orange",
      description: "Fresh Plats, basil, and tomato sauce.",
      image: JusOrange,
      originalPrice: "19.80DH",
      discountedPrice: "14.99",
    },
    {
      id: 2,
      title: "Jus Banane",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: JusBanane,
      originalPrice: "19.80DH",
      discountedPrice: "14.99",
    },
    {
      id: 3,
      title: "Jus Pomme",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: JusPomme,
      originalPrice: "19.80DH",
      discountedPrice: "14.99DH",
    },
    {
      id: 4,
      title: "Jus Avocat",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: JusAvocat,
      originalPrice: "25.80DH",
      discountedPrice: "19.99",
    },
    {
      id: 5,
      title: "Coktail Panacher",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: Panacher,
      originalPrice: "25.80DH",
      discountedPrice: "19.99",
    },
  ],
  Brouchette: [
    {
      id: 1,
      title: "Brouchette Viande hacher",
      description: "Fresh Plats, basil, and tomato sauce.",
      image: BrochetteVH,
      originalPrice: "33.45DH",
      discountedPrice: "29.99",
    },
    {
      id: 2,
      title: "Brochette Poulet",
      description: "Fresh Poulet, basil, and tomato sauce.",
      image: BrochettePoulet,
      originalPrice: "33.45DH",
      discountedPrice: "29.99",
    },
    {
      id: 3,
      title: "Brouchette Soucaisse",
      description: "Fresh Saucaisse, basil, and tomato sauce.",
      image: BrochetteSau,
      originalPrice: "33.45DH",
      discountedPrice: "29.99",
    },
    {
      id: 4,
      title: "Brochette Mixte",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      image: BrochetteM,
      originalPrice: "42.05DH",
      discountedPrice: "35.99",
    },
  ],
};

export default MenuData;
