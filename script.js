function hitungBerat() {
  let beratBumi = document.getElementById("weight").value;
  let gravitasi = document.getElementById("planet").value;

  if (beratBumi === "" || beratBumi <= 0) {
    document.getElementById("result").innerText = "Masukkan berat badan yang valid!";
    return;
  }

  let beratPlanet = beratBumi * gravitasi;
  let planet = document.getElementById("planet").options[
    document.getElementById("planet").selectedIndex
  ].text;

  document.getElementById("result").innerText =
    `Beratmu di ${planet} adalah ${beratPlanet.toFixed(2)} kg`;
}
