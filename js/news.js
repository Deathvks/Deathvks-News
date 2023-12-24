function initialize() {
  const DARK_MODE = document.getElementById("dark-mode");
  DARK_MODE.addEventListener("click", bodyDark);

  const LIGHT_MODE = document.getElementById("light-mode");
  LIGHT_MODE.addEventListener("click", bodyLight);
}

function bodyDark() {
  const DARK_MODE_BTN = document.getElementById("dark-mode");
  const LIGHT_MODE_BTN = document.getElementById("light-mode");

  document.body.style.backgroundColor = "black";
  DARK_MODE_BTN.classList.add("fade-out");
  LIGHT_MODE_BTN.classList.add("fade-in");

  DARK_MODE_BTN.addEventListener(
    "animationend",
    () => {
      DARK_MODE_BTN.style.display = "none";
      LIGHT_MODE_BTN.style.display = "block";
      DARK_MODE_BTN.classList.remove("fade-out");
    },
    { once: true }
  );

  document.getElementById("len").style.color = "grey";
  document.getElementById("header-menu-icon").style.color = "grey";
  document.getElementById("h1-pr").style.color = "white";
  document.getElementById("side-menu").style.backgroundColor = "black";
  document.getElementById("header-all").style.backgroundColor = "black";
  document.getElementById("one").style.color = "grey";
  document.body.style.backgroundColor = "rgb(23, 23, 24)";
  var elements = document.getElementsByClassName("after-header");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "black";
  }

  var titleElements = document.getElementsByClassName("title");
  for (var i = 0; i < titleElements.length; i++) {
    titleElements[i].style.color = "white";
  }

  var resumeElements = document.getElementsByClassName("resume");
  for (var j = 0; j < resumeElements.length; j++) {
    resumeElements[j].style.color = "grey";
  }
}

function bodyLight() {
  const DARK_MODE_BTN = document.getElementById("dark-mode");
  const LIGHT_MODE_BTN = document.getElementById("light-mode");

  document.body.style.backgroundColor = "white";
  LIGHT_MODE_BTN.classList.add("fade-out");
  DARK_MODE_BTN.classList.add("fade-in");

  LIGHT_MODE_BTN.addEventListener(
    "animationend",
    () => {
      LIGHT_MODE_BTN.style.display = "none";
      DARK_MODE_BTN.style.display = "block";
      LIGHT_MODE_BTN.classList.remove("fade-out");
    },
    { once: true }
  );

  document.getElementById("len").style.color = "grey";
  document.getElementById("header-menu-icon").style.color = "grey";
  document.getElementById("h1-pr").style.color = "rgb(57, 107, 201)";
  document.getElementById("side-menu").style.backgroundColor =
    "rgb(230, 233, 235)";
  document.getElementById("header-all").style.backgroundColor = "white";
  document.getElementById("one").style.color = "grey";
  document.body.style.backgroundColor = "rgb(230, 233, 235)";
  var elements = document.getElementsByClassName("after-header");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "white";
  }
  var titleElements = document.getElementsByClassName("title");
  for (var i = 0; i < titleElements.length; i++) {
    titleElements[i].style.color = "black";
  }

  var resumeElements = document.getElementsByClassName("resume");
  for (var j = 0; j < resumeElements.length; j++) {
    resumeElements[j].style.color = "black";
  }
}

initialize();
