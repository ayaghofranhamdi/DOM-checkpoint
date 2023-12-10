document.addEventListener("DOMContentLoaded", function () {
  alert("Hello, Shopper!");

  const minusButtons = document.querySelectorAll(".fa-square-minus");
  const plusButtons = document.querySelectorAll(".fa-square-plus");
  const likeButtons = document.querySelectorAll(".fa-thumbs-up");
  const trashButtons = document.querySelectorAll(".fa-trash");

  minusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      updateQuantity(button, -1);
    });
  });

  plusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      updateQuantity(button, 1);
    });
  });

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      toggleLike(button);
    });
  });

  trashButtons.forEach((button) => {
    button.addEventListener("click", function () {
      removeItem(button);
    });
  });

  function updateQuantity(button, change) {
    const parent = button.closest(".single-item");
    const quantityElement = parent.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent) + change;

    quantity = Math.max(0, quantity);
    quantityElement.textContent = quantity;

    updateTotalPrice();
  }

  function toggleLike(button) {
    const parent = button.closest(".single-item");
    parent.classList.toggle("liked");
  }

  function removeItem(button) {
    const parent = button.closest(".single-item");
    parent.remove();
    updateTotalPrice();
  }

  function updateTotalPrice() {
    const itemElements = document.querySelectorAll(".single-item");
    let totalPrice = 0;

    itemElements.forEach((item) => {
      const priceElement = item.querySelector(".price");
      const quantityElement = item.querySelector(".quantity");
      const price = parseFloat(priceElement.textContent);
      const quantity = parseInt(quantityElement.textContent);

      totalPrice += price * quantity;
    });

    const totalElement = document.getElementById("total");
    totalElement.textContent = totalPrice.toFixed(2) + " €";
  }
});
