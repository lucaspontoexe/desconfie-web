<script>
	import image from '$lib/assets/desconfie_logo.png';
</script>

<div class="logo">
	<h1>DESCONFIE</h1>
	<img src={image} alt="logo desconfie" />
</div>


<style>
.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8rem;
    gap: 2em;
}

h1 {
    font-family: 'Inter','Roboto', sans-serif;
    font-size: 4rem;
}
</style>