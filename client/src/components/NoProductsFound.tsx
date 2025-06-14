const NoProductsFound = () => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Aucun produit trouvé</h3>
      <p className="text-gray-600 mb-6">
        Essayez de modifier ou de supprimer certains filtres pour voir plus de
        produits.
      </p>
    </div>
  );
};

export default NoProductsFound;
