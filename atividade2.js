 var par = 0
 var impar = 0

    for (i = 1; i <=10; i++) {
    var num = Number(prompt("Digite um Número: "))
    if (num %2==0) {
        par++   }
    else impar++
    }

   alert(`${par} dos números são Pares`)
    alert(`${impar} dos números são Ímpares`)

