function addImagem() {
  const div = document.getElementById("imagem");

  const image = document.createElement("img");
  image.src = "imagem1.jpg";
  image.width = 250;
  image.height = 300;

  div.appendChild(image);
}
