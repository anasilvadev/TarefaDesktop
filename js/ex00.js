
function somar() {
    var v1, v2, r1
    v1 = document.getElementById("primeirovalor").value
    v2 = document.getElementById("segundovalor").value
    if (v1 == "" || v2 == "") {
        alert("Os campos devem ser preenchidos")
    }
    else {
        r1 = parseFloat(v1) + parseFloat(v2)
        document.getElementById("resultado1").innerHTML = `O resultado da soma é ${r1}`

    }
}

function multiplicar() {
    var v1, v2, r3
    v1 = document.getElementById("primeirovalor").value
    v2 = document.getElementById("segundovalor").value
    if (v1 == "" || v2 == "") {
        alert("Os campos devem ser preenchidos")
    }
    else {
        r3 = parseFloat(v1) * parseFloat(v2)
        document.getElementById("resultado2").innerHTML = `O resultado da multiplicação é ${r3}`
    }
}

function subtrair() {

  
   var  v1, v2, r2
    v1 = document.getElementById("primeirovalor").value
    v2 = document.getElementById("segundovalor").value

    if (v1 == "" || v2 == "") {
        alert("Os campos devem ser preenchidos")
    }
    else {
        r2 = parseFloat(v1) - parseFloat(v2)
        document.getElementById("resultado3").innerHTML = `O resultado da subtração é ${r2}`
    }
}


function dividir() {
    var v1, v2, r4
    v1 = document.getElementById("primeirovalor").value
    v2 = document.getElementById("segundovalor").value
    if (v1 == "" || v2 == "" || v1 == 0 || v2 == 0) {
        alert("Os campos devem ser preenchidos ou diferentes de zero ")
    }
    else{
        r4 = parseFloat(v1) / parseFloat(v2)
        document.getElementById("resultado4").innerHTML = `O resultado da divisão é ${r4}`
    }
}