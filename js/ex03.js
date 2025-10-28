function calcular() {
    var p, a, r;
    p = document.getElementById("mpeso").value;
    a = document.getElementById("maltura").value;

    if (p == "" || a == "" || a == 0 || p == 0) {
        alert("Os campos devem ser preenchidos.");
    } else {
        r = parseFloat(p) / (parseFloat(a) * parseFloat(a));
        document.getElementById("resultado").innerHTML = `O seu IMC é ${r.toFixed(2)}`;

        if (r < 18.5) {
            document.getElementById("resultado").innerHTML += "<br>Você está abaixo do peso";
        } else if (18.5<r<24.9) {
            document.getElementById("resultado").innerHTML += "<br>Você está com peso normal";
        } else if (25<r < 29.9) {
            document.getElementById("resultado").innerHTML += "<br>Você está com sobrepeso";
        } else {
            document.getElementById("resultado").innerHTML += "<br>Você está com obesidade";
        }
    }
}