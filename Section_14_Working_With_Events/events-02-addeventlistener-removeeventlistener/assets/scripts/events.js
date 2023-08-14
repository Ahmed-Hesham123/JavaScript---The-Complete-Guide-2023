const button = document.querySelector("button");

// button.onclick = () => {
//     alert("Ahmeddd")
// };

const btnClickHandler = () => {
  alert("Heshammmm");
};

const anotherBtnClickHandler = () => {
  console.log("Ahmed");
};

// button.onclick = btnClick, btnClickkk;
// button.onclick = btnClickkk;

const boundFun = btnClickHandler.bind(this);

button.addEventListener("click", boundFun);

setTimeout(() => {
  button.removeEventListener("click", boundFun);
}, 2000);
