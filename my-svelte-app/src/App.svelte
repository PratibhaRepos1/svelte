<script>
	 let name = 'Svelte';
	 let imgPath = 'https://envato-shoebox-0.imgix.net/5710/7d78-3c52-41c9-9fcd-b41802d24426/181452150.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=9de013fc355c485fe916ecf47d3507f7';

</script>

<main>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={imgPath} height="200px" width="200px" />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
h1 {
	color: red;
}
</style>