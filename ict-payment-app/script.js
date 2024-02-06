const contactsCon = document.getElementById("contacts");
const addBtns = document.getElementById("contacts_add");
const send_screenEl = document.getElementById("send_money");
const form = document.getElementById("transaction_form");
const submitBtn = document.getElementById("send_moneyBtn");
const navSendBtn = document.getElementById("menu_item_send");
const balance = document.getElementById("balance");
const amount = document.getElementById("amount");

const prevPage = document.querySelector("#btn_prev");
const nextPage = document.querySelector("#btn_next");
const slides = [...document.querySelectorAll("#popup p")];
const pagination = document.getElementById("pagination");
const pageArray = [...document.getElementsByClassName("page")];
const popupCloseBtn = document.getElementById("popup_close");
const sendCloseBtn = document.getElementById("close_btn");

let pageIndex = 0;

//////////// Functions
const toggleBlur = () => {
  const blurEl = document.getElementById("blur");
  blurEl.classList.toggle("active");

  const popupEl = document.getElementById("popup");
  popupEl.classList.toggle("active");
};

const toggleSendScreen = () => {
  if (send_screenEl.classList.contains("active")) {
    send_screenEl.classList.remove("active");
    addBtns.style.display = "grid";
    document.getElementById("contacts_frequent").style.display = "block";
    document.getElementById("amount_error").innerHTML = " ";
    amount.value = " ";
  } else {
    send_screenEl.classList.add("active");
    addBtns.style.display = "none";
    document.getElementById("contacts_frequent").style.display = "none";
    document.getElementById("amount_error").innerHTML = " ";
    amount.value = " ";
  }
};

const updateSendScreen = (img, name) => {
  send_screenEl.childNodes[5].childNodes[1].outerHTML = img;
  send_screenEl.childNodes[5].childNodes[3].innerHTML = name;
};

popupCloseBtn.addEventListener("click", (e) => {
  e.preventDefault;
  toggleBlur();
});

sendCloseBtn.addEventListener("click", (e) => {
  e.preventDefault;
  toggleSendScreen();
});

navSendBtn.addEventListener("click", (e) => {
  e.preventDefault;
  toggleSendScreen();
});

prevPage.addEventListener("click", (e) => {
  let pageIndex = 0;

  pageArray.forEach(function (token, index) {
    if (token.classList.contains("active")) {
      pageIndex = index;
      token.classList.remove("active");
      slides[pageIndex].classList.remove("active");
    }
  });

  if (pageIndex == 0) {
    pageIndex = 2;
    pageArray[pageIndex].classList.add("active");
    slides[pageIndex].classList.add("active");
  } else {
    pageIndex--;
    pageArray[pageIndex].classList.add("active");
    slides[pageIndex].classList.add("active");
  }
});

nextPage.addEventListener("click", (e) => {
  let pageIndex = 0;

  pageArray.forEach(function (token, index) {
    if (token.classList.contains("active")) {
      pageIndex = index;
      token.classList.remove("active");
      slides[pageIndex].classList.remove("active");
    }
  });

  if (pageIndex == 2) {
    pageIndex = 0;
    pageArray[pageIndex].classList.add("active");
    slides[pageIndex].classList.add("active");
  } else {
    pageIndex++;
    pageArray[pageIndex].classList.add("active");
    slides[pageIndex].classList.add("active");
  }
});

pagination.addEventListener("click", (e) => {
  if (e.target.classList.contains("page")) {
    pageArray.forEach(function (token, index) {
      if (token.classList.contains("active")) {
        token.classList.remove("active");
        slides[index].classList.remove("active");
      }
    });

    e.target.classList.add("active");

    pageArray.forEach(function (token, index) {
      if (token.classList.contains("active")) {
        slides[index].classList.add("active");
      }
    });
  }
});

// //////////////
// Send Screen

contactsCon.addEventListener("click", (e) => {
  if (e.target.classList.contains("contact")) {
    let img = e.target.childNodes[1].outerHTML;
    let name = e.target.childNodes[3].innerHTML;

    toggleSendScreen();
    updateSendScreen(img, name);
  } else if (
    e.target.classList.contains("add_btn") ||
    e.target.localName == "img"
  ) {
    let img = e.target.parentNode.childNodes[1].outerHTML;
    let name = e.target.parentNode.childNodes[3].innerHTML;

    toggleSendScreen();
    updateSendScreen(img, name);
  } else {
    return;
  }
});

// //////////////
// Form Validation

function updateBalance(number) {
  balance.innerText = "$" + number;
}

form.addEventListener("submit", (e) => {
  if (
    !form.checkValidity() ||
    amount.value > Number(balance.innerHTML.substring(1))
  ) {
    e.preventDefault();
    addAriaInvalid();
    formValidation();
  } else {
    e.preventDefault();
    let newBal = Number(balance.innerHTML.substring(1)) - amount.value;
    toggleSendScreen();
    updateBalance(newBal);

    return;
  }
});

function addAriaInvalid() {
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.setAttribute("aria-invalid", false);
    input.addEventListener("invalid", () => {
      input.setAttribute("aria-invalid", true);
    });
  });
}

function formValidation() {
  if (amount.value > Number(balance.innerHTML.substring(1))) {
    document.getElementById(
      "amount_error"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                            fill="currentColor">
                                            <path
                                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z">
                                            </path>
                                        </svg>
                                        <span>Not enough funds available.</span>`;
  } else if (!amount.checkValidity() || amount.value < 1) {
    document.getElementById(
      "amount_error"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                      fill="currentColor">
                                      <path
                                          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z">
                                      </path>
                                  </svg>
                                  <span>Must enter a minimum of $1.</span>`;
  } else {
    document.getElementById("amount_error").innerHTML = " ";
  }
}
