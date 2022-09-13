let maior = 0
let menor = 0
let meio = 0
let idade

while(idade != 99){
    idade = Number(prompt("Digite sua idade: \nOu digite 99 para finalizar"))
    if(idade < 22){
        menor++
    }
    if(idade > 49 && idade < 99){
        maior++ }

        if(idade > 22 && idade < 49){
            meio++}}
alert(`O total de menores é ${menor}, meio são ${meio}, maiores ${maior} `)
