const order = {
    "id": 1,
    "userId": 1,
    "date": "2024-11-02",
    "products": [
      { "productId": 1, "quantity": 4 },
      { "productId": 2, "quantity": 1 },
      { "productId": 3, "quantity": 6 }
    ]
  };

  // Function to display products
  function displayProducts(order) {
    const displayCart = document.getElementById('showCart');
    displayCart.innerHTML = `<p id ="date">Order Date: ${new Date(order.date).toLocaleDateString()}</p>`;

    order.products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <p id ="product-id">Product ID: ${product.productId}</p>
        <p id ="quantity">Quantity: ${product.quantity}</p>
        <hr>
      `;
      displayCart.appendChild(productDiv);
    });
  }

  // Call the function to display products
  displayProducts(order);