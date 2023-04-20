<style>
    .main{
        width: 100%;
        height: 100%;
        border-radius: 2em;
        flex-direction: row;
        padding-left: 2em;
        margin: 0;
        color: white;
        justify-content: space-around;
    }
    .title-table{
        border-bottom: 3px solid white;
        border-radius: 2em;
        font-family: 'Times New Roman', Times, serif;
        font-size: 24px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
        color: red;
        background: black;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
    .container > div {
        flex: 1;
        margin: 0 10px;
    }
    .left, .right , .center{
        background-color: #333;
        justify-content: center;
        height: 40em;
        font-family: cursive;
        padding-top: 2em;
    }
    .center{
        display: grid;
    }
    .tab-center{
        width: 25em;
        height: 15em;
        background-color: #555;
        
    }
    history{
        font-size: 40px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color: #555;
    }
</style>
<table class="main" >
    <caption class="title-table">
        <li>R</li>
        <li>E</li>
        <li>D</li>
        <li>M</li>
        <li><img src="../src/images/redmoon.jpg" width="45px" alt=""></li>
        <li>O</li>
        <li>N</li>
    </caption>
</table>
<div class="container">
    <div class="left">
        <history>History</history>
        <div>aaaa</div>
    </div>
    <div class="center">
        <div class="tab-center">
            b
        </div>
        <div class="tab-center">
            b
        </div>
    </div>
    <div class="right">
        a
    </div>
</div>