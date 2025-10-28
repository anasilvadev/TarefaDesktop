function converter() {
    var v1, d, r
    v1 = document.getElementById("dinheiroreais").value
    d = document.getElementById("cotacao").value

    if (v1 == "" || d == "" || d == 0 || v1 == 0) {
        alert("Os campos devem ser preenchidos ou diferentes de zero")
    }

    else {
        r = parseFloat(v1) / parseFloat(d)
        document.getElementById("resultado").innerHTML = `O valor em dólar é ${r}`
    }
}