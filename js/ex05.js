function gerarPA() {
    var primeiro = parseFloat(document.getElementById("primeiro").value);
    var r = parseFloat(document.getElementById("razao").value);
    var q = parseInt(document.getElementById("quantidade").value); 
    var pa = [];

    for (var i = 0; i < q; i++) {
        pa.push(primeiro + i * r);
    }


    document.getElementById("resultado").innerHTML = "Série da PA: " + pa.join(", ");
}