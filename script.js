// Banner COntainer
let bannerContainer = document.querySelector("#bannerContainer")

// Crear img y su URL
const imgBanner = document.createElement('img');
imgBanner.src = 'banner/1.jpg';

// Agregar la imagen al contenedor del banner
bannerContainer.appendChild(imgBanner);

let imgsArray = ['/viajes/viajes-1.jpg','/viajes/viajes-2.jpg', '/viajes/viajes-3.jpg' ];

// Crear y poner las imgs
imgsArray.forEach((imagen, i) => {
  // Crear 1 img
  const img = document.createElement('img');
  // Poner la URL
  img.src = imagen;
  // Meter en su Container
  document.querySelector(`#img${i+1}Container`).appendChild(img);
});

// Crear un array con todas las opciones
let optionsArray = ["La Palma", "Tenerife", "Lanzarote", "El Hierro", "Fuerteventura", "Gran Canaria", "La Gomera", "La Graciosa"];

// Crear el elemento "select"
let selector = document.createElement("select"); // Crea el elemento <select>
selector.id = "destinationSelect"; // Asigna un ID si lo necesitas

// Agregar las opciones al select
optionsArray.forEach((option) => {
  // Crear option
  const currentOption = document.createElement('option');
  // Poner el value (eliminando espacios)
  currentOption.value = option.replace(/\s+/g, ''); // Reemplaza espacios en la variable option
  // Poner el texto
  currentOption.textContent = option; // Aquí estableces el texto de la opción
  // Meter en el select
  selector.appendChild(currentOption); // Agrega currentOption al select
});

// Añadir el select al contenedor
document.querySelector("#selectorContainer").appendChild(selector); // Agregar el <select> al contenedor


// `
// <select name="select">
//   <option value="LaPalma" selected>La Palma</option>
//   <option value="Tenerife">Tenerife</option>
//   <option value="Lanzarote">Lanzarote</option>
//   <option value="ElHierro">El Hierro</option>
//   <option value="Fuerteventura">Fuerteventura</option>
//   <option value="GranCanaria">Gran Canaria</option>
//   <option value="LaGomera">La Gomera</option>
//   <option value="LaGraciosa">La Graciosa</option>
// </select>
// `

