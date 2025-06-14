import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

const Basket = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-neutral-light min-h-screen pb-16">
      {/* Page Header */}
      <div className="bg-white py-8 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Votre Panier</h1>
          <p className="text-gray-600">
            {totalItems} {totalItems === 1 ? "article" : "articles"} dans votre
            panier
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <h3 className="text-xl font-medium mb-2">
                  Votre panier est vide
                </h3>
                <p className="text-gray-600 mb-6">
                  Parcourez notre catalogue pour trouver des produits qui vous
                  plaisent.
                </p>
                <Link
                  href="/catalogue"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors font-medium"
                >
                  Voir le catalogue
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Articles ({totalItems})
                  </h2>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            ${item.price} x {item.quantity}
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="font-semibold">
                              ${item.price * item.quantity}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              aria-label="Retirer"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">
                Résumé de la commande
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/+243814264458?text=Bonjour!%20Je%20voudrais%20commander:%20${encodeURIComponent(
                    cartItems
                      .map(
                        (item) =>
                          `${item.name} (${item.quantity}x) - $${
                            item.price * item.quantity
                          }`
                      )
                      .join("%0A")
                  )}%0ATotal: $${totalPrice}`}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white py-3 rounded-lg transition-colors flex items-center justify-center font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Commander via WhatsApp
                </a>
                <Link
                  href="/catalogue"
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg transition-colors font-medium"
                >
                  Continuer les achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
