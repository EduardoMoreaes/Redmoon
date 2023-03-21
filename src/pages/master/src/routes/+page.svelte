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
    .row{
        height: 22em;
        max-height: 22em;
    }
    .col{
        background-color: transparent;
        padding: 2em;
    }
    .one {
        width: 20%;
        height: 15%;
        justify-content: center;
    }
    .item-image, .border-image{
        height: 15em;
        max-width: 15em;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 15em;
    }
    .item-image{
        background-image: url(../images/profile.png);
    }
    .border-image{
        background-image: url(../images/border.png);
    }
   
    .upload-image{
        display: flex;
        justify-content: space-around;
        font-family: cursive;
        font-size: 2rem;
    }

    input[type="file"] {
       display: none;
    }
      
    .file{
        width: 1em;
        height: 1em;
        color: #fff;
        border: none;
        cursor: pointer;
        background-repeat: no-repeat;
        background-image: url(../images/upload.png);
    }
      
    .file:focus {
        outline: none;
    }
    
</style>
<table class="main" >
    <caption class="title-table">
        <li>R</li>
        <li>E</li>
        <li>D</li>
        <li>M</li>
        <li>O</li>
        <li>O</li>
        <li>N</li>
    </caption>
    <tr class="row">
        <td class="col one">
            <div class="border-image">
                <div class="item-image"></div>
                <div class="upload-image">
                    username
                    <form action="/upload" method="post" enctype="multipart/form-data">
                        <input class="file" type="file" name="profile" id="file">
                        <label for="file" class="file">
                            <img class="file" src="https://cdn-icons-png.flaticon.com/512/8563/8563502.png" alt="" srcset="">
                        </label>
                    </form>
                </div>
            </div>
        </td>
        <td class="col">Section</td>
        <td class="col">Init Section</td>
    </tr>
    <tr class="row">
        <td class="col">
            Monster/NPC
        </td>
        <td class="col">
            Mechanics
        </td>
    </tr>
</table>