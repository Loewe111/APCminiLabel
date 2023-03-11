
buttons = document.querySelectorAll(".button"); 
inputs = document.querySelectorAll("input[type='text']");
states = ["red", "green", "yellow", "off"];

buttons.forEach((button) => {
  button.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    index = states.indexOf(button.getAttribute("data-color"));
    if (index == states.length - 1) {
      index = 0;
    } else {
      index++;
    }
    button.setAttribute("data-color", states[index]);
    save();
    return false;
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    save();
  });
});

function save() {
  let data = {
    text: [],
    color: []
  };
  inputs.forEach((input) => {
    data.text.push(input.value);
  });
  buttons.forEach((button) => {
    data.color.push(button.getAttribute("data-color"));
  });
  localStorage.setItem("data", JSON.stringify(data));
}

function load() {
  let data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    inputs.forEach((input, i) => {
      input.value = data.text[i];
    });
    buttons.forEach((button, i) => {
      button.setAttribute("data-color", data.color[i]);
    });
  }
}

load();