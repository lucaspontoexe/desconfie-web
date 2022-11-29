<script>
	import Logo from '$lib/Logo.svelte';
</script>

<main>
	<Logo />

	<form action="result" method="post">
		<input type="url" name="site" id="site" />
		<button type="submit">Verificar</button>
	</form>
</main>

<div class="result">
    <section>
        <h2>Seguro 🟢</h2>
        <div class="subitile">Pontos fortes do site buscado: </div>
        <ul>
            <li>Site ativo</li>
            <li>Possui HTTPS</li>
            <li>Criado em 06-10-1997 (9183 dias)</li>
        </ul>
    </section>

    <section>
        <h2>Suspeito 🟡</h2>
        <div class="subitile">Pontos suspeitos do site buscado: </div>
        <ul>
            <li>sus</li>
        </ul>
    </section>

    <section>
        <h2>Não Seguro 🔴</h2>
        <div class="subitile">Pontos não seguros do site buscado: </div>
        <ul>
            <li>xii</li>
        </ul>
    </section>
</div>