<script lang="ts">
	import '../../styles/about.css';
	import HeaderComponent from '../../components/headerComponent/HeaderComponent.svelte';

	const botoes = [
		{
			showEmail: false,
			name: 'João Manoel',
			profile: 'joao.png',
			email: 'jmlcr@discente.ifpe.edu.br',
			github: 'JoaoManoel01'
		},
		{
			showEmail: false,
			name: 'Guilherme Matheus',
			profile: 'guilherme.png',
			email: 'Gmfs1@discente.ifpe.edu.br',
			github: 'GuilhermeMth'
		},
		{
			showEmail: false,
			name: 'Kauã José',
			profile: 'kaua.png',
			email: 'Kjfm@discente.ifpe.edu.br',
			github: 'JoaoManoel01'
		},
		{
			showEmail: false,
			name: 'Ryon Lima',
			profile: 'RYON.jpg',
			email: 'rxl@discente.ifpe.edu.br',
			github: 'Ryonxl'
		},
		{
			showEmail: false,
			name: 'Caio Vinicius',
			profile: 'caio.png',
			email: 'cvsn@discente.ifpe.edu.br',
			github: 'Vini1227'
		}
	];
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<div class="container1">
	<HeaderComponent title="ABOUT US" />
	<main>
		<div class="profiles">
			{#each botoes as botao}
				<div class="profile">
					<div class="avatar"><img src="/Profile/{botao.profile}" alt={botao.name} /></div>
					<p>{botao.name}</p>
					<button
						id="btne5"
						on:click={() => {
							botao.showEmail = !botao.showEmail;
						}}>{botao.showEmail ? botao.email : 'EMAIL'}
					</button>
					<a href="https://github.com/{botao.github}" target="_blank">
						<button id="btng5">GITHUB</button>
					</a>
				</div>
			{/each}
		</div>
	</main>
	<footer>
		<img src="../img/logostech.png" alt="Tecnologias Utilizadas" />
	</footer>
</div>
