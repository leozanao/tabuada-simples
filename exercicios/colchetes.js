var num = [3,8,6,5,4,9]
//simplificado for in
for (var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
/*tradicional for
for(var pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
var encont = num.indexOf(2)
if(encont == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor 5 está na posição ${encont}`)
}