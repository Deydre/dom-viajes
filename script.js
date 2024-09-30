
// Pegar img al final del primer section
let containerImg1 = document.querySelector("section:first-child")

containerImg1.innerHTML += `<img src="banner/1.jpg" alt="Puesta de sol sobre el mar">`;

// Pegar imgs en el primer div de cada article
let containerImg2 = document.querySelector("section article div:first-child");
let containerImg3 = document.querySelector("section article:nth-child(2) div");
let containerImg4 = document.querySelector("section article:last-child div");

containerImg2.innerHTML += `<img src="viajes/viajes-1.jpg" alt="Playa">`;
containerImg3.innerHTML += `<img src="viajes/viajes-2.jpg" alt="Paraíso">`;
containerImg4.innerHTML += `<img src="viajes/viajes-3.jpg" alt="Señales">`;

// Crear selector al final del último section

let containerSelector = document.querySelector("main section:last-child");

containerSelector.innerHTML += 
`
<select name="select">
  <option value="LaPalma" selected>La Palma</option>
  <option value="Tenerife">Tenerife</option>
  <option value="Lanzarote">Lanzarote</option>
  <option value="ElHierro">El Hierro</option>
  <option value="Fuerteventura">Fuerteventura</option>
  <option value="GranCanaria">Gran Canaria</option>
  <option value="LaGomera">La Gomera</option>
  <option value="LaGraciosa">La Graciosa</option>
</select>
`

