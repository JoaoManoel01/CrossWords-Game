<script lang="ts">
	import ReturnComponent from '../../components/returnComponent/ReturnComponent.svelte';
	import '../../styles/play.css';

let mapa = [
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,1,0],
	[0,0,0,1,1,1,1],
	[0,1,0,0,0,1,0],
	[0,1,0,0,0,1,0],
	[0,1,1,1,1,1,1],
	[0,1,0,0,0,0,0],
	[0,1,1,1,0,0,0]

] 
</script>

<svelte:head>
	<title>How To Play</title>
</svelte:head>

<div class="cont">
	<main class="howmain">
		<div class="cluespart">
			<div class="title1">CROSS WORDS</div>
			<div class="cluestable">
				<div class="clueh1"><h1>Clues Table</h1></div>
				<ol>
					<li>Teacher who likes J-Pop (5 ltr)</li>
					<li>Opposite of Winner (5 ltr)</li>
					<li>Accompanies coffee (4 ltr)</li>
					<li>The season after winter (6 ltr)</li>
					<li>A color of the blood (3 ltr)</li>
				</ol>
			</div>
		</div>
		<div class="line"></div>
		<div class="gridpart">
			<ReturnComponent />
			<div class="thegrid">
				
				<table class="crossword">
					{#each mapa as linha}
					<tr>
						{#each linha as coluna}
							{#if coluna == 0}
							<td class="empty"></td>
							{:else if coluna == 1}
							<td class="filled"> <input type="text" maxlength="1" style="width: 80px; height: 80px; background-color:#025962; font-size: 52px ; text-align: center; font-family: 'IBM plex mono', monospace ; color: #ffffff;"></td>
							{/if}

						{/each}
					</tr>
				{/each}
				</table>
			</div>
		</div>
	</main>
</div>
