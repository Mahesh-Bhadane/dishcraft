import { useState } from "react";

const Header = ({ onSearch }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="flex items-center justify-between px-20 py-2 shadow-sm ">
      <div className="flex items-center">
        <img src="./recipe-book.jpg" alt="Dishcraft Logo" className="w-20" />
        <span className="text-xl font-semibold text-orange-400">Dishcraft</span>
      </div>
      <input
        name="search"
        className="px-3 py-1 text-sm transition-colors bg-transparent border rounded-md shadow-sm h-9 w-96 border-input placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        type="search"
        placeholder="Search for food and recipes"
        value={searchQuery}
        onChange={handleSearch}
      />
    </header>
  );
};

export default Header;
