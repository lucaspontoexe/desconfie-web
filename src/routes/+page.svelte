<script>
	import { creationDate } from '$lib/formatCreationDate';
	import Logo from '$lib/Logo.svelte';

	let has_result = true;
</script>

<main>
    <!-- eu realmente queria poder testar o sveltekit pra isso, mas o tempo demanda gambiarra. -->
    <!-- preciso dormir. -->
	<form action="#" >
		<Logo />
		<input inputmode="url" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" name="site" id="site" />
		<button type="submit">Verificar</button>
	</form>

	{#if has_result}
		<div class="result">
			<section class="sub-result">
				<h2>Seguro 🟢</h2>
				<div class="subtitle">Pontos fortes do site buscado:</div>
				<ul>
					<li>Site ativo</li>
					<li>Possui HTTPS</li>
					<li>Criado em 06-10-1997 (9183 dias)</li>
					<li>{creationDate(new Date(1997, 10 - 1, 6))}</li>
				</ul>
			</section>

			<section class="sub-result">
				<h2>Suspeito 🟡</h2>
				<div class="subtitle">Pontos suspeitos do site buscado:</div>
				<ul>
					<li>sus</li>
				</ul>
			</section>

			<section class="sub-result">
				<h2>Não Seguro 🔴</h2>
				<div class="subtitle">Pontos não seguros do site buscado:</div>
				<ul>
					<li>xii</li>
				</ul>
			</section>
		</div>
	{/if}
</main>

<style>
	:global(body) {
		background-color: rgb(222, 205, 255);
	}

	main {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	form {
		width: 90vw;
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
		width: 100%;
        max-width: 720px;
	}

	button {
		font-size: 1.6em;
		padding: 0.5em 1em;
	}

	h2 {
		margin-bottom: 0.6em;
	}

	.subtitle {
		font-size: 0.8rem;
	}

	ul {
		background-color: rgba(144, 88, 255, 1);
		color: white;
		padding: 2em;
		border-radius: 10px;
	}

	.result section:not(:last-child) {
		margin-bottom: 2em;
	}
</style>
