<script lang="ts">
	import HeaderComponent from '../../components/headerComponent/HeaderComponent.svelte';
	import '../../styles/howtoplay.css';
</script>

<svelte:head>
	<title>How To Play</title>
</svelte:head>

<div class="cont">
	<HeaderComponent title="HOW TO PLAY" />
	<main class="howmain">
		<div class="cluespart">
			<div class="clueh1"><h1 class="tablesh1">Clues Table</h1></div>
			<div class="cluestable">
				<div class="cluelist">
					<ol>
						<li><s>Teacher who likes J-Pop</s> (4 ltr)</li>
						<li>Opposite of Winner (5 ltr)</li>
						<li>Accompanies coffee (4 ltr)</li>
						<li>The season after winter (6 ltr)</li>
						<li>A color of the blood (3 ltr)</li>
					</ol>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="gridpart">
			<div class="gridh1"><h1 class="tablesh1">The Grid</h1></div>
			<div class="thegrid">
				<table class="crossword">
					<tr id="0">
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty">1</td>
						<td class="empty"></td>
						<td class="empty"></td>
					</tr>
					<tr id="1">
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="filled">A</td>
						<td class="empty"></td>
						<td class="empty"></td>
					</tr>
					<tr id="2">
						<td class="empty"></td>
						<td class="empty">2</td>
						<td class="empty">3</td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled">L</td>
						<td class="filled"></td>
						<td class="empty"></td>
					</tr>
					<tr id="3">
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="filled">L</td>
						<td class="empty"></td>
						<td class="empty"></td>
					</tr>
					<tr id="4">
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="filled">A</td>
						<td class="empty"></td>
						<td class="empty"></td>
					</tr>
					<tr id="5">
						<td class="empty">4</td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled">N</td>
						<td class="filled"></td>
						<td class="empty"></td>
					</tr>
					<tr id="6">
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"> </td>
						<td class="empty"></td>
					</tr>
					<tr id="7">
						<td class="empty">5</td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
					</tr>
					<tr id="8">
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
					</tr>
				</table>
			</div>
		</div>
	</main>
</div>
