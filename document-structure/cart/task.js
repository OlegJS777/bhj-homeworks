let prodQuantityControl = Array.from(document.querySelectorAll(".product__quantity-control"));
let productAdd = Array.from(document.querySelectorAll(".product__add"));
let cartProducts = document.querySelector(".cart__products");

prodQuantityControl.forEach(element => {
  element.onclick = function() {
    if(element.className.includes("product__quantity-control_dec")) {
      if(Number(element.nextElementSibling.textContent) > 1) {
        element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent) - 1;
      }
    } else element.previousElementSibling.textContent = Number(element.previousElementSibling.textContent) + 1;
  }
})

productAdd.forEach(element => {
  element.onclick = function() {
    let cartProduct = Array.from(document.querySelectorAll(".cart__product"));
    let value = element.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
    let result = cartProduct.find(item => item.dataset.id === element.closest(".product").dataset.id);

    if(result === undefined) {
      cartProducts.insertAdjacentHTML('beforeEnd',`<div class="cart__product" data-id="${element.closest(".product").dataset.id}">
                                                  <img class="cart__product-image" src="${element.closest(".product").querySelector('img').getAttribute('src')}">
                                                  <div class="cart__product-count">${value}</div>`)
    } else {
      result.lastChild.textContent = Number(result.lastChild.textContent) + Number(value);
    }
  }
})