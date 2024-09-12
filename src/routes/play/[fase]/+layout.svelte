<script lang="ts">
	import HeaderComponent from '../../../components/headerComponent/HeaderComponent.svelte';
	import '../../../styles/play.css';

	export let data;
	let fase: number = data.fase;
</script>
<div class="contpl">
	<HeaderComponent title="" />
	<main class="howmain1">
		<div class="cluespart1">
			<div class="cluestable1">
				<div class="clueh11"><h1 class="tablesh11">Clues Table</h1></div>
				<ol>
					{#if fase === 1}
						<li>Teacher who likes J-Pop (5 ltr)</li>
						<li>Opposite of Winner (5 ltr)</li>
						<li>Accompanies coffee (4 ltr)</li>
						<li>The season after winter (6 ltr)</li>
						<li>A color of the blood (3 ltr)</li>
					{:else if fase === 2}
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					{:else if fase === 3}
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					{:else if fase === 4}
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					{:else if fase === 5}
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						{/if}
				</ol>
			</div>
		</div>
		<div class="gridpart1">
			<div class="thegrid1">
				<slot></slot>
			</div>
		</div>
	</main>
</div>
