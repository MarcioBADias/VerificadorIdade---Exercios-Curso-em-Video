function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = document.getElementById("anoNasc");
    
    
    var res = document.getElementById("res");
    if (anoNasc.value.length == 0 || anoNasc.value > ano) {
        window.alert(`Verifique o campo "Ano de Nascimento"`)
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(anoNasc.value);
        var genero = '';
        var img = document.createElement("img");
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = `Homem`;
            if (idade >= 0 && idade < 18) {
                //crianca
                img.setAttribute('src', 'criancaM.jpg');
            }else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adultoM.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.jpg');
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`;
            if (idade >= 0 && idade < 18) {
                //crianca
                img.setAttribute('src', 'criancaF.png');
            }else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adultoF.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'idosaF.jpg');
            }
        }
        res.innerHTML = `Detectamos que você é ${genero} e está com ${idade} anos.`;
        res.appendChild(img);
        
    }
    
    document.getelemen
    
    
}