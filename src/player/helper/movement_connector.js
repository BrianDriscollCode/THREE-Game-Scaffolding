//This event key press tracker is used to connect 
//the CurrentScene.js -> playerAnimateProp(COORDINATE_TYPE) 
//**Helps fulfill the event step for controller to current scene */


class movementConnector {

    trackPlayerPress = () => {

    }

    controllerInput(event) {

        //console.log('controller')

        switch (event.key) {
            case 'x':
                return 'x';
                break
            case 'a':
                return 'a';
                break
        }


    }

    
}

export default movementConnector

