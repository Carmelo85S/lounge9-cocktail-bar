import React from "react";
import { MenuData } from "../../types/types";

interface Props {
  categories: (keyof MenuData)[];
  activeTab: keyof MenuData;
  setActiveTab: (tab: keyof MenuData) => void;
}

const MenuTabs: React.FC<Props> = ({ categories, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10 border-b border-amber-dark pb-4">
      {categories.map((category) => (
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
  );
};

export default MenuTabs;
