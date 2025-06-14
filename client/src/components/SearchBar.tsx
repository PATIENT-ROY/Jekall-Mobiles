import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useLocation } from "wouter";
import NoProductsFound from "@/components/NoProductsFound";

interface SearchSuggestion {
  id: string;
  name: string;
  brand: string;
}

const popularSearches: SearchSuggestion[] = [
  { id: "1", name: "iPhone 14 Pro", brand: "apple" },
  { id: "2", name: "Samsung Galaxy S23", brand: "samsung" },
  { id: "3", name: "Xiaomi Redmi Note", brand: "xiaomi" },
  { id: "4", name: "Google Pixel", brand: "google" },
  { id: "5", name: "AirPods Pro", brand: "apple" },
  { id: "6", name: "Galaxy Watch", brand: "samsung" },
];

const SearchBar = ({
  className = "",
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filtered = popularSearches.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions(popularSearches);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const matchingBrands = Array.from(
        new Set(suggestions.map((suggestion) => suggestion.brand))
      );

      if (matchingBrands.length > 0) {
        navigate(`/catalogue?brands=${matchingBrands.join(",")}`);
      } else {
        navigate("/catalogue");
      }
      setSearchTerm("");
      setIsFocused(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    navigate(`/catalogue?brands=${suggestion.brand}`);
    setSearchTerm("");
    setIsFocused(false);
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <form onSubmit={handleSearch} className="w-full group">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Trouver des produits"
            className="w-full py-2 px-4 pr-10 rounded-l-full rounded-r-full border-0 focus:ring-2 focus:ring-primary focus:outline-none bg-white text-neutral-dark shadow-sm group-hover:shadow-md transition-shadow duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              className="h-full px-4 bg-accent hover:bg-accent/90 text-neutral-dark rounded-r-full transition-all duration-200 font-medium"
              aria-label="Rechercher"
            >
              <Search className="h-4 w-4 mr-1 inline" />
              {!mobile && <span>Rechercher</span>}
            </button>
          </div>
        </div>
      </form>

      {isFocused && (
        <div className="absolute w-full bg-white shadow-lg rounded-lg mt-2 overflow-hidden z-20 border border-gray-100 animate-in fade-in-50 duration-150">
          <div className="p-3 border-b border-gray-100">
            <div className="font-medium text-sm text-gray-700">
              Suggestions de recherche
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  className="block w-full text-left py-2.5 px-3 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-50 last:border-none"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-center">
                    <Search className="h-4 w-4 mr-2 text-gray-400" />
                    <div>
                      <div>{suggestion.name}</div>
                      <div className="text-xs text-gray-500">
                        {suggestion.brand}
                      </div>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <Search className="h-8 w-8 text-gray-300" />
                </div>
                <NoProductsFound />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
