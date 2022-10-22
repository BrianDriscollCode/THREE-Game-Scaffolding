import './style.css';
import * as THREE from 'three';
import { CubeCamera } from 'three';

// //Helpers
import movementConnector from './player/helper/movement_connector';
// import characterFactory from './characterHelper/characterFactory';
// import characterMovement from './characterHelper/characterMovement';

//Scenes
import initScene1 from "./scenes/scene1";
import initScene2 from "./scenes/scene2";

let button;
let titleText;
let sceneIndex = 2;

const init = () => {

    //Title
    titleText = document.querySelector('.title')
    titleText.innerHTML = "Scene - 1"

    //initialize button and text
    button = document.querySelector('.button');
    button.addEventListener('click', () => {
        if (sceneIndex === 1) {
            currentScene = initScene1();
            sceneIndex = 2;
            titleText.innerHTML = "Scene - 1"
        } else {
            currentScene = initScene2();
            sceneIndex = 1;
            titleText.innerHTML = "Scene - 2"
        }
    })
}

init();

let currentScene = initScene1();
let movementConnectorClass = new movementConnector;

function animate() {
    currentScene.animateProp();
    //currentScene.player.position.x += 0.01;

    document.addEventListener('keydown', (event) => {
        //console.log('event ran')
        let coordinate = movementConnectorClass.controllerInput(event)
        
        if (coordinate === undefined) {
            coordinate = 'none';
        }

        console.log(coordinate)
        currentScene.playerAnimateProp(coordinate);

    }) 

    

    requestAnimationFrame( animate )
    currentScene.renderer.render(currentScene.scene, currentScene.camera)
}

animate();