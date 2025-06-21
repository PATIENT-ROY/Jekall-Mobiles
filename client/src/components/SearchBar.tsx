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
  { id: "7", name: "One Plus 11", brand: "oneplus" },
  { id: "8", name: "Huawei P60", brand: "huawei" },
  { id: "9", name: "Smartphones", brand: "smartphones" },
  { id: "10", name: "Accessoires", brand: "accessories" },
  { id: "11", name: "Tablettes", brand: "tablets" },
  { id: "12", name: "Apple", brand: "apple" },
  { id: "13", name: "Samsung", brand: "samsung" },
  { id: "14", name: "Xiaomi", brand: "xiaomi" },
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
        navigate(
          `/catalogue?brands=${matchingBrands.join(
            ","
          )}&search=${encodeURIComponent(searchTerm.trim())}`
        );
      } else {
        navigate(`/catalogue?search=${encodeURIComponent(searchTerm.trim())}`);
      }
      setSearchTerm("");
      setIsFocused(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    navigate(
      `/catalogue?brands=${suggestion.brand}&search=${encodeURIComponent(
        suggestion.name
      )}`
    );
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
        <div className="absolute w-full bg-white shadow-lg rounded-lg mt-2 overflow-hidden z-20 border border-gray-100 animate-in fade-in-50 duration-150 max-h-[80vh] sm:max-h-60">
          <div className="p-3 border-b border-gray-100">
            <div className="font-medium text-sm text-gray-700">
              Suggestions de recherche
            </div>
          </div>
          <div className="max-h-[calc(80vh-60px)] sm:max-h-48 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  className="block w-full text-left py-3 px-3 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-50 last:border-none sm:py-2.5"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-center">
                    <Search className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate">{suggestion.name}</div>
                      <div className="text-xs text-gray-500 truncate">
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
