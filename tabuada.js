function calcular(){
    var num = document.getElementById('num')
    var tab = document.getElementById('result')

    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""
        while (c<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}