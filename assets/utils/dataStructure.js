const normalizeCartItem = (item) => {
    return {
      id: item.id || item.name, // Ensure each item has a unique ID
      name: item.name,
      price: item.price,
      image: item.image || '',
      qty: item.qty,
      selectedOptions: item.selectedOptions || {},
    };
  };

  export default normalizeCartItem;