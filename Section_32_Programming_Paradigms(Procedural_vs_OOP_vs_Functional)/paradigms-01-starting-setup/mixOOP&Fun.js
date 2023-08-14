class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.userName = uName;
    this.Password = uPassword;
    if (
      !Validator.validate(this.userName, Validator.REQUIRED) ||
      !Validator.validate(this.Password, Validator.MIN_LENGTH, 5)
    ) {
      throw new Error(
        "Invalid input - username or password is wrong (password should be at least six characters)."
      );
    }
  }

  greet() {
    console.log("Hi, I am " + this.userName);
  }
}

class ConnectForm {
  static connectForm(formId, formSubmitHandler) {
    this.form = document.getElementById(formId);
    this.form.addEventListener("submit", formSubmitHandler);
  }
}

class UserInputForm {
  constructor() {
    // this.form = document.getElementById("user-input");

    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");

    // this.form.addEventListener("submit", this.signUpHandler.bind(this));
    ConnectForm.connectForm("user-input", this.signUpHandler.bind(this));
  }

  signUpHandler(event) {
    event.preventDefault();
    const enteredUserName = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    try {
      const newUser = new User(enteredUserName, enteredPassword);
      console.log(newUser);
      newUser.greet();
    } catch (err) {
      alert(err.message);
    }
  }
}

new UserInputForm();
