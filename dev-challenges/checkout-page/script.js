const checkoutCartContainer = document.getElementById("checkout-cart");
const quantityInput = document.querySelectorAll(".quantity");
const cartTotalText = document.getElementById("cart-total");
const form = document.querySelector("#checkoutF");
const formInputs = document.querySelectorAll("#checkoutF input");

function updateTotalAmount() {
  let cartTotal = 0;

  quantityInput.forEach((quantity) => {
    let priceArr =
      quantity.parentElement.parentElement.children[1].textContent.split("$");

    if (quantity.value <= 0) {
      quantity.value = 0;
      cartTotal = cartTotal + 0 * Number(priceArr[1]);
      return;
    } else {
      cartTotal = cartTotal + Number(quantity.value) * Number(priceArr[1]);
    }
  });

  cartTotal += 19;
  cartTotalText.textContent = `$${cartTotal.toFixed(2)}`;
}

function validateEmail(mail) {
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      mail
    )
  ) {
    console.log("valid email");
    return true;
  } else {
    console.log("false email");
    return false;
  }
}
checkoutCartContainer.addEventListener("click", (e) => {
  if (e.target.classList == "plus") {
    e.target.previousElementSibling.value++;
    updateTotalAmount();
  }

  if (e.target.classList == "minus") {
    e.target.nextElementSibling.value--;
    updateTotalAmount();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputErrors = 0;

  formInputs.forEach((input) => {
    let hint = input.parentElement.parentElement.lastElementChild;

    if (input == document.getElementById("save")) {
      return;
    }

    console.log(input.value);
    if (input.value == "") {
      hint.classList.remove("hidden");
      inputErrors++;
    } else {
      hint.classList.add("hidden");
    }

    if (input == document.getElementById("email")) {
      if (!validateEmail(input.value)) {
        hint.classList.remove("hidden");
        inputErrors++;
      } else {
        hint.classList.add("hidden");
      }
    }
  });

  if (inputErrors == 0) alert("Thank you for your purchase!");
});
