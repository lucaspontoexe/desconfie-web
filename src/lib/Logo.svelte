<script>
	import image from '$lib/assets/desconfie_logo.png';
</script>

<div class="logo">
	<h1>DESCONFIE</h1>
	<img src={image} alt="logo desconfie" />
</div>


<style>
.logo {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* height: 100%; */
    gap: 10px;
}

h1 {
    font-family: 'Inter','Roboto', sans-serif;
    /* font-size: 3rem; */
    color: rgba(144, 88, 255, 1);
}
</style>