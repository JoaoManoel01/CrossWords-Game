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
				<slot></slot>
			</div>
		</div>
	</main>
</div>
