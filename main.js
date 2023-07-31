// botones del nav
const buttonImage = document.querySelector(".image");

const buttonText = document.querySelector(".text");

const buttonMode = document.querySelector(".dark-mode");

// para seleccionar aside imagen y texto
const asideEditImage = document.querySelector(".edit-image");

const asideEditText = document.querySelector(".edit-text");

// funcion para abrir aside
const openAsideEditText = () => {
  asideEditImage.classList.add("hidden");
  asideEditText.classList.remove("hidden");
};
buttonText.onclick = openAsideEditText;

const openAsideEditImage = () => {
  asideEditText.classList.add("hidden");

  asideEditImage.classList.remove("hidden");
};
buttonImage.onclick = openAsideEditImage;

//para cambiar modos
const header = document.querySelector(".dark-header");
const main = document.querySelector(".dark-main");
const asideImage = document.querySelector(".edit-image");
const asideText = document.querySelector(".edit-text");

const changeButtonMode = () => {
  const currentMode = buttonMode.textContent.trim();

  if (currentMode === "Modo oscuro") {
    buttonMode.innerHTML = `<i class="far fa-lightbulb" aria-label="Activa el modo claro u oscuro"></i>Modo claro`;
    header.classList.remove("light-header");
    main.classList.remove("light-main");
    asideImage.classList.remove("light-aside");
    asideText.classList.remove("light-aside");
    header.classList.add("dark-header");
    main.classList.add("dark-main");
    asideImage.classList.add("dark-aside");
    asideText.classList.add("dark-aside");
  } else {
    buttonMode.innerHTML = `<i class="far fa-lightbulb" aria-label="Activa el modo claro u oscuro"></i>Modo oscuro`;
    header.classList.remove("dark-header");
    main.classList.remove("dark-main");
    asideImage.classList.remove("dark-aside");
    asideText.classList.remove("dark-aside");
    header.classList.add("light-header");
    main.classList.add("light-main");
    asideImage.classList.add("light-aside");
    asideText.classList.add("light-aside");
  }
};

buttonMode.addEventListener("click", changeButtonMode);

//para aplicar al formulario imagen

// url 

const urlInput = document.getElementById("url-input");
const memeImg = document.getElementById("image-meme");

urlInput.addEventListener("input", () => changeBackground());

const changeBackground = () => {
  memeImg.style.backgroundImage = `url('${urlInput.value}')`;
};

// buton color y texto fondos 

let selectToBackground = "";
//input de colores
let inputColor = document.getElementById("color-background-image");
//span con nombre de color
let textoColorFondo = document.querySelector(".text-color");
//select con las opciones
const elementSelector = document.querySelector(".options-background-image");

let aplicarFiltro = () => {
  memeImg.style.mixBlendMode = selectToBackground;
  memeImg.style.backgroundColor = inputColor.value;
};

const colorPicker = (event) => {
  textoColorFondo.textContent = event.target.value;
  aplicarFiltro();
};

inputColor.addEventListener("input", colorPicker);



// opcion filtros y fondo
const selectionUsuario = (event) => {
  if (event.target.value === "aclarar") {
    selectToBackground = "lighten";
  } else if (event.target.value === "oscurecer") {
    selectToBackground = "darken";
  } else if (event.target.value === "diferencia") {
    selectToBackground = "difference";
  } else if (event.target.value === "luminosidad") {
    selectToBackground = "luminosity";
  } else if (event.target.value === "multiplicar") {
    selectToBackground = "multiply";
  } else {
    selectToBackground = "normal";
  }
  aplicarFiltro();
};

elementSelector.addEventListener("change", selectionUsuario);

// input de filtros
const brightInput = document.getElementById("range-bright");
const opacityInput = document.getElementById("range-opacity");
const contrastInput = document.getElementById("range-contrast");
const blurInput = document.getElementById("range-blur");
const grayscaleInput = document.getElementById("range-grayscale");
const sepiaInput = document.getElementById("range-sepia");
const hueInput = document.getElementById("range-hue");
const saturateInput = document.getElementById("range-saturation");
const invertInput = document.getElementById("range-invert");

