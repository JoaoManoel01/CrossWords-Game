<script lang="ts">
	import ReturnComponent from '../../components/returnComponent/ReturnComponent.svelte';
	import '../../styles/play.css';
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
					<tr id="0">
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty">1</td>
						<td class="empty"></td>
					</tr>
					<tr id="0">
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
					</tr>
					<tr id="1">
						<td class="empty"></td>
						<td class="empty">2</td>
						<td class="empty">3</td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
					</tr>
					<tr id="2">
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
					</tr>
					<tr id="3">
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
					</tr>
					<tr id="4">
						<td class="empty">4</td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
					</tr>
					<tr id="5">
						<td class="empty"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"> </td></tr
					>
					<tr id="6">
						<td class="empty">5</td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="filled"></td>
						<td class="empty"></td>
						<td class="empty"></td>
						<td class="empty"></td>
					</tr>
				</table>
			</div>
		</div>
	</main>
</div>
