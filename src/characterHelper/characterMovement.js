function characterMovement() {

    const controller = (keycode, character) => {
        switch(keycode.code) {
            case "KeyW": 
                console.log("W");
                break;
            case "KeyS":
                console.log("S")
                break;
            case "KeyA": 
                console.log("A");
                break;
            case "KeyD":
                console.log("D");
                break;
            default: 
                break;
        } 
    
    }

    return { controller }

}

export default characterMovement
