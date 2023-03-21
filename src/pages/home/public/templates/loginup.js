function logup(){
    document.getElementById('main').innerHTML = `
    <div class="logup">
        <div class="title">
            <h3>LOG IN</h3>
        </div>
        <div id="information" class="information">
            <div class="row">
                <div class="col">
                    User:<br>
                    <input class="register" id="new_nick" type="text" placeholder="Ex: user193">
                </div>
                <div class="col">
                    Email:<br>
                    <input class="register" id="new_email" type="email" placeholder="exemple@exemple.com">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Password: <br>
                    <input class="register" id="new_password" type="password">
                </div>
                <div class="col">
                    Confirm password:<br>
                    <input class="register" id="new_password" type="password">
                </div>
            </div>
            <div class="terms">
                    <input class="register-term" id="terms" type="checkbox">
                    i read and concord with <a href="../terms/terms.html" target="_blank">terms of privacy.</a>
            </div>
        </div>
        <div class="options">
            <div class="buttons-up">
                <button onclick="login()" class="login-button-up">Log up</button>
                <button type="submit" class="logup-button-up">Log in</button>
            </div>
        </div>
    </div>`;       
}
function login() {
    document.getElementById("main").innerHTML = `<div class="login">
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
            <button onclick="logup()" class="logup-button">Log up</button>
            <button type="submit" class="login-button">Log up</button>
        </div>
    </div>
</div>`;
}