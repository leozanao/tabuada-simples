function fatorial(n){
    var fato = 1
    for(var c = n; c>1;c--){
        fato *=c
    }
    return fato
}
console.log(fatorial(5))