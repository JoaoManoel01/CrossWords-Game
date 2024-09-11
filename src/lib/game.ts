// feito para armazenar multiplas informações dentro do jogo, mapas, respostas e os inputs.
class Game {   			
	mapa: number[][];
	respostas: string[][];
	inputs: string[][];
// o constructor está sendo usado para passar os parametros e indexando os atributos da classe.
	constructor(mapa: number[][], respostas: string[][], inputs: string[][]) {
		this.mapa = mapa;
		this.respostas = respostas;
		this.inputs = inputs;
	}
}
// a função em questão está servindo de base para construir os mapas.
function mapas(fase: number = 1):number[][] {
	const mapa1 = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0],
		[0, 0, 0, 1, 1, 1, 1],
		[0, 1, 0, 0, 0, 1, 0],
		[0, 1, 0, 0, 0, 1, 0],
		[0, 1, 1, 1, 1, 1, 1],
		[0, 1, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0, 0, 0]
	];

	const mapa2 = [
		[0, 0, 0, 1, 0, 0, 0],
		[1, 1, 1, 1, 1, 0, 0],
		[0, 1, 0, 1, 0, 0, 0],
		[0, 1, 0, 1, 0, 0, 0],
		[0, 1, 0, 1, 0, 0, 0],
		[0, 1, 0, 1, 0, 0, 0],
		[0, 0, 1, 1, 1, 1, 0],
		[0, 0, 0, 1, 0, 0, 0],
		[0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 1, 0, 0, 0]	
	]	

	const mapa3 = [
		[0, 0, 0, 1, 0, 0, 1, 0, 0],
		[0, 1, 0, 1, 0, 0, 1, 0, 1],
		[0, 1, 0, 1, 1, 1, 1, 1, 1],
		[0, 1, 0, 1, 0, 0, 1, 0, 1],
		[0, 1, 0, 1, 0, 0, 1, 0, 0],
		[0, 1, 0, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 0, 0]

	]

	const mapa4 = [
		[0, 0, 0, 1, 0, 1, 0],
		[1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 1, 0, 1, 0],
		[0, 0, 0, 1, 0, 1, 0],
		[0, 0, 0, 1, 0, 0, 0],
		[0, 1, 1, 1, 1, 0, 0],
		[0, 1, 0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0]

	]

	const mapa5 = [
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
		[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
		[0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1],
		[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
	
	]


	if (fase == 1) {
		return mapa1
	} else if (fase == 2){
		return mapa2
	}else if (fase == 3){
		return mapa3
	}else if (fase == 4){
		return mapa4
	}else if (fase == 5){
		return mapa5
	}

	return []
}
// a função está servindo de base para montar e armazenar as respostas.
function respostas(fase: number = 1):string[][] {
	const respostas1 = [
		[' ', ' ', ' ', ' ', ' ', '1', ' '],
		[' ', ' ', ' ', ' ', ' ', 'A', ' '],
		[' ', '2', '3', 'M', 'I', 'L', 'K'],
		[' ', 'L', ' ', ' ', ' ', 'L', ' '],
		[' ', 'O', ' ', ' ', ' ', 'A', ' '],
		['4', 'S', 'P', 'R', 'I', 'N', 'G'],
		[' ', 'E', ' ', ' ', ' ', ' ', ' '],
		['5', 'R', 'E', 'D', ' ', ' ', ' ']
	];

	const respostas2 = [
		['', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		['', ' ', ' ', ' ', 'C', ' ', ' ', ' '],
		['', 'E', 'R', 'T', 'O', 'N', ' ', ' '],
		['', ' ', 'E', ' ', 'M', ' ', ' ', ' '],
		['', ' ', 'D', ' ', 'P', ' ', ' ', ' '],
		['', ' ', 'E', ' ', 'U', ' ', ' ', ' '],
		['', ' ', 'S', ' ', 'T', ' ', ' ', ' '],
		['', ' ', ' ', 'D', 'A', 'V', 'I', ' '],
		['', ' ', ' ', ' ', 'Ç', ' ', ' ', ' '],
		['', ' ', ' ', 'L', 'A', 'N', ' ', ' '],
		['', ' ', ' ', ' ', 'O', ' ', ' ', ' ']


	]	

	const respostas3 = [
		[' ', ' ', ' ', 'S', ' ', ' ', 'W', ' ', ' '],
		[' ', 'I', ' ', 'E', ' ', ' ', 'H', ' ', 'F'],
		[' ', 'N', ' ', 'L', 'O', 'G', 'I', 'C', 'O'],
		[' ', 'D', ' ', 'E', ' ', ' ', 'L', ' ', 'R'],
		[' ', 'I', ' ', 'Ç', ' ', ' ', 'E', ' ', ' '],
		[' ', 'C', ' ', 'A', ' ', ' ', ' ', ' ', ' '],
		['V', 'E', 'T', 'O', 'R', 'E', 'S', ' ', ' ']

	
	]	

	const respostas4 = [
		[' ', ' ', ' ', 'G', ' ', 'V', ' '],
		['D', 'E', 'F', 'A', 'U', 'L', 'T'],
		[' ', ' ', ' ', 'T', ' ', 'A', ' '],
		[' ', ' ', ' ', 'E', ' ', 'N', ' '],
		[' ', ' ', ' ', 'W', ' ', ' ', ' '],
		[' ', 'W', 'L', 'A', 'N', ' ', ' '],
		[' ', 'L', ' ', 'Y', ' ', ' ', ' '],
		[' ', 'C', ' ', ' ', ' ', ' ', ' ']




	]	

	const respostas5 = [
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', 'Q', 'L'],
		[' ', 'D', ' ', ' ', ' ', ' ', ' ', ' ', 'E', ' ', ' '],
		['M', 'E', 'T', 'O', 'D', 'O', 'L', 'O', 'G', 'I', 'A'],
		[' ', 'B', ' ', 'S', ' ', ' ', ' ', ' ', 'U', ' ', ' '],
		[' ', 'U', ' ', 'I', ' ', ' ', 'S', 'C', 'R', 'U', 'M'],
		[' ', 'G', ' ', ' ', ' ', ' ', ' ', ' ', 'A', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ç', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'A', ' ', ' ']

	]	

	if (fase == 1) {
		return respostas1;
	} else if (fase == 2){
		return respostas2
	}else if (fase == 3){
		return respostas3
	}else if (fase == 4){
		return respostas4
	}else if (fase == 5){
		return respostas5
	}
	return []
}
// ele está exportando os atributos do game 
export function instanceGame(fase: number = 1) {
	const mapa = mapas(fase);
	const resposta = respostas(fase);
	const inputs: string[][] = []; //variavel onde o usuário vai interajir no jogo
// está montando os inputs baseado no mapa.
	for (let i = 0; i < mapa.length; i++) {
		inputs[i] = [];
		for (let j = 0; j < mapa[i].length; j++) {
			inputs[i][j] = '';
		}
	}

	const game = new Game(mapa, resposta, inputs);
	return game;
}
// função para deixar as letras Maiúsculas 
export function formatWord(inputs: string[][]) {
	for (let i = 0; i < inputs.length; i++) {
		for (let j = 0; j < inputs[i].length; j++) {
			if (inputs[i][j]) {
				inputs[i][j] = inputs[i][j].toUpperCase();
			}
		}
	}
}
// fazendo o teste das respostas do usuario e verificando se estão corretas 
export function testWord(text: string, respostas: string) {
	if (text === respostas) {
		return 'green';
	}
	return 'red';
}
// verificando se TODAS as resposas estão corretas 
export function wins(
	inputs:string[][], 
	respostas:string[][]
): boolean {
	for(let i: number = 0; i < respostas.length; i++){
		for (let j: number = 0; j < respostas[i].length; j++){
			if (respostas[i][j] !== ' ' && respostas[i][j] !== inputs[i][j] ) {
				return false
			}
		}
	}
	return true
}