const buttons = document.querySelectorAll("button");

// button.onclick = () => {
//     alert("Ahmeddd")
// };

const btnClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const anotherBtnClickHandler = () => {
  console.log("Ahmed");
};

// button.onclick = btnClick, btnClickkk;
// button.onclick = btnClickkk;

const boundFun = btnClickHandler.bind(this);

// button.addEventListener("click", btnClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", btnClickHandler);
// }, 2000);

buttons.forEach(btn => {
  btn.addEventListener("click", btnClickHandler)
})
