var numeroSecreto = parseInt(Math.random() * 11);
var cont = 0;
//criar variavel para o contador abaixo, deve ser fora do metodo

function Chutar() {
  cont = cont + 1;

  if (cont > 3) {
    //contador para mostrar apenas 3 tentativas de jogada.
    alert("You can try just 3 times ! The secret number is: " + numeroSecreto);

    //alert(contador);
  } else {
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto) {
      document.getElementById("resultado").innerText =
        "\u{1F603} You nailed it! The secret number is: " + numeroSecreto;
    } else if (chute > 10 || chute < 0) {
      document.getElementById("resultado").innerText =
        "\u{1F914} Number should be from 0 to 10!";
    } else {
      document.getElementById("resultado").innerText =
        "\u{1F614} Wrong number !";
    }
  }
}
