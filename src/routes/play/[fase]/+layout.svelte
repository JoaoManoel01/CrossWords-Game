<script lang="ts">
	import HeaderComponent from '../../../components/headerComponent/HeaderComponent.svelte';
	import '../../../styles/play.css';

	export let data;
	let fase: number = data.fase;

	$: {
		fase = data.fase;
	}
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
						<li>The color of the blood (3 ltr)</li>

					{:else if fase === 2}

						<li>Name of the discipline for building and maintaining computer networks. (8 ltr)</li>
						<li>Professor specializing in Design and user experience. (5 ltr)</li>
						<li>Concept about how data is represented and handled in hardware and software. (9 ltr)</li>
						<li>Professor specializing in computer networks (5 ltr)</li>
						<li>Acronym for a network connecting devices in an organization.(3 ltr)</li>
					
					{:else if fase === 3}
					
						<li>Control structure that runs code while a condition is true. (9 ltr)</li>
						<li>Control structure for deciding between alternatives. (5 ltr)</li>
						<li>Structure that holds multiple values of the same type. (7 ltr)</li>
						<li>Control structure that loops through items in a collection. (3 ltr)</li>
						<li>Operation type that checks if both operands are true. (7 ltr)</li>
						<li>Identifier that refers to a function or subprogram. (5 ltr)</li>
					
					{:else if fase === 4}
					
						<li>Device that connects different networks, like LAN and the Internet (7 ltr)</li>
						<li>Wireless technology that connects devices to the internet. (4 ltr)</li>
						<li>Network subdivided into virtual segments for traffic control. (4 ltr)</li>
						<li>Technology to manage wireless access points. (3 ltr)</li>
						<li>Default configuration used if no other is specified. (7 ltr)</li>
					
					{:else if fase === 5}
					
						<li>Set of procedures and tools for software development. (11 ltr)</li>
						<li>Reference model for networks with seven layers. (3 ltr)</li>
						<li>Field focused on securing information. (8 ltr)</li>
						<li>Process to find and fix program errors. (5 ltr)</li>
						<li>Rules for agile and iterative software development. (5 ltr)</li>
						<li>Database management system. (3 ltr)</li>
					
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
