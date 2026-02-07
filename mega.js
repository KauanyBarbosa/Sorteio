var num = []; 

function sorteio(jogo) {

    if (jogo == 'start') {
        let input = prompt('Digite 6 números separados por espaço');
        num = input.split(' ').map(Number); 
        document.getElementById('num_user').innerHTML = 'Os seus números são: ' + num;
    } 
    else if (jogo == 'random') {
        let numeros = [];

        for (let i = 0; i < 6; i++) {
            let numero = Math.floor(Math.random() * 60) + 1;
            numeros.push(numero);
        }
        document.getElementById("sorteio").innerHTML = 'Os números sorteados foram: ' + numeros;
    
        let acertos = 0;

        for (let i = 0; i < num.length; i++) {
            if (numeros.includes(num[i])) {
                acertos++
            }
        }
        
        if (acertos == 3) {
            document.getElementById('res').innerHTML = 'Você acertou o terno! :)';
        } 
        else if (acertos == 4) {
            document.getElementById('res').innerHTML = 'Você acertou a quadra! :)';
        }
        else if (acertos == 5) {
            document.getElementById('res').innerHTML = 'Você acertou a quina! :)';
        }
        else if (acertos == 6) {
            document.getElementById('res').innerHTML = 'VOCÊ ACERTOU TODOSSS! :)';
        }
        else{
            document.getElementById('res').innerHTML = 'Não acertou nenhuma sequência :(';
        }
    }
}

