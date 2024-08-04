//let productDetails=document.getElementById("productDetails");
let products = document.getElementById("products");
let cartProducts = document.getElementById("cartProducts");
let total=0;
const Products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
];

Products.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("productDetails", "m-5")

    div.innerHTML = `<h3 id="productName">${item.name}</h3>
                        <h3 id="productPrice">${item.price}</h3>
                        <div class="buttons">
                            <button class="add btn m-1 fs-5" id="add">+</button>
                            <span class="quantity" id="quantity">0</span>
                            <button class="minus btn m-1 fs-5" id="minus">-</button>

                        </div>`
    products.append(div);

})
let addBtn = document.querySelectorAll("#add");

addBtn.forEach((addButton, index) => {

    addButton.addEventListener('click', function (e) {
        if(cartProducts.innerHTML)
            {
                cartProducts.innerHTML = " ";
    
            }
        Products.forEach((product) => {
            // console.log(product.id);
            // console.log(index+1);
            // console.log()

            if (product.id === index + 1) {
                //console.log(typeof(product.quantity))

                if (product.quantity >= 1 && product.quantity !== "NaN" && product.quantity !== "undefined") {

                    product.quantity += 1;
                    e.target.parentNode.children[1].innerText = product.quantity;
                    total+=product.price;

                }
                else {
                    product.quantity = 1;
                    total+=product.price;
                    e.target.parentNode.children[1].innerText = product.quantity;
                }
            }
        })
        
        renderCart();
    })
})
let minusBtn = document.querySelectorAll("#minus");

minusBtn.forEach((minusButton, index) => {
    minusButton.addEventListener('click', function (e) {
        if(cartProducts.innerHTML)
        {
            cartProducts.innerHTML = " ";

        }
        
        Products.forEach((product) => {
            // console.log(product.id);
            // console.log(index+1);
            // console.log()
            if (product.id === index + 1) {
                //console.log(typeof(product.quantity))

                if (product.quantity >= 1 && product.quantity !== "NaN" && product.quantity !== "undefined") {

                    product.quantity -= 1;
                    e.target.parentNode.children[1].innerText = product.quantity;
                    total-=product.price;

                }
                else {
                    alert("Invalid Input")
                }
            }
        })
       renderCart();
    })
})
function renderCart() {
    Products.forEach((product) => {
        if(product.quantity>0)
        {
            let div = document.createElement("div");
        div.classList.add("cartProductDetails", "m-5");
        div.innerHTML = `<h3 id="productName">${product.name}</h3>

                        <div class="cartProductDetails2">

                            <span class="cartQuantity m-3 fs-5" id="cartQuantity">${product.quantity}</span>
                            <span>X</span>
                            <span class="itemPrice m-3 fs-5" id="itemPrice">${product.price}</span>


                        </div>
                    </div>
                    <div class="total">
                        <p>Total:-</p>
                        <p class="amount"> ${total}</p>

                    </div>`
                        cartProducts.append(div);

        }
        
    })
}
