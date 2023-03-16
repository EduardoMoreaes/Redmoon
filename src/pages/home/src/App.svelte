

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

	.login{
		animation: ika 0.1s forwards;
	}
	.title{
		font-size: xx-large;
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
		padding-top: 1.2em;
        text-align: center;
	}
	.email, .password{
		background-color: transparent;
		width: 80%;
        display: flex;
        margin-bottom: 20px;
        padding: 5px;
        border-bottom: 1px solid #333;
	}
    .title-input{
		width: 12%;
    }
    .input{
		width: 88%;
        height: 30px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: large;
        border-color: transparent;
        background-color: transparent;
        color: rgb(80, 0, 0);
    }
    .input:focus{
		border-color: transparent;
        outline: none;
    }
    .input:focus::placeholder{
		color: transparent;
    }
    .input::placeholder{
		font-style: italic;
        font-family: 'Courier New', Courier, monospace;
    }
	
    .buttons{
		display: flex;
        align-items: center;
        text-align: center;
        width: 100%;
    }
    .login-button, .logup-button{
		width: 35%;
        margin-left: 2em;
        margin-top: 5em;
        height: 2em;
        border-color: transparent;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1em;
        color: black;
        background-color: rgb(124, 0, 0);
    }
	
    .login-button{
		border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .logup-button{
		border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
	
    .logup-button:hover, .login-button:hover{
		color: gold;
    }

    .password-lost{
		font-size: 12px;
        color: black;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	</style>

<script src="../public/templates/teste.js"></script>
<main id="main">
		<div class="login">
			<div class="title">
				<h3>LOG IN</h3>
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
				<a href="http://" class="password-lost">forgot password</a>
                <div class="buttons">
                    <button on:click={logup} class="logup-button">Log up</button>
                    <button type="submit" class="login-button">Log in</button>
                </div>
			</div>
		</div>
</main>
