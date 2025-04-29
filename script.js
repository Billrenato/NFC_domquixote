const precosDiv = document.getElementById('precos2');
const fotos = [
  'img/foto1.jpeg',
  'img/foto2.jpeg',
  'img/foto3.jpeg',
  'img/foto4.jpeg',
  // Adicione mais fotos aqui
];

if (precosDiv) {
  let indice = 0;

  // Carregar imagens
  const imagens = [];
  fotos.forEach((foto) => {
    const img = new Image();
    img.src = foto;
    imagens.push(img);
  });

  function mudarFoto() {
    precosDiv.style.backgroundImage = `url(${fotos[indice]})`;
    indice = (indice + 1) % fotos.length;
  }

  // Define a primeira foto
  precosDiv.style.backgroundImage = `url(${fotos[0]})`;

  // Muda a foto a cada 2 segundos
  setInterval(mudarFoto, 2000);
} else {
  console.error("Elemento não encontrado");
}