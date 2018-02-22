var Jogador = null;
var TabuleiroJogo = [
					[null,null,null],
					[null,null,null],
					[null,null,null]
				]

function IniciarJogo(){

	document.getElementById('EscolherXO1').style.display = 'block';
	document.getElementById('EscolherXO2').style.display = 'block';

	document.getElementById('CorpoMensagem').innerHTML = "1º Jogador escolha se você quer ser o 'X' ou 'O' (clique na Opção Abaixo)!!!"
		

	
	
	

}
function MudarEstado(elemento){
	var tag = document.getElementById(elemento).style.display;
}

function FirstPlayer(opcao){	
	Jogador = opcao;
	document.getElementById('EscolherXO1').style.display = 'none';
	document.getElementById('EscolherXO2').style.display = 'none';
	document.getElementById('CorpoJogo').style.display = 'block';
	document.getElementById('CorpoMensagem').innerHTML = "";
}

function TrocarJogador(jogador){
	if (jogador == 'X'){
		Jogador = 'O';
	}
	else{
		Jogador = 'X';
	}
}

function AtualizarMatriz(linha, coluna, id, elemento){
	if (TabuleiroJogo[linha][coluna] == null){
		document.getElementById('CorpoMensagem').innerHTML = ""
		TabuleiroJogo[linha][coluna] = elemento;	
		document.getElementById(id).innerHTML = Jogador;
		TrocarJogador(Jogador);
	}
	else{
		document.getElementById('CorpoMensagem').innerHTML = "Você não pode jogar neste espaço!!"
	}
	
}
function Mostrar(){
	var string = ""
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++) {
			string += TabuleiroJogo[i][j] + " ";

		}
		string += '<br>';
	}
	document.getElementById('mostrar').innerHTML = string;

}