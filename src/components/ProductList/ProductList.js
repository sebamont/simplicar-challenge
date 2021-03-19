import React from 'react';

import './ProductList.css';

const ProductListComp = () => {
    return(
        <div id="product-list-container">

        </div>
    )
}

export default ProductListComp;

// var myarray = []
// myarray.push({model: "Nissan March", price: 10000})
// myarray.push({model: "Ford Fiesta", price: 8000})
// myarray.push({model: "Volkswagen Polo", price: 6000});

//Sorting methods based on object keys FOR STRINGS (A-Z).
// myarray.sort((a, b) => a.model.localeCompare(b.model));

//Sorting methods based on object keys FOR STRINGS (Z-A).
// myarray.sort((a, b) => a.model.localeCompare(b.model)).reverse();

//Sorting methods based on object keys FOR NUMBERS (max to min)
// myarray.sort((a, b) => b.price-a.price);

//Sorting methods based on object keys FOR NUMBERS (min to max)
// myarray.sort((a, b) => b.price-a.price).reverse();