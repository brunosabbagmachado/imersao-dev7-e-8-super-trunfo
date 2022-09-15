var carta1 = {
    nome: 'Bulbassauro',
    imagem: 'https://pm1.narvii.com/6400/9605b20ead97651b0d9bdb48eab5c49d3c504d3f_hq.jpg',
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: 'Darth Vader',
    imagem: 'https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg',
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: 'Shiryu de dragão',
    imagem: 'https://s.aficionados.com.br/imagens/shiryu.jpg',
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }

    cartaJogador = cartas[numeroCartaJogador];

    document.querySelector('#btnSortear').disabled = true;
    document.querySelector('#btnJogar').disabled = false/

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName('atributo');

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.querySelector('#resultado');
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = `<p class="resultado-final">Venceu</p>`;
    } else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = `<p class="resultado-final">Perdeu</p>`;
    } else {
        htmlResultado = `<p class="resultado-final">Empatou</p>`;
    }

    divResultado.innerHTML = htmlResultado;
    document.querySelector('#btnJogar').disabled = true;
    document.querySelector('#btnSortear').disabled = false;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.querySelector('#carta-jogador');
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;"></div>`;

    var tagHTML = `<div id='opcoes' class='carta-status'>`;

    var opcoesTexto = '';

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'>${atributo} ${cartaJogador.atributos[atributo]} <br>`;
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.querySelector('#carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;"></div>`;

    var tagHTML = `<div id='opcpes' class='carta-status'>`;

    var opcoesTexto = '';

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += `<p type='text' name='atributo' value='${atributo}'>${atributo} ${cartaMaquina.atributos[atributo]}</p>`;
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}