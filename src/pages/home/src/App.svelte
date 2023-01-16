<script>
	export let user;
	function roll() {
		alert("rolou dado");
	}
</script>

<main>
	<div id="given" class="given" on:click={roll}></div>
</main>

<style>
	main {
		text-align: center;
		padding: 0px;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.given{
		width: 25em;
		height: 25em;
		background-color: black;
	}
</style>
