function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("ano");
  var resultado = document.querySelector("div#resultado");
  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("sexo");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "imagens/bebe.m.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "imagens/jovem.m.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "imagens/adulto.jpg");
      } else {
        //idoso
        img.setAttribute("src", "imagens/idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "imagens/bebe.f.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "imagens/jovem.f.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "imagens/adulta.jpg");
      } else {
        //idoso
        img.setAttribute("src", "imagens/idosa.jpg");
      }
    }
    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}
