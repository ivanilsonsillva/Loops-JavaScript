var media = 0
var num
var i=0
var m=0
do{
    num = Number(prompt("Digite o numero"))
    if(num % 3 == 0  && num!=0){ i=num+i; m++}
    media=i/m
    
}
while(num != 0)
alert(`Media atual ${media}`)