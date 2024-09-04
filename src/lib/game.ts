class Game {
	mapa: number[][];
	respostas: string[][];
	inputs: string[][];

	constructor(mapa: number[][], respostas: string[][], inputs: string[][]) {
		this.mapa = mapa;
		this.respostas = respostas;
		this.inputs = inputs;
	}
}

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
		[0, 0, 1, 0]	
	]	

	if (fase == 1) {
		return mapa1;
	} else if (fase == 2){
		return mapa2 
	}

	return []
}

function respostas(fase: number = 1):string[][] {
	const respostas1 = [
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', 'A', ' '],
		[' ', ' ', ' ', 'M', 'I', 'L', 'K'],
		[' ', 'L', ' ', ' ', ' ', 'L', ' '],
		[' ', 'O', ' ', ' ', ' ', 'A', ' '],
		[' ', 'S', 'P', 'R', 'I', 'N', 'G'],
		[' ', 'E', ' ', ' ', ' ', ' ', ' '],
		[' ', 'R', 'E', 'D', ' ', ' ', ' ']
	];

	const respostas2 = [
		[' ', ' ', 'B', ' ']	
	]	

	if (fase == 1) {
		return respostas1;
	} else if (fase == 2){
		return respostas2
	}
	return []
}

export function instanceGame(fase: number = 1) {
	const mapa = mapas(fase);
	const resposta = respostas(fase);
	const inputs: string[][] = []; //variavel onde o usuário vai interajir no jogo

	for (let i = 0; i < mapa.length; i++) {
		inputs[i] = [];
		for (let j = 0; j < mapa[i].length; j++) {
			inputs[i][j] = '';
		}
	}

	const game = new Game(mapa, resposta, inputs);
	return game;
}

export function formatWord(inputs: string[][]) {
	for (let i = 0; i < inputs.length; i++) {
		for (let j = 0; j < inputs[i].length; j++) {
			if (inputs[i][j]) {
				inputs[i][j] = inputs[i][j].toUpperCase();
			}
		}
	}
}

export function testWord(text: string, respostas: string) {
	if (text === respostas) {
		return 'green';
	}
	return 'red';
}

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