const filtros = () => {
  memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}) sepia(${sepiaInput.value})  hue-rotate(${hueInput.value}deg) saturate(${saturateInput.value}%) invert(${invertInput.value})`;
};

brightInput.addEventListener("input", () => filtros());
opacityInput.addEventListener("input", () => filtros());
contrastInput.addEventListener("input", () => filtros());
blurInput.addEventListener("input", () => filtros());
grayscaleInput.addEventListener("input", () => filtros());
sepiaInput.addEventListener("input", () => filtros());
hueInput.addEventListener("input", () => filtros());
saturateInput.addEventListener("input", () => filtros());
invertInput.addEventListener("input", () => filtros());

// boton para restablecer filtros

const botonFilters = document.querySelector(".button-default");

botonFilters.onclick = (event) => {
  event.preventDefault();

  brightInput.value = 1;
  opacityInput.value = 1;
  contrastInput.value = 100;
  blurInput.value = 0;
  grayscaleInput.value = 0;
  sepiaInput.value = 0;
  hueInput.value = 0;
  saturateInput.value = 100;
  invertInput.value = 0;

  memeImg.style.filter = "none";
};

// funcion para descarar meme

const downloadButton = document.getElementById("download-meme");
const meme = document.getElementById("meme-container");

const downloadMeme = () => {
  domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "MiPrimerMeme.png");
  });
};

downloadButton.addEventListener("click", () => downloadMeme());

// Formulario texto 
const topTextUser = document.getElementById("text-top");
const bottomTextUser = document.getElementById("bottom-text");
const topText = document.querySelector(".container-text-top");
const bottomText = document.querySelector(".container-text-bottom");

topTextUser.oninput = () => {
  topText.textContent = topTextUser.value;
};
bottomTextUser.oninput = () => {
  bottomText.textContent = bottomTextUser.value;
};

// eliminar texto superior/inferior
const noTopText = document.getElementById("no-top-text");
const noBottomText = document.getElementById("no-bottom-text");

noTopText.oninput = () => {
  if (noTopText.checked) {
    topText.style.display = "none";
  } else {
    topText.style.display = "flex";
  }
};
noBottomText.oninput = () => {
  if (noBottomText.checked) {
    bottomText.style.display = "none";
  } else {
    bottomText.style.display = "flex";
  }
};

// cambiar fuentes

const selectFonts = document.getElementById("font-types");

const changeFonts = (event) => {
  if (event.target.value === "Arial") {
    topText.style.fontFamily = "Arial";
    bottomText.style.fontFamily = "Arial";
  } else if (event.target.value === "Arial Black") {
    topText.style.fontFamily = "Arial Black";
    bottomText.style.fontFamily = "Arial Black";
  } else if (event.target.value === "American Typewriter") {
    topText.style.fontFamily = "American Typewriter";
    bottomText.style.fontFamily = "'American Typewriter";
  } else if (event.target.value === "Andale Mono") {
    topText.style.fontFamily = "Andale Mono";
    bottomText.style.fontFamily = "Andale Mono";
  } else if (event.target.value === "Comic Sans MS") {
    topText.style.fontFamily = "'Comic Sans MS";
    bottomText.style.fontFamily = "Comic Sans MS";
  } else if (event.target.value === "Helvetica") {
    topText.style.fontFamily = "Helvetica";
    bottomText.style.fontFamily = "Helvetica";
  } else if (event.target.value === "Impact") {
    topText.style.fontFamily = "Impact";
    bottomText.style.fontFamily = "Impact";
  } else if (event.target.value === "Verdana") {
    topText.style.fontFamily = "Verdana";
    bottomText.style.fontFamily = "Verdana";
  } else if (event.target.value === "Times New Roman") {
    topText.style.fontFamily = "'Times New Roman', Times, serif;";
    bottomText.style.fontFamily = "Times New Roman";
  }
};
selectFonts.addEventListener("change", changeFonts);

// tamaño de la letra
const letterSize = document.getElementById("letter-size");

letterSize.oninput = () => {
  topText.style.fontSize = letterSize.value + "px";
  bottomText.style.fontSize = letterSize.value + "px";
};

// alineacion del parrafo

const leftAlignment = document.getElementById("left-button");
const centerAlignment = document.getElementById("center-button");
const rightAlignment = document.getElementById("right-button");

leftAlignment.onclick = (event) => {
  event.preventDefault();
  topText.style.justifyContent = "flex-start";
  bottomText.style.justifyContent = "flex-start";
};
centerAlignment.onclick = (event) => {
  event.preventDefault();
  topText.style.justifyContent = "center";
  bottomText.style.justifyContent = "center";
};
rightAlignment.onclick = (event) => {
  event.preventDefault();
  topText.style.justifyContent = "flex-end";
  bottomText.style.justifyContent = "flex-end";
};

//COLOR/FONDO

let inputColorBackground = document.getElementById("input-color-background");
let inputColorText = document.getElementById("input-color-text");

let spanColorText = document.querySelector(".span-color-text");
let spanBackgroundText = document.querySelector(".span-background-text");

// aplicar codigo de color
const nameCodeOfColor = (event) => {
  spanColorText.textContent = event.target.value;
};
inputColorText.addEventListener("input", nameCodeOfColor);

const nameCodeOfColorBackground = (event) => {
  spanBackgroundText.textContent = event.target.value;
};
inputColorBackground.addEventListener("input", nameCodeOfColorBackground);

//APLICAR EL COLOR DE LA LETRA
const changeColorText = (event) => {
  topText.style.color = inputColorText.value;
  bottomText.style.color = inputColorText.value;
};

inputColorText.addEventListener("input", changeColorText);

//APLICAR EL COLOR DE FONDO
const changeColorBackgroundText = (event) => {
  topText.style.backgroundColor = inputColorBackground.value;
  bottomText.style.backgroundColor = inputColorBackground.value;
};

inputColorBackground.addEventListener("input", changeColorBackgroundText);

//FONDO-TRANSPARENTE
let checkboxTransparent = document.getElementById("transparent-background");

checkboxTransparent.oninput = () => {
  if (checkboxTransparent.checked) {
    topText.style.position = "absolute";
    bottomText.style.position = "absolute";
    topText.style.top = "0";
    bottomText.style.bottom = "0";
    topText.style.backgroundColor= "transparent";
    bottomText.style.backgroundColor= "transparent";
  } else {
    topText.style.position = "static";
    bottomText.style.position = "static";
    topText.style.backgroundColor = inputColorBackground.value;
    bottomText.style.backgroundColor = inputColorBackground.value;
  }
};

//CONTORNO

let buttonNone = document.getElementById("none");
let buttonClear = document.getElementById("clear");
let buttonDark = document.getElementById("dark");

buttonNone.onclick = (event) => {
  event.preventDefault();
  topText.style.textShadow = "none";
  bottomText.style.textShadow = "none";
};

buttonClear.onclick = (event) => {
  event.preventDefault();
  topText.style.textShadow = "2px 2px 2px white";
  bottomText.style.textShadow = "2px 2px 2px white";
};

buttonDark.onclick = (event) => {
  event.preventDefault();
  topText.style.textShadow = "2px 2px 2px black";
  bottomText.style.textShadow = "2px 2px 2px black";
};

//ESPACIO

let spacingText = document.getElementById("spacing");
spacingText.oninput = () => {
  topText.style.padding = spacingText.value + "px";
  bottomText.style.padding = spacingText.value + "px";
};
//INTERLINEADO

let leadingText = document.getElementById("leading");
leadingText.oninput = () => {
  topText.style.lineHeight = leadingText.value;
  bottomText.style.lineHeight = leadingText.value;
};



