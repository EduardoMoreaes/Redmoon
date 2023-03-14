<script>
	import Cookies  from "js-cookie";
	
</script>

<main>

	<div class="login">
		<div id="information" class="information">
			<p>Email:</p>
			<input type="email" name="email" placeholder="exemple@gmail.com"> <br>
			<p>Password</p>
			<input type="password" name="password" id="passwordID" placeholder="********">
		</div>
		<div class="options">
			<p>esqueci minha senha</p>
			<p>cadastrar</p>
			<p>entrar</p>
		</div>
	</div>

</main>

<style>
	main {
		text-align: center;
		padding: 0px;
		margin: 0;
		width: 100%;
		height: 100%;
	}

	
	.login{
		text-align: left;
		width: 20em;
		height: 25em;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
