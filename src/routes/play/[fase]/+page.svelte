<script lang="ts">
	import {instanceGame, formatWord, testWord, wins} from '$lib/game';
	import {goto} from "$app/navigation";

	export let data;

	let fase: number = data.fase;
	let game = instanceGame(fase);

	$: {
		game.inputs
		formatWord(game.inputs);
		if (wins(game.inputs, game.respostas)){
			alert('você venceu!');
			fase++;
			goto('/play/' + fase);
			game = instanceGame(fase)
		}
	}
</script>
<form>
	<table class="crossword">
		{#each game.mapa as linha, i}
			<tr>
				{#each linha as coluna, j}
					{#if coluna == 0}
						<td class="empty"></td>
					{:else if coluna == 1}
						<td class="filled">
							<input
									type="text"
									maxlength="1"
									style="width: 80px; height: 80px; background-color: {testWord(
								game.inputs[i][j],
								game.respostas[i][j]
							)}; font-size: 52px ; text-align: center; font-family: 'IBM plex mono', monospace ; color: #ffffff;"
									bind:value={game.inputs[i][j]}
							/>
						</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</table>
</form>