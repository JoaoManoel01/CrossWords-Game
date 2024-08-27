<script lang="ts">
	import './headerComponent.css';
	import ReturnComponent from '../returnComponent/ReturnComponent.svelte';

	export let title: string;
</script>

<header>
	<ReturnComponent />
	<h1 class="pagetitle">{title}</h1>
	<div class="separator"></div>
</header>
