<script lang="ts">
	import HeaderComponent from '../../../components/headerComponent/HeaderComponent.svelte';
	import ReturnComponent from '../../../components/returnComponent/ReturnComponent.svelte';
	import '../../../styles/play.css';

	export let data;
	let fase: number = data.fase;
</script>
<div class="contpl">
	<HeaderComponent title="CROSS WORDS" />
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
						<li>Name of the discipline that involves the construction and maintenance of computer networks.</li>
						<li>Name of professor who specializes in Design, with a focus on usability and user experience.</li>
						<li>Fundamental concept that deals with the way data is represented and manipulated at the hardware and software level.</li>
						<li>Name of professor specializing in computer networks, also known for his work in network security.</li>
						<li>Acronym that represents a computer network that connects devices within an organization.</li>
					{:else if fase === 3}
						<li>Control structure that executes a block of code while a condition is true</li>
						<li>Word that represents a control structure that decides between alternatives.</li>
						<li>Structure that stores multiple values of the same type.</li>
						<li>Control structure that repeats a block of code for each item in a collection.</li>
						<li>Type of operation that checks whether both operands are true.</li>
						<li>Term for an identifier that refers to a function or subprogram.</li>
					{:else if fase === 4}
						<li>A device that connects different networks, such as a local area network (LAN) and the Internet</li>
						<li>Wireless network technology that allows devices to connect to the internet.</li>
						<li>Name given to a local area network that is subdivided into virtual networks to segment traffic.</li>
						<li>Technology used to control and manage access points on a wireless network.</li>
						<li>Default configuration that a system uses if no other configuration is specified.</li>
					{:else if fase === 5}
						<li>Set of procedures and tools for developing and maintaining software.</li>
						<li>Reference model for computer networks that has seven layers.</li>
						<li>Field of computer science focused on ensuring that information is safe and secure.</li>
						<li>Process of validating and adjusting a program to find and correct errors.</li>
						<li>Set of standards and rules for agile and iterative software development.</li>
						<li.>Database Management System.</li.>
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
