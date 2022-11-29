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

<section>
	<h2>Seguro 🟢</h2>
	<div class="subitile">Pontos fortes do site buscado:</div>
	<ul>
		<li>Site ativo</li>
		<li>Possui HTTPS</li>
		<li>Criado em 06-10-1997 (9183 dias)</li>
	</ul>
</section>

Suspeito 🟡 <br>
Pontos suspeitos do site buscado: 
<br>

Não Seguro 🔴 <br>
Pontos não seguros do site buscado:


<div class="todo">
    ideia: mostrar quando o site 
</div>