<script>
	import { creationDate } from '$lib/formatCreationDate';
	import Logo from '$lib/Logo.svelte';
</script>

<main>
	<Logo />

	<form action="result" method="post">
		<input inputmode="url" name="site" id="site" />
		<button type="submit">Verificar</button>
	</form>

	<div class="result">
		<section>
			<h2>Seguro 🟢</h2>
			<div class="subitile">Pontos fortes do site buscado:</div>
			<ul>
				<li>Site ativo</li>
				<li>Possui HTTPS</li>
				<li>Criado em 06-10-1997 (9183 dias)</li>
				<li>{creationDate(new Date(1997, 10 - 1, 6))}</li>
			</ul>
		</section>

		<section>
			<h2>Suspeito 🟡</h2>
			<div class="subitile">Pontos suspeitos do site buscado:</div>
			<ul>
				<li>sus</li>
			</ul>
		</section>

		<section>
			<h2>Não Seguro 🔴</h2>
			<div class="subitile">Pontos não seguros do site buscado:</div>
			<ul>
				<li>xii</li>
			</ul>
		</section>
	</div>
</main>

<style>
	main {
        position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
        min-height: 100vh;
	}

	form {
		min-height: 48px;
		display: flex;
		flex-direction: column;
		gap: 2em;
		align-items: center;
	}

	input,
	button {
		border: none;
		border-radius: 8px;
		color: white;
		background-color: rgba(144, 88, 255, 1);
	}

	input {
		padding: 0.4em;
		font-size: 1.6em;
	}

	button {
		font-size: 1.6em;
		height: 2em;
		padding: 0.2rem;
	}
</style>
