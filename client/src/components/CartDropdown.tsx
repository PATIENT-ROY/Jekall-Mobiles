import { ShoppingCart, Trash2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "wouter";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleAddToCartEvent = (event: CustomEvent) => {
      addToCart(event.detail);
      setIsOpen(true);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener(
      "addToCart",
      handleAddToCartEvent as EventListener
    );

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener(
        "addToCart",
        handleAddToCartEvent as EventListener
      );
    };
  }, [addToCart]);

  const handleViewCart = () => {
    navigate("/panier");
    setIsOpen(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-white hover:text-accent transition-colors"
        aria-label="Panier"
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-lg">Panier</h3>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Votre panier est vide
              </div>
            ) : (
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center gap-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-primary font-medium">
                          ${item.price}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">
                            x{item.quantity}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">${totalPrice}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleViewCart}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg transition-colors text-center"
                >
                  Voir le panier
                </button>
                <a
                  href="https://wa.me/+243814264458"
                  className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-white py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2" /> Commander
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
