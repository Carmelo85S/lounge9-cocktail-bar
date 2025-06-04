import { useState } from "react";
import { MenuData } from "../../types/types";
import MenuHeader from "./MenuHeader";
import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";
import MenuQuote from "./MenuQuote";

const Menu = () => {
const menuData: MenuData = {
  Cocktails: [
    {id: 1, name: "Mojito", description: "White rum, fresh lime juice, mint leaves, sugar, and soda water.", price: 12,},
    {id: 2, name: "Old Fashioned", description: "Bourbon, sugar, Angostura bitters, and a twist of orange peel.", price: 14,},
    {id: 3, name: "Cosmopolitan", description: "Vodka, triple sec, cranberry juice, and fresh lime juice.", price: 13,},
    {id: 4, name: "Negroni", description: "Gin, Campari, and sweet vermouth.", price: 15,},
    {id: 5, name: "Martini", description: "Gin and dry vermouth, garnished with an olive or a lemon twist.", price: 14,},
    {id: 6, name: "Daiquiri", description: "White rum, lime juice, and simple syrup.", price: 12,},
  ],
  Food: [
    {id: 1, name: "Margherita Pizza", description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.", price: 18,},
    {id: 2, name: "Caesar Salad", description: "Romaine lettuce, parmesan cheese, croutons, and Caesar dressing.", price: 14,},
    {id: 3, name: "Spaghetti Carbonara", description: "Pasta with eggs, cheese, pancetta, and pepper.", price: 20,},
    {id: 4, name: "Grilled Salmon", description: "Fresh salmon fillet grilled and served with vegetables.", price: 25,},
    {id: 5, name: "Beef Burger", description: "Juicy beef patty with lettuce, tomato, and cheese in a bun.", price: 16,},
    {id: 6, name: "Vegetable Stir Fry", description: "Mixed seasonal vegetables sautéed in a soy-based sauce.", price: 15,},
  ],
  Wine: [
    {id: 1, name: "Chardonnay", description: "A full-bodied white wine with notes of apple and vanilla.", price: 20,},
    {id: 2, name: "Pinot Noir", description: "Light-bodied red wine with hints of cherry and raspberry.", price: 22,},
    {id: 3, name: "Sauvignon Blanc", description: "Crisp white wine with citrus and herbal notes.", price: 19,},
    {id: 4, name: "Merlot", description: "Medium-bodied red wine with plum and chocolate flavors.", price: 21,},
    {id: 5, name: "Rosé", description: "Fresh and fruity pink wine with berry aromas.", price: 18,},
    {id: 6, name: "Cabernet Sauvignon", description: "Full-bodied red wine with dark fruit and oak flavors.", price: 24,},
  ],
};

  const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Cocktails");

  return (
    <section id="menu" className="bg-amber-light/10 py-16 px-4 sm:px-8 lg:px-24 font-serif">
      <MenuHeader />
      <div className="max-w-5xl mx-auto">
        <MenuTabs
          setActiveTab={(tab) => setActiveTab(tab as keyof typeof menuData)}
          categories={Object.keys(menuData) as (keyof typeof menuData)[]}
          activeTab={activeTab}
        />
        <MenuList items={menuData[activeTab]} key={activeTab} keyId={activeTab as string} />
        <MenuQuote />
      </div>
    </section>
  );
};

export default Menu;
