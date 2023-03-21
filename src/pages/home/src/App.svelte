

<style>
    body{
		opacity: 0;
		animation: template 2s forwards;
    }
	main {
		opacity: 0;
		padding: 0px;
		margin: 0;
		width: 100%;
		height: 100%;
		animation: template 2s forwards;
	}

	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	</style>

<script src="../public/templates/loginup.js"></script>
<main id="main">
		<div class="login">
			<div class="title">
				<h3>LOG UP</h3>
			</div>
			<div id="information" class="information">
				<div class="email">
					<img class="title-input" src="../Images/icons/userName3.png" alt="">
					<input class="input" type="text" name="userName" placeholder="username"> <br>
				</div>
				<div class="password">
					<img class="title-input" src="../Images/icons/password3.png" alt="">
					<input class="input" type="password" name="password" id="passwordID" placeholder="password">
				</div>
			</div>
			<div class="options">
				<a href="http://" class="password-lost">forgot password?</a>
                <div class="buttons">
                    <button on:click={logup} class="logup-button">Log in</button>
                    <button type="submit" class="login-button">Log up</button>
                </div>
			</div>
		</div>
</main>
