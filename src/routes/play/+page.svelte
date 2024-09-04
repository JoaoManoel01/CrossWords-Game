<script lang="ts">
	import { updated } from "$app/stores";

	
	let mapa = [
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,1,0],
		[0,0,0,1,1,1,1],
		[0,1,0,0,0,1,0],
		[0,1,0,0,0,1,0],
		[0,1,1,1,1,1,1],
		[0,1,0,0,0,0,0],
		[0,1,1,1,0,0,0]
	];

	const respostas = [
		[' ',' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ','A',' '],
		[' ',' ',' ','M','I','L','K'],
		[' ','L',' ',' ',' ','L',' '],
		[' ','O',' ',' ',' ','A',' '],
		[' ','S','P','R','I','N','G'],
		[' ','E',' ',' ',' ',' ',' '],
		[' ','R','E','D',' ',' ',' ']
	];

	let inputs: string[][] = []; //variavel onde o usuário vai interajir no jogo
	for(let i = 0; i < mapa.length; i++) {
		inputs[i] = [];
		for(let j = 0; j < mapa[i].length; j++) {
			inputs[i][j] = '';
		}
	}

	function testWord(text: string, i: number, j: number ) {
		if(text === respostas[i][j]) {
			return 'green'
		} 
		return 'red';
	}
	$: {
		inputs;
		for(let i = 0; i < inputs.length; i++) {
			for(let j = 0; j < inputs[i].length; j++){
				if(!!inputs[i][j]){
					inputs[i][j] = inputs[i][j].toUpperCase();
				}
			}
		}
	}
</script>

<table class="crossword">
	{#each mapa as linha, i}
		<tr>
			{#each linha as coluna, j}
				{#if coluna == 0}
					<td class="empty"></td>
				{:else if coluna == 1}
					<td class="filled"> 
						<input 
							type="text" 
							maxlength="1" 
							style="width: 80px; height: 80px; background-color: {testWord(inputs[i][j], i, j)}; font-size: 52px ; text-align: center; font-family: 'IBM plex mono', monospace ; color: #ffffff;"
							bind:value={inputs[i][j]}
							>
					</td>
				{/if}
			{/each}
		</tr>
	{/each}
</table>