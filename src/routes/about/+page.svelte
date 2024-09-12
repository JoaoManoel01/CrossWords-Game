<script lang="ts">
	import '../../styles/about.css';
	import HeaderComponent from '../../components/headerComponent/HeaderComponent.svelte';

	const botoes = [
		{
			showEmail: false,
			name: 'João Manoel',
			profile: '/Profile/joao.png',
			email: 'jmlcr@discente.ifpe.edu.br'
		},
		{
			showEmail: false,
			name: 'Guilherme Matheus',
			profile: '/Profile/guilherme.png',
			email: 'Gmfs1@discente.ifpe.edu.br'
		},
		{
			showEmail: false,
			name: 'Kauã José',
			profile: '/Profile/kaua.png',
			email: 'email3@example.com'
		},
		{
			showEmail: false,
			name: 'Ryon Lima',
			profile: '/Profile/RYON.jpg',
			email: 'rxl@discente.ifpe.edu.br'
		},
		{
			showEmail: false,
			name: 'Caio Vinicius',
			profile: '/Profile/caio.png',
			email: 'cvsn@discente.ifpe.edu.be'
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
					<div class="avatar"><img src={botao.profile} alt={botao.name} /></div>
					<p>{botao.name}</p>
					<button
						id="btne5"
						on:click={() => {
							botao.showEmail = !botao.showEmail;
						}}>{botao.showEmail ? botao.email : 'EMAIL'}</button
					>
					<button id="btng5">GITHUB</button>
				</div>
			{/each}
		</div>
	</main>
	<footer>
		<img src="../img/logostech.png" alt="Tecnologias Utilizadas" />
	</footer>
</div>
