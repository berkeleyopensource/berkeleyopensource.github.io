<svelte:head>
	<title>Berkeley Open Source</title>
</svelte:head>

<script>
	import Projects from './Projects.svelte';
</script>

<main>
	<div class="heading">
		<div class="header"><a href="/"><h1>Open Source</h1><h2>at Berkeley</h2></a></div>
		<div class="navbar">
			<div class="navbar-link"><a href="/about">About</a></div>
			<div class="navbar-link"><a href="https://github.com/berkeleyopensource">Github</a></div>
		</div>
	</div>
	<div class="content">
		<section>
			<h2>Lorem ipsum dolor sit amet.</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue.</p>
		</section>
		<section>
			<h2>About Us</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue. Proin facilisis eleifend rutrum. Aenean accumsan nibh leo, laoreet auctor tellus luctus at. </p>
			<a href="/">Read More →</a>
		</section>
		<section>
			<h2>Projects</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue. Proin facilisis eleifend rutrum. Aenean accumsan nibh leo, laoreet auctor tellus luctus at. </p>
			<Projects/>
			<a href="/">View More →</a>
		</section>		
	</div>
	<div class="footing">
	</div>
</main>

<style>

	@import url('https://rsms.me/inter/inter.css');

	@keyframes fadeIn { 
		from { opacity: 0; } 
		to { opacity: 1; }
	}

	:global(body) {
		position: relative;
		height: auto;
		min-height: 100% !important;		
		margin:  0em;
		padding: 0em;
	}

	main {
		min-height: 100vh;
		margin: 0 auto;
		font-family: 'Inter', sans-serif;
		animation: fadeIn .2s ease-in-out;
	}

	h1 {
		font-size: 2em;
	}

	.heading {
		width: 100%;
		max-width: 1200px;
		padding: 1em 0;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.header {
		width: fit-content;
		letter-spacing: -0.05em;
		user-select: none;
		cursor: pointer;
	}

	.header a {
		text-decoration: none;
		color: inherit;
	}

	.header h1 {
		margin: 0;
		font-weight: 700;
	}

	.header h2 {
		margin: 0;
		margin-top: -0.4em;
		text-align: right;
		color: rgb(162, 162, 162);
		font-weight: 500;
	}
	
	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 1.2em;
	}

	.navbar .navbar-link {
		padding: 0.5em;
		vertical-align: middle;
	}

	.navbar .navbar-link a {
		color: rgb(70, 70, 70);
		transition: text-decoration .2s ease-in-out;
	}

	.content {
		max-width: 1200px;
		margin: auto;
	}

	.content section {
		max-width:  800px;
		margin: auto;
		font-size: 1.2em;
		min-height: 20vh;
		margin: 10vh auto;
	}

	.content section:first-of-type {
		height: 50vh;
		margin: auto;
		font-size: 1.5em;
		display: flex;
		flex-direction: column;
		justify-content: center;    
	}

	.footing {
		height: 5em;
		max-width: 1200px;
	}
</style>