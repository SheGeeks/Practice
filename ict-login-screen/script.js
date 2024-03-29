const loginBtn = document.getElementById("login");
const loginAltBtn = document.getElementById("login_alt");
const form = document.getElementById("login_form");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    addAriaInvalid();
    formValidation();
  } else {
    return true;
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
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email.checkValidity()) {
    document.getElementById(
      "email-error"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                fill="currentColor">
                                <path
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z">
                                </path>
                            </svg>
                            <span>
                                Please enter your account email address.
                            </span>`;
  } else {
    document.getElementById("email-error").innerHTML = " ";
  }

  if (!password.checkValidity()) {
    if (password.value == "") {
      document.getElementById(
        "password-error"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                      fill="currentColor">
                                      <path
                                          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z">
                                      </path>
                                  </svg>
                                  <span>Please enter your account password. </span>`;
    } else {
      document.getElementById(
        "password-error"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                      fill="currentColor">
                                      <path
                                          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z">
                                      </path>
                                  </svg>
                                  <span>Passwords must be 4 characters or more. </span>`;
    }
  } else {
    document.getElementById("password-error").innerHTML = " ";
  }
}
