import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-Found";
import Home from "@/pages/Home";
import Catalogue from "@/pages/catégories";
import About from "@/pages/about";
import Address from "@/pages/adress";
import Basket from "@/pages/panier";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScrollProvider from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/catalogue" component={Catalogue} />
      <Route path="/a-propos" component={About} />
      <Route path="/adresse" component={Address} />
      <Route path="/panier" component={Basket} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SmoothScrollProvider offset={80}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Router />
              </main>
              <Footer />
              <ScrollToTop />
            </div>
            <Toaster />
          </SmoothScrollProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;
