document.addEventListener('DOMContentLoaded', function() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    function updateCartTotal() {
        let total = 0;
        const cartItems = document.querySelectorAll('.cart-item');
        cartItems.forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.dataset.quantity);
            total += price * quantity;
        });
        totalElement.textContent = total.toFixed(2);
    }

    function addToCart(productName, productPrice) {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.dataset.name = productName;
        li.dataset.price = productPrice;
        li.dataset.quantity = 1; // Initialize quantity to 0
        li.innerHTML = `${productName} - &#8377;${productPrice} 
            <button class="remove-from-cart"style = "width:80px;height:30px;margin-bottom:20px">Remove</button> 
            <span class="quantity">Quantity: <span class="product-quantity">${li.dataset.quantity}</span></span>
            <button class="increment" style = "width:30px;height:30px">+</button>
            <button class="decrement" style = "width:30px;height:30px;">-</button>`;
        cartItemsElement.appendChild(li);
        updateCartTotal();
    }

    function handleAddToCartClick(event) {
        const product = event.target.parentElement;
        const productName = product.dataset.name;
        const productPrice = product.dataset.price;
        addToCart(productName, productPrice);
    }

    function handleRemoveFromCartClick(event) {
        const item = event.target.parentElement;
        item.remove();
        updateCartTotal();
    }

    function handleQuantityChange(event) {
        const button = event.target;
        const item = button.parentElement;
        const quantityElement = item.querySelector('.product-quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (button.classList.contains('increment')) {
            quantity++;
        } else if (button.classList.contains('decrement') && quantity > 0) {
            quantity--;
        }
        item.dataset.quantity = quantity;
        quantityElement.textContent = quantity;
        updateCartTotal();
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCartClick);
    });

    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('remove-from-cart')) {
            handleRemoveFromCartClick(event);
        }
        if (event.target && (event.target.classList.contains('increment') || event.target.classList.contains('decrement'))) {
            handleQuantityChange(event);
        }
    });

    document.getElementById('checkout').addEventListener('click', function() {
        alert(`Total amount: $${totalElement.textContent}`);
    });
});
