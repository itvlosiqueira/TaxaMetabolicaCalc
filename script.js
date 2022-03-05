//TMB = 66 + (13,8 x peso em kg.) + (5 x altura em cm) - (6,8 x idade em anos). HOMENS
//TMB = 655 + (9,6 x peso em kg.) + (1,8 x altura em cm) - (4,7 x idade em anos). MULHERES
function calcular(){
    var sexo = document.getElementsByName('radsex')
    var anos = document.getElementById('idade')
    var kg = document.getElementById('peso')
    var cm = document.getElementById('altura')
    var exerciciod = document.getElementsByName('exd')
    var res = document.getElementById('res')

    res.innerHTML = ''
    if(sexo[0].checked){ //radsex == homem
        var k = Number(kg.value)
        var c = Number(cm.value)
        var a = Number(anos.value)
        var calch = 66 + (13.8 * k) + (5 * c) - (6.8 * a)
        res.innerHTML += `Sua Taxa Metabólica Basal é, aproximadamente, ${calch.toFixed(2)} kcal`
        
        res1.innerHTML = ''
        if(exerciciod[0].checked){
            var nada = 1.2
            var gcd = calch * nada
            res1.innerHTML = `Seu Gasto Calórico Diário é, aproximadamente, ${gcd.toFixed(2)} kcal`
        }else if(exerciciod[1].checked){
            var min = 1.375
            var gcd = calch * min
            res1.innerHTML += `Seu Gasto calórico Diário é, aproximadamente, ${gcd.toFixed(2)} kcal`
        }else if(exerciciod[2].checked){
            var med = 1.55
            var gcd = calch * med
            res1.innerHTML += `Seu Gasto calórico Diário é, aproximadamente, ${gcd.toFixed(2)} kcal`
        }else if(exerciciod[3].checked){
            var max = 1.8
            var gcd = calch * max
            res1.innerHTML += `Seu Gasto calórico Diário é, aproximadamente, ${gcd.toFixed(2)} kcal`
        }


    }else if(sexo[1].checked){ //radsex == mulher
        var k = Number(kg.value)
        var c = Number(cm.value)
        var a = Number(anos.value)
        var calcm = 655 + (9.6 * k) + (1.8 * c) - (4.7 * a)
        res.innerHTML += `Sua Taxa Metabólica Basal é, aproximadamente, ${calcm.toFixed(2)} kcal`
        if(exerciciod[0].checked){
            var nada = 1.2
            var gcd = calcm * nada
            res1.innerHTML = `Seu Gasto Calórico Diário é, aproximadamente, ${gcd.toFixed(2)} kcal`
        }else if(exerciciod[1].checked){
            var min = 1.375
            var gcd = calcm * min
            res1.innerHTML = `Seu Gasto calórico Diário é, aproximadamente, ${gcd.toFixed(2)} kcal`
        }else if(exerciciod[2].checked){
            var med = 1.55
            var gcd = calcm * med
            res1.innerHTML = `Seu Gasto calórico Diário é, aproximadamente, ${gcd.toFixed(2)} kcal`
        }else if(exerciciod[3].checked){
            var max = 1.8
            var gcd = calcm * max
            res1.innerHTML = `Seu Gasto calórico Diário é, aproximadamente, ${gcd.toFixed(2)}`
        }
    } res2.innerHTML = `Se você quiser perder peso de maneira saudável, precisará entrar em uma dieta com deficit calórico, ou seja, comer menos de ${gcd.toFixed(2)} kcal por dia.`
    res3.innerHTML = `Agora se você quiser ganhar massa, terá que fazer uma dieta com superávit calórico, comendo mais de ${gcd.toFixed(2)} kcal diários.`
}