<script>
	import Cookies  from "js-cookie";
	export let user;

</script>

<main>
		<canvas id="cnv" class="given" width="1000" height="700"></canvas>
</main>

<style>
	main {
		text-align: center;
		padding: 0px;
		margin: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to top, black, green);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
