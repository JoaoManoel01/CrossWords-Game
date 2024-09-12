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
function mapas(respostas: string[][]):number[][] {
	const mapa: number[][] = []
	for(let i = 0; i < respostas.length; i++){
		mapa[i] = []
		for(let j = 0; j < respostas[i].length; j++){
			if(respostas[i][j] === ' ' || /\d/.test(respostas[i][j])){
				//condição: \/d/.test(respostas[i][j]) está verificando se o conteúdo da string é um número
				mapa[i][j] = 0 
				
			}
			else{
				mapa[i][j] = 1
			}
		}
	}
	return mapa;
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
		[' ', ' ','5', ' ', ' ', ' ', ' ', ' ', ' ',' ',' '],
		[' ', ' ','L', ' ', ' ', ' ', '3', ' ', ' ', ' ',' '],
		[' 4','D','A', 'V', 'I', 'D', 'C', ' ', ' ', ' ',' '],
		[' ', '1','N', 'E', 'T', 'W', 'O', 'R', 'K', 'S',' '],
		[' ', ' ', ' ',' ', ' ', ' ', 'M', ' ', ' ', ' ',' '],
		[' ', ' ', ' ',' ', ' ', ' ', 'P', ' ', ' ', ' ',' '],
		[' ', ' ', ' ',' ', ' ', ' ', 'U', ' ', ' ', ' ',' '],
		[' ', ' ', ' ','2', 'E', 'R', 'T', 'O', 'N', ' ',' '],
		[' ', ' ', ' ', ' ', ' ', ' ','I',' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ','N', ' ', ' ',' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ','G', ' ', ' ',' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ',' ']


	]	

	const respostas3 = [
		[' ',' ', ' ', ' ', ' ','1', ' ', ' ', ' ', ' ',' '],
		[' ',' ', ' ', ' ', ' ','S', ' ', ' ', ' ', ' ',' '],
		[' ',' ', ' ', ' ', ' ','E', ' ', ' ', '4',' ', ' '],
		[' ','2', 'W', 'H', 'I','L','E', ' ',  'F',' ', ' '],
		[' ',' ', ' ', ' ', ' ','E', ' ', ' ', 'O',' ', ' '],
		[' ',' ', '3', 'V', 'E','C', 'T', 'O', 'R','S', ' '],
		[' ',' ', ' ', ' ', ' ','T', ' ', ' ', ' ', ' ',' '],
		[' ','5', 'L', 'O', 'G','I','C', 'A', 'L', ' ', ' '],
		[' ',' ', ' ', ' ', ' ','O',' ', ' ', ' ', ' ', ' '],
		[ ' ',' ', ' ', '6', 'I','N','D','E', 'X', ' ', ' '],
		[' ',' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ']
	]	

	const respostas4 = [
		[' ',' ', ' ', ' ', ' ',' ', '2', ' ', ' ', ' ',' '],
		[' ',' ', ' ', ' ', '5',' ', 'W', ' ', ' ', ' ',' '],
		[' ',' ', ' ', ' ', 'D',' ', 'L', ' ', ' ',' ', ' '],
		['1','G', 'A', 'T', 'E','W', 'A', 'Y',  ' ',' ', ' '],
		[' ',' ', ' ', ' ', 'F',' ', 'N', ' ', ' ',' ', ' '],
		[' ','3', 'V', 'L', 'A','N', ' ', ' ', ' ',' ', ' '],
		[' ',' ', ' ', ' ', 'U',' ', ' ', ' ', ' ', ' ',' '],
		[' ',' ', '4', 'W', 'L', 'C',' ', ' ', ' ', ' ', ' '],
		[' ',' ', ' ', ' ', 'T',' ',' ', ' ', ' ', ' ', ' '],
		[ ' ',' ', ' ', ' ', ' ',' ',' ',' ', ' ', ' ', ' '],
		[' ',' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ']


	]	

	const respostas5 = [
		[' ',' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' '],
		[' ',' ', ' ', '3', ' ',' ', ' ', ' 1', ' ', ' ',' '],
		[' ',' ', ' 5','S', 'C','R', 'U', 'M', ' ', ' ',' '],
		[' ',' ', ' ', 'E', ' ',' ', ' ', 'E', ' ',' ', ' '],
		[' ',' ', ' ', 'C', ' ',' ', ' ', 'T',  ' ',' ', ' '],
		[' ',' ', ' ', 'U', ' ',' ', ' ', 'H', ' ',' ', ' '],
		[' ',' ', ' ', 'R', ' ',' ', ' ', 'O', ' ',' ', ' '],
		['2','O', 'S', 'I', ' ',' ', ' ', 'D', ' ', ' ',' '],
		[' ',' ', ' ', 'T', ' ', ' ',' ', 'O', ' ', ' ', ' '],
		[' ',' ', ' ', 'Y', '6','S', 'Q', 'L', ' ', ' ', ' '],
		[ ' ',' ', ' ', ' ', ' ',' ',' ','O', ' ', ' ', ' '],
		[' ',' ', '4', 'D', 'E','B', 'U', 'G', ' ', ' ',' '],
		[' ',' ', ' ', ' ', ' ',' ', ' ', 'Y', ' ', ' ',' ']

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
	const resposta = respostas(fase);
	const mapa = mapas(resposta);
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
			if (respostas[i][j] !== ' ' && !/\d/.test(respostas[i][j]) && respostas[i][j] !== inputs[i][j] ) {
				//condição: \/d/.test(respostas[i][j]) está verificando se o conteúdo da string é um número
				return false;
			}
		}
	}
	return true
}