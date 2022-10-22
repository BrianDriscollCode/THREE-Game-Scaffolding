function characterController () {
    
    const move = (coordinateType, playerBody) => {
        switch (coordinateType) {
            case 'X':
                playerBody.position.x += 0.01
                console.log('X');
                break;
            case 'Y':
                console.log('Y');
                break;
            case 'Z':
                console.log('Z');
                break;
            default:
                break;
        }
    
    }

    return { move }

}

export default characterController();