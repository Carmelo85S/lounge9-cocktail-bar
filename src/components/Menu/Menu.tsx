import { useState } from "react";

const Menu = () => {
  const menuData: {
    [key: string]: { name: string; description: string; price: string }[];
  } = {
    Cocktails: [
      { name: "Negroni", description: "Gin, Campari, sweet vermouth", price: "185 SEK" },
      { name: "Old Fashioned", description: "Bourbon, bitters, sugar cube, orange zest", price: "190 SEK" },
      { name: "Espresso Martini", description: "Vodka, coffee liqueur, fresh espresso", price: "195 SEK" },
      { name: "French 75", description: "Gin, champagne, lemon juice, sugar", price: "200 SEK" },
      { name: "Classic Daiquiri", description: "White rum, lime juice, sugar syrup", price: "180 SEK" },
      { name: "Margarita", description: "Tequila, triple sec, fresh lime juice", price: "190 SEK" },
    ],
    Food: [
      { name: "Club Sandwich", description: "Turkey, bacon, lettuce, tomato, mayo", price: "150 SEK" },
      { name: "Caesar Salad", description: "Grilled chicken, parmesan, romaine, croutons", price: "160 SEK" },
      { name: "Gourmet Burger", description: "Beef patty, cheddar, caramelized onion", price: "185 SEK" },
      { name: "Tuna Tartare", description: "Fresh tuna, avocado, lime, soy glaze", price: "210 SEK" },
      { name: "Soup of the Day", description: "Prepared daily by our chef", price: "140 SEK" },
      { name: "Charcuterie Board", description: "Selection of cured meats, cheeses, focaccia", price: "230 SEK" },
    ],
    Wine: [
      { name: "Chardonnay", description: "Fruity with notes of vanilla and oak", price: "200 SEK" },
      { name: "Barolo", description: "Full-bodied, rich tannins, dark fruit", price: "210 SEK" },
      { name: "Sauvignon Blanc", description: "Fresh, citrusy and herbaceous notes", price: "190 SEK" },
      { name: "Pinot Noir", description: "Elegant, cherry and spice aromas", price: "205 SEK" },
      { name: "Rosé de Provence", description: "Light, floral and refreshing", price: "195 SEK" },
      { name: "Amarone", description: "Intense, complex, dried fruit notes", price: "240 SEK" },
    ],
  };

  const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Cocktails");

  return (
    <section id="menu" className="bg-amber-light/10 py-16 px-4 sm:px-8 lg:px-24 font-serif py-16">
        <div className="flex flex-col justify-between items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
                Our Menu
            </h2>
            <p className="text-lg font-serif font-bold mb-4">
                Carefully crafted cocktails and delicious bites
            </p>
        </div>
        <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 border-b border-amber-dark pb-4">
            {Object.keys(menuData).map((category) => (
                <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 text-md rounded-full transition-all duration-300 tracking-wide ${
                    activeTab === category
                    ? "bg-amber text-white shadow-md"
                    : "bg-white text-night border border-amber hover:bg-amber-light hover:text-night"
                }`}
                >
                {category}
                </button>
            ))}
            </div>

            {/* Menu Items */}
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                {menuData[activeTab].map((item, index) => (
                    <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
                    >
                    <div className="flex justify-between items-start">
                        <div>
                        <h3 className="text-xl font-serif font-bold text-amber-dark">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                        <span className="text-amber-dark font-semibold text-sm whitespace-nowrap mt-1">
                        {item.price}
                        </span>
                    </div>
                    </div>
                ))}
            </section>

            {/* Quote / Description Banner */}
            <section className="text-center mt-16 max-w-3xl mx-auto">
            <p className="italic text-night text-lg sm:text-xl font-serif font-medium px-6">
                “Whether you're looking for an expertly made classic or something more adventurous, our skilled mixologists are ready to create the perfect drink for you.”
            </p>
            </section>
        </div>
    </section>
  );
};

export default Menu;
