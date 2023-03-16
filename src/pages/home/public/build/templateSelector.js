function templateSelector(faceIndex) {
    var face = faceIndex;
    switch (face) {
        case 0:
        case 1:
            document.getElementById("container").innerHTML += `	<link rel='stylesheet' href='/templates/chaos.css'>`
            
            break;
        case 2: 
        case 3:
            document.getElementById("container").innerHTML += `	<link rel='stylesheet' href='/templates/chaos.css'>`
            
            break;
        case 4: 
        case 5:
            document.getElementById("container").innerHTML += `	<link rel='stylesheet' href='/templates/chaos.css'>`
            
            break;
        case 6: 
        case 7:
                document.getElementById("container").innerHTML += `	<link rel='stylesheet' href='/templates/chaos.css'>`
                
                break;
        case 8: 
        case 9:
                document.getElementById("container").innerHTML += `	<link rel='stylesheet' href='/templates/chaos.css'>`
                
                break;
        case 10:
        case 11:
                document.getElementById("container").innerHTML += `	<link rel='stylesheet' href='/templates/chaos.css'>`
                
                break;
        
        default:
            templateSelector(face)
            break;
    }
}

export default templateSelector;