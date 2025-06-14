import { useState } from "react";
import {
  Star,
  ChevronDown,
  Search,
  X,
  SlidersHorizontal,
  Plus,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import NoProductsFound from "@/components/NoProductsFound";

// Brands data
const brands = [
  // Smartphones
  {
    id: "apple",
    name: "Apple",
    logo: "https://patient-roy.github.io/jekall/images/brand/iPhone/iphone.png",
    category: "smartphones",
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "https://patient-roy.github.io/jekall/images/brand/Samsung/samsung.png",
    category: "smartphones",
  },
  {
    id: "google",
    name: "Google Pixel",
    logo: "https://patient-roy.github.io/jekall/images/brand/Google%20Pixel/google%20pixel.png",
    category: "smartphones",
  },
  {
    id: "oneplus",
    name: "One Plus",
    logo: "https://patient-roy.github.io/jekall/images/brand/One%20plus/one%20plus.png",
    category: "smartphones",
  },
  {
    id: "poco",
    name: "Poco",
    logo: "https://patient-roy.github.io/jekall/images/brand/Poco/poco.png",
    category: "smartphones",
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
    logo: "https://patient-roy.github.io/jekall/images/brand/Xiaomi/xiomi.png",
    category: "smartphones",
  },
  {
    id: "huawei",
    name: "Huawei",
    logo: "https://patient-roy.github.io/jekall/images/brand/Huawei/huawei.png",
    category: "smartphones",
  },
  {
    id: "honor",
    name: "Honor",
    logo: "https://patient-roy.github.io/jekall/images/brand/Honor/honor.png",
    category: "smartphones",
  },
  {
    id: "infinix",
    name: "Infinix",
    logo: "https://patient-roy.github.io/jekall/images/brand/Infinix/infinix.png",
    category: "smartphones",
  },
  {
    id: "realme",
    name: "Realme",
    logo: "https://patient-roy.github.io/jekall/images/brand/Realme/realme.png",
    category: "smartphones",
  },
  {
    id: "tecno",
    name: "Tecno",
    logo: "https://patient-roy.github.io/jekall/images/brand/Tecno/tecno.png",
    category: "smartphones",
  },

  // Tablet brands
  {
    id: "leapfrog",
    name: "LeapFrog",
    logo: "https://logowik.com/content/uploads/images/leapfrog5179.jpg",
    category: "tablets",
  },
  {
    id: "dragon",
    name: "Dragon Touch",
    logo: "https://seeklogo.com/images/D/dragon-touch-logo-49B4288EB4-seeklogo.com.png",
    category: "tablets",
  },
  {
    id: "amazon",
    name: "Amazon Fire",
    logo: "https://www.logo.wine/a/logo/Amazon_Fire_HD/Amazon_Fire_HD-Logo.wine.svg",
    category: "tablets",
  },

  // Accessory brands
  {
    id: "beats",
    name: "Beats by Dre",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Beats_Electronics_logo.svg",
    category: "accessories",
  },
  {
    id: "anker",
    name: "Anker",
    logo: "https://logosvector.net/wp-content/uploads/2013/05/anker-vector-logo.png",
    category: "accessories",
  },
  {
    id: "belkin",
    name: "Belkin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Belkin_logo.svg",
    category: "accessories",
  },
];

// Product data
const products = [
  // Smartphones
  {
    id: "1",
    name: "iPhone 14 Pro",
    price: 999,
    brand: "apple",
    category: "smartphones",
    image: "https://patient-roy.github.io/jekall/images/Apple/apple1.png",
    rating: 4.9,
    reviews: 128,
    storage: "128 Go",
    color: "Noir",
    new: true,
  },
  {
    id: "2",
    name: "iPhone 14 Pro Max",
    price: 1099,
    brand: "apple",
    category: "smartphones",
    image: "https://patient-roy.github.io/jekall/images/Apple/apple2.png",
    rating: 4.8,
    reviews: 95,
    storage: "256 Go",
    color: "Argent",
    new: true,
  },
  {
    id: "3",
    name: "Samsung Galaxy S23",
    price: 879,
    brand: "samsung",
    category: "smartphones",
    image: "https://patient-roy.github.io/jekall/images/Samsung/samsung1.png",
    rating: 4.7,
    reviews: 86,
    storage: "128 Go",
    color: "Noir",
    new: true,
  },
  {
    id: "4",
    name: "Google Pixel 8 Pro",
    price: 899,
    brand: "google",
    category: "smartphones",
    image:
      "https://patient-roy.github.io/jekall/images/google/google%20pixel%208%20pro.png",
    rating: 4.7,
    reviews: 74,
    storage: "256 Go",
    color: "Blanc",
    new: true,
  },
  {
    id: "5",
    name: "Xiaomi 13",
    price: 599,
    brand: "xiaomi",
    category: "smartphones",
    image: "https://patient-roy.github.io/jekall/images/Xiaomi/Xiaomi1.png",
    rating: 4.6,
    reviews: 62,
    storage: "128 Go",
    color: "Noir",
    new: false,
  },
  {
    id: "6",
    name: "Xiaomi Redmi Note 12",
    price: 299,
    brand: "xiaomi",
    category: "smartphones",
    image: "https://patient-roy.github.io/jekall/images/Xiaomi/Xiaomi2.png",
    rating: 4.5,
    reviews: 58,
    storage: "64 Go",
    color: "Bleu",
    new: false,
  },
  {
    id: "7",
    name: "One Plus 11",
    price: 699,
    brand: "oneplus",
    category: "smartphones",
    image:
      "https://patient-roy.github.io/jekall/images/brand/One%20plus/one%20plus.png",
    rating: 4.6,
    reviews: 49,
    storage: "128 Go",
    color: "Noir",
    new: false,
  },
  {
    id: "8",
    name: "Samsung Galaxy A56 5G",
    price: 399,
    brand: "samsung",
    category: "smartphones",
    image: "https://patient-roy.github.io/jekall/images/Samsung/samsung1.png",
    rating: 4.4,
    reviews: 42,
    storage: "128 Go",
    color: "Bleu",
    new: false,
  },

  // Accessories
  {
    id: "9",
    name: "AirPods Pro (2ème gen)",
    price: 249,
    brand: "apple",
    category: "accessories",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg",
    rating: 4.8,
    reviews: 142,
    storage: null,
    color: "Blanc",
    new: true,
  },
  {
    id: "10",
    name: "Galaxy Buds 2 Pro",
    price: 179,
    brand: "samsung",
    category: "accessories",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/fr/2208/gallery/fr-galaxy-buds2-pro-r510-sm-r510nzaaeub-533186123",
    rating: 4.6,
    reviews: 87,
    storage: null,
    color: "Noir",
    new: false,
  },
  {
    id: "11",
    name: "Chargeur sans fil MagSafe",
    price: 49,
    brand: "apple",
    category: "accessories",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg",
    rating: 4.5,
    reviews: 65,
    storage: null,
    color: "Blanc",
    new: false,
  },
  {
    id: "12",
    name: "Smart Watch Serie 9",
    price: 399,
    brand: "apple",
    category: "accessories",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT503ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR_WF_CO+watch-face-49-alpine-ultra2_VW_34FR_WF_CO?wid=700&hei=700",
    rating: 4.9,
    reviews: 112,
    storage: null,
    color: "Argent",
    new: true,
  },
  {
    id: "13",
    name: "Coque iPhone 14 Pro Silicone",
    price: 39,
    brand: "apple",
    category: "accessories",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTJ3?wid=1144&hei=1144&fmt=jpeg",
    rating: 4.3,
    reviews: 58,
    storage: null,
    color: "Bleu",
    new: false,
  },

  // Tablets for Kids
  {
    id: "14",
    name: "Tablette Enfant 10 pouces",
    price: 129,
    brand: "tecno",
    category: "tablets",
    image: "https://m.media-amazon.com/images/I/71YdE55GwjL._AC_SL1500_.jpg",
    rating: 4.5,
    reviews: 78,
    storage: "32 Go",
    color: "Bleu",
    new: true,
  },
  {
    id: "15",
    name: "Tablette Éducative LeapFrog",
    price: 89,
    brand: "leapfrog",
    category: "tablets",
    image: "https://m.media-amazon.com/images/I/715-8Gj6WzL._AC_SL1500_.jpg",
    rating: 4.7,
    reviews: 103,
    storage: "16 Go",
    color: "Vert",
    new: false,
  },
  {
    id: "16",
    name: "Tablette Dragon Touch K10",
    price: 159,
    brand: "dragon",
    category: "tablets",
    image: "https://m.media-amazon.com/images/I/71LlSIgqN3L._AC_SL1500_.jpg",
    rating: 4.4,
    reviews: 64,
    storage: "32 Go",
    color: "Rose",
    new: true,
  },
  {
    id: "17",
    name: "FireHD 8 Kids Edition",
    price: 119,
    brand: "amazon",
    category: "tablets",
    image: "https://m.media-amazon.com/images/I/61IX93Shd9L._AC_SL1000_.jpg",
    rating: 4.6,
    reviews: 92,
    storage: "32 Go",
    color: "Bleu",
    new: false,
  },
];

const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    image:
      "https://patient-roy.github.io/jekall/images/icon-categories/i-removebg-preview.png",
  },
  {
    id: "accessories",
    name: "Accessoires",
    image:
      "https://patient-roy.github.io/jekall/images/icon-categories/accessories-icon.png",
  },
  {
    id: "tablets",
    name: "Tablettes enfants",
    image:
      "https://patient-roy.github.io/jekall/images/icon-categories/image.png",
  },
];

