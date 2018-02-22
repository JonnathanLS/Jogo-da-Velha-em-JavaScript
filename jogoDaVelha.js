var Jogador = null;
var TabuleiroJogo = [[null,null,null],[null,null,null],[null,null,null]];

function IniciarJogo(){

	document.getElementById('IniciarJogo').style.display = 'none';
	document.getElementById('ReiniciarJogo').style.display = 'block';
	document.getElementById('EscolherXO1').style.display = 'block';
	document.getElementById('EscolherXO2').style.display = 'block';
	
	document.getElementById('CorpoMensagem').innerHTML = "1º Jogador escolha se você quer ser o 'X' ou 'O' (clique na Opção Abaixo)!!!";	

}
function MudarEstado(elemento){
	var tag = document.getElementById(elemento).style.display;
}

function ReiniciarJogo(){
	TabuleiroJogo = [[null,null,null],[null,null,null],[null,null,null]];
	document.getElementById('p0').innerHTML = "";
	document.getElementById('p1').innerHTML = "";
	document.getElementById('p2').innerHTML = "";
	document.getElementById('p3').innerHTML = "";
	document.getElementById('p4').innerHTML = "";
	document.getElementById('p5').innerHTML = "";
	document.getElementById('p6').innerHTML = "";
	document.getElementById('p7').innerHTML = "";
	document.getElementById('p8').innerHTML = "";
	document.getElementById('Resultado').style.display = 'none';
	if (VerificarJogo() == undefined){
		document.getElementById('CorpoMensagem').innerHTML = "";
		document.getElementById('CorpoJogo').style.display = 'block';
	}
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
		
		if (VerificarJogo() == 1){

			document.getElementById('CorpoJogo').style.display = 'none';
			document.getElementById('CorpoMensagem').innerHTML = Jogador + " Ganhou!!!"
			document.getElementById('Resultado').style.display = 'block';
		}
		else if (VerificarJogo() == 0) {
			document.getElementById('CorpoJogo').style.display = 'none';
			document.getElementById('Resultado').style.display = 'block';
		}

		TrocarJogador(Jogador);
	}
	else{
		document.getElementById('CorpoMensagem').innerHTML = "Você não pode jogar neste espaço!!"
	}
	
}

function VerificarJogo(){
	
	var p0 = TabuleiroJogo[0][0];
	var p1 = TabuleiroJogo[0][1];
	var p2 = TabuleiroJogo[0][2];
	var p3 = TabuleiroJogo[1][0];
	var p4 = TabuleiroJogo[1][1];
	var p5 = TabuleiroJogo[1][2];
	var p6 = TabuleiroJogo[2][0];
	var p7 = TabuleiroJogo[2][1];
	var p8 = TabuleiroJogo[2][2];

	// Verifica o jogo na Horizontal
	// Linha 1
	var status = (p0 == p1 && p1 == p2 && p0 != null && p1 != null && p2 != null);	
	if (status == 1){
		return 1;
	}
	// Linha 2
	status = (p3 == p4 && p4 == p5 && p3 != null && p4 != null && p5 != null);	
	if (status == true){
		return 1;
	}
	// Linha 3
	status = (p6 == p7 && p7 == p8 && p6 != null && p7 != null && p8 != null);	
	if (status == true){
		return 1;
	}

	// Verifica o Jogona Vertical
	// Coluna 1
	status = (p0 == p3 && p3 == p6 && p0 != null && p3 != null && p6 != null);	
	if (status == true){
		return 1;
	}
	// Coluna 2
	status = (p1 == p4 && p4 == p7 && p1 != null && p4 != null && p7 != null);	
	if (status == true){
		return 1;
	}
	// Coluna 3
	status = (p2 == p5 && p5 == p8 && p2 != null && p5 != null && p8 != null);	
	if (status == true){
		return 1;
	}

	// Verifica o Jogo na Trasnversal
	// Transversal 1 
	status = (p0 == p4 && p4 == p8 && p0 != null && p4 != null && p8 != null);	
	if (status == true){
		return 1;
	}
	// Trasnversal 2
	status = (p2 == p4 && p4 == p6 && p2 != null && p4 != null && p6 != null);	
	if (status == true){
		return 1;
	}
	// Verifica se deu velha 
	if (p0 != null &&
		p1 != null &&
		p2 != null &&
		p3 != null &&
		p4 != null &&
		p5 != null &&
		p6 != null &&
		p7 != null &&
		p8 != null
		){
		document.getElementById('CorpoMensagem').innerHTML = "Deu Velha";
		return 0;
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