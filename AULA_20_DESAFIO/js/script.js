function calcularMedia(n1, n2, n3){

    let media = (n1 + n2 + n3) / 3;

    if (media >= 6) {
        return ` Parabéns,aprovado com média ${media.toFixed(1)}`;
    }else{
        return ` Estude um pouco mais, reprovado com média ${media.toFixed(1)}`;
    };
}

document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault();
    let n1 = parseInt(document.querySelector('#n1').value);
    let n2 = parseInt(document.querySelector('#n2').value);
    let n3 = parseInt(document.querySelector('#n3').value);
    let resultado = calcularMedia(n1, n2, n3);

    document.querySelector('#resultado').textContent = resultado;
    
});

