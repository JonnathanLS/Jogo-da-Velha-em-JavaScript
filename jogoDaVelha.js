

function IniciarJogo(){
	//alert('teste');
	document.getElementById('EscolherXO1').style.display = 'block';
	document.getElementById('EscolherXO2').style.display = 'block';
	var Jogador = null;
	document.getElementById('CorpoMensagem').innerHTML = "1º Jogador escolha se você quer ser o 'X' ou 'O' (clique na Opção Abaixo)!!!"
	

}
function MudarEstado(elemento){
	var tag = document.getElementById(elemento).style.display;
}

function FirstPlayer(opcao){	
	Jogador = opcao;
	document.getElementById('EscolherXO1').style.display = 'none';
	document.getElementById('EscolherXO2').style.display = 'none';
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

function InserirElemento(posicao) {
	document.getElementById(posicao).innerHTML = Jogador;
	TrocarJogador(Jogador);
}
