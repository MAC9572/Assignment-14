           // Function to fetch and display products
           function fetchAndDisplayProducts(searchTerm = "") {
           fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                let productList =document.getElementById('product-list')
                let product= ``

                // Filter products based on search term
                json = json.filter(products =>
                  products.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  products.description.toLowerCase().includes(searchTerm.toLowerCase())
              );

                // Generate product cards

                for(let products of json){
                    product+=`<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card" >
                    <img src="${products.image}" class="card-img-top product-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title" id ="product-title">${products.title}</h5>
                      <p>$${products.price}</p>
                      <p class="card-text" id ="product-desc">${products.description}</p>
                      <a href="#" class="btn btn-primary">Buy Now</a>
                      <a href="#" class="btn btn-warning">Add to Cart</a>
                    </div>
                  </div>
                  </div>`
                }
                productList.innerHTML=product;   
            });
          }

          // Event listener for search button
        document.getElementById('search-button').addEventListener('click', () => {
          const searchTerm = document.getElementById('search-input').value;
          fetchAndDisplayProducts(searchTerm);
      });

      // Initial fetch to display all products
      fetchAndDisplayProducts();


            