const precosDiv = document.getElementById('precos2');
const fotos = [
  'img/foto1.jpeg',
  'img/foto2.jpeg',
  'img/foto3.jpeg',
  'img/foto4.jpeg',
  // Adicione mais fotos aqui
];
let indice = 0;

function mudarFoto() {
  precosDiv.style.backgroundImage = `url(${fotos[indice]})`;
  indice = (indice + 1) % fotos.length;
}

setInterval(mudarFoto, 2000); // Muda a foto a cada 3 segundos

// Define a primeira foto
precosDiv.style.backgroundImage = `url(${fotos[0]})`;