// Extract unique storage options from products, filtering out null values
const storageOptions = Array.from(
  new Set(
    products
      .map((product) => product.storage)
      .filter((storage): storage is string => storage !== null)
  )
); // Type assertion to ensure non-null
// Extract unique color options from products
const colorOptions = Array.from(
  new Set(products.map((product) => product.color))
);
const priceRanges = [
  { id: "0-300", label: "Moins de 300$" },
  { id: "300-500", label: "300$ - 500$" },
  { id: "500-800", label: "500$ - 800$" },
  { id: "800-1000", label: "800$ - 1000$" },
  { id: "1000+", label: "Plus de 1000$" },
];

const Catalogue = () => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured"); // featured, price-low, price-high, newest, popular

  // Handlers for filters
  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const toggleStorage = (storage: string) => {
    setSelectedStorage((prev) =>
      prev.includes(storage)
        ? prev.filter((s) => s !== storage)
        : [...prev, storage]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
    setSelectedStorage([]);
    setSelectedColors([]);
    setSelectedPriceRanges([]);
    setShowNewOnly(false);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Filter by search term
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Filter by category
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }

    // Filter by brand
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Filter by storage (only if product has storage)
    if (
      selectedStorage.length > 0 &&
      product.storage &&
      !selectedStorage.includes(product.storage)
    ) {
      return false;
    }

    // Filter by color
    if (selectedColors.length > 0 && !selectedColors.includes(product.color)) {
      return false;
    }

    // Filter by new status
    if (showNewOnly && !product.new) {
      return false;
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      const matchesAnyRange = selectedPriceRanges.some((range) => {
        if (range === "0-300") return product.price < 300;
        if (range === "300-500")
          return product.price >= 300 && product.price < 500;
        if (range === "500-800")
          return product.price >= 500 && product.price < 800;
        if (range === "800-1000")
          return product.price >= 800 && product.price < 1000;
        if (range === "1000+") return product.price >= 1000;
        return false;
      });

      if (!matchesAnyRange) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "newest") return a.new === b.new ? 0 : a.new ? -1 : 1;
    if (sortBy === "popular") return b.rating - a.rating;
    // Default: featured (no specific sort)
    return 0;
  });

  const handleAddToCart = (product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => {
    // Create and dispatch a custom event that bubbles up through the DOM
    const event = new CustomEvent("addToCart", {
      detail: product,
      bubbles: true,
      composed: true,
    });
    document.dispatchEvent(event);
  };

  return (
    <div className="bg-neutral-light min-h-screen pb-16">
      {/* Page Header */}
      <div className="bg-white py-8 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Catalogue</h1>
          <p className="text-gray-600">
            Découvrez notre vaste sélection de smartphones et accessoires de
            qualité
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Selection */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-6">Catégories</h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-neutral-light hover:bg-neutral-light/70 border-2 border-transparent"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="h-14 w-14 mb-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="font-medium text-sm md:text-base">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            className="w-full bg-white border py-3 px-4 rounded-lg flex items-center justify-center font-medium"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="mr-2 h-5 w-5" />
            {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Panel (Sidebar) */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block md:w-1/4 lg:w-1/5 space-y-6`}
          >
            {/* Search Filter */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-4 pr-10 rounded-lg border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {searchTerm ? (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  ) : (
                    <Search className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center">
                <span>Marques</span>
                {selectedBrands.length > 0 && (
                  <span className="ml-2 bg-primary text-white text-xs py-0.5 px-2 rounded-full">
                    {selectedBrands.length}
                  </span>
                )}
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`brand-${brand.id}`}
                      checked={selectedBrands.includes(brand.id)}
                      onChange={() => toggleBrand(brand.id)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label
                      htmlFor={`brand-${brand.id}`}
                      className="ml-2 text-sm font-medium text-gray-700 flex items-center"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-5 h-5 mr-2 object-contain"
                      />
                      {brand.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage Filter */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center">
                <span>Stockage</span>
                {selectedStorage.length > 0 && (
                  <span className="ml-2 bg-primary text-white text-xs py-0.5 px-2 rounded-full">
                    {selectedStorage.length}
                  </span>
                )}
              </h3>
              <div className="space-y-2">
                {storageOptions.map((storage) => (
                  <div key={storage} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`storage-${storage}`}
                      checked={selectedStorage.includes(storage)}
                      onChange={() => toggleStorage(storage)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label
                      htmlFor={`storage-${storage}`}
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      {storage}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center">
                <span>Couleur</span>
                {selectedColors.length > 0 && (
                  <span className="ml-2 bg-primary text-white text-xs py-0.5 px-2 rounded-full">
                    {selectedColors.length}
                  </span>
                )}
              </h3>
              <div className="space-y-2">
                {colorOptions.map((color) => (
                  <div key={color} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`color-${color}`}
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleColor(color)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label
                      htmlFor={`color-${color}`}
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center">
                <span>Prix</span>
                {selectedPriceRanges.length > 0 && (
                  <span className="ml-2 bg-primary text-white text-xs py-0.5 px-2 rounded-full">
                    {selectedPriceRanges.length}
                  </span>
                )}
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <div key={range.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`price-${range.id}`}
                      checked={selectedPriceRanges.includes(range.id)}
                      onChange={() => togglePriceRange(range.id)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label
                      htmlFor={`price-${range.id}`}
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* New Products Filter */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Nouveautés uniquement</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={showNewOnly}
                    onChange={() => setShowNewOnly(!showNewOnly)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            {/* Clear Filters Button */}
            {(selectedBrands.length > 0 ||
              selectedStorage.length > 0 ||
              selectedColors.length > 0 ||
              selectedPriceRanges.length > 0 ||
              showNewOnly ||
              searchTerm) && (
              <button
                className="w-full bg-white border border-gray-300 py-2 px-4 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                onClick={clearAllFilters}
              >
                Effacer tous les filtres
              </button>
            )}
          </div>

          {/* Product List */}
          <div className="flex-1">
            {/* Sorting & Results Count */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p className="text-gray-700 mb-2 sm:mb-0">
                <span className="font-semibold">{sortedProducts.length}</span>{" "}
                produits trouvés
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-neutral-light pl-3 pr-8 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary text-sm font-medium cursor-pointer"
                >
                  <option value="featured">En vedette</option>
                  <option value="price-low">Prix: croissant</option>
                  <option value="price-high">Prix: décroissant</option>
                  <option value="newest">Nouveautés</option>
                  <option value="popular">Popularité</option>
                </select>
                <ChevronDown className="h-4 w-4 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative"
                  >
                    {product.new && (
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium py-1 px-2 rounded-full z-10">
                        Nouveau
                      </div>
                    )}
                    <div className="p-4 flex justify-center h-48 bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <span>{product.storage}</span>
                        <span className="mx-1">•</span>
                        <span>{product.color}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm text-gray-700">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          ({product.reviews} avis)
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-lg">
                          ${product.price}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition-colors"
                            aria-label="Ajouter au panier"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                          <a
                            href={`https://wa.me/+243814264458?text=Bonjour!%20Je%20voudrais%20commander%20un%20${encodeURIComponent(
                              product.name
                            )}.`}
                            className="bg-whatsapp hover:bg-whatsapp/90 text-white p-2 rounded-lg transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaWhatsapp className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="flex justify-center mb-4">
                  <Search className="h-12 w-12 text-gray-300" />
                </div>
                <NoProductsFound />
                <button
                  className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-lg font-medium transition-colors"
                  onClick={clearAllFilters}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
              <div className="mt-10 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="h-10 px-4 border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Précédent
                  </button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">
                    1
                  </button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600">
                    2
                  </button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600">
                    3
                  </button>
                  <button className="h-10 px-4 border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-gray-50">
                    Suivant
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
