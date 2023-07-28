let allButtons = document.querySelectorAll("button");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItem();
    }
  });
});
function checkInput() {
  if (theInput.value === "") {
    results.innerHTML = "Input Can't Be Empty";
  }
}
function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
      theInput.value = "";
    } else {
      results.innerHTML = `No Local Storage Item Called <span>${theInput.value}</span>`;
      theInput.value = "";
    }
  } else {
    checkInput();
  }
}
function addItem() {
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, "Test");
    results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
    theInput.value = "";
  } else {
    checkInput();
  }
}
function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> Deleted`;
      theInput.value = "";
    } else {
      results.innerHTML = `No Local Storage Item Called <span>${theInput.value}</span>`;
      theInput.value = "";
    }
  } else {
    checkInput();
  }
}
function showItem() {
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span>`;
    }
  } else {
    results.innerHTML = `Local Storage Is Empty`;
  }
}
