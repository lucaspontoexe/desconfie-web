<script lang="ts">
	import { database, type resultObject } from '$lib/database';
	import Logo from '$lib/Logo.svelte';

	let result: resultObject = {exists: false, secure: [], sus: [], not_secure: []};

	function handleSubmit(event: SubmitEvent) {
		const fd = new FormData(event.target as HTMLFormElement);
        // check website
        result = database["" + fd.get('site')] || null;
	}

</script>

<main>
	<!-- eu realmente queria poder testar o sveltekit pra isso, mas o tempo demanda gambiarra. -->
	<!-- preciso dormir. -->
	<form action="#" on:submit|preventDefault={handleSubmit}>
		<Logo />
		<input
			inputmode="url"
			autocomplete="off"
			autocorrect="off"
			autocapitalize="off"
			spellcheck="false"
			name="site"
			id="site"
		/>
		<button type="submit">Verificar</button>
	</form>

	{#if result?.exists}
		<div class="result">
			<section class="sub-result">
				<h2>Seguro 🟢</h2>
				<div class="subtitle">Pontos fortes do site buscado:</div>
				<ul>
					{#each result?.secure as item}
                        <li>{item}</li>
                    {/each}
				</ul>
			</section>

			<section class="sub-result">
				<h2>Suspeito 🟡</h2>
				<div class="subtitle">Pontos suspeitos do site buscado:</div>
				<ul>
					{#each result?.sus as item}
                        <li>{item}</li>
                    {/each}
				</ul>
			</section>

			<section class="sub-result">
				<h2>Não Seguro 🔴</h2>
				<div class="subtitle">Pontos não seguros do site buscado:</div>
				<ul>
					{#each result?.not_secure as item}
                        <li>{item}</li>
                    {/each}
				</ul>
			</section>
		</div>
	{/if}
	{#if result === null}
		<div class="noresult">
			Não há informações sobre o site pesquisado. <br />Tente novamente.
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

	.noresult {
		background-color: rgba(144, 88, 255, 1);
		color: white;
		border-radius: 10px;
		padding: 3em;
		margin: 2em;
		text-align: center;
	}
</style>
