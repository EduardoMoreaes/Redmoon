function templateSelector(faceIndex) {
    var face = faceIndex;
    switch (face) {
        case 0 || 1:
            document.getElementById("container").innerHTML = `	<link rel='stylesheet' href='/templates/chaos.css'>`
            
            break;
        case 2 || 3:
            document.getElementById("container").innerHTML = `	<link rel='stylesheet' href='/templates/chaos.css'>`
            
            break;
        case 4 || 5:
            document.getElementById("container").innerHTML = `	<link rel='stylesheet' href='/templates/chaos.css'>`
            
            break;
        case 6 || 7:
                document.getElementById("container").innerHTML = `	<link rel='stylesheet' href='/templates/chaos.css'>`
                
                break;
        case 8 || 9:
                document.getElementById("container").innerHTML = `	<link rel='stylesheet' href='/templates/chaos.css'>`
                
                break;
        case 10 || 11:
                document.getElementById("container").innerHTML = `	<link rel='stylesheet' href='/templates/chaos.css'>`
                
                break;
        
        default:
            break;
    }

}

export default templateSelector;