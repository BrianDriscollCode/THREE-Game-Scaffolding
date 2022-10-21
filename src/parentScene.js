import './style.css';
import * as THREE from 'three';
import { CubeCamera } from 'three';

//Helpers
import characterFactory from './characterHelper/characterFactory';
import characterMovement from './characterHelper/characterMovement';

//Scenes
import initScene1 from "./scene1";
import initScene2 from "./scene2";

let button;
let titleText;
let currentScene = initScene1();
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

//character controller
let characterController = characterMovement();

const handleMovementInput = () => {
 
    document.addEventListener("keydown", (event) => {

        characterController.controller(event)

    }, true)
}

let character = characterFactory
character.createCharacter(currentScene.scene)

function animate() {

    handleMovementInput();
    currentScene.animateProp();

    requestAnimationFrame( animate )
    currentScene.renderer.render(currentScene.scene, currentScene.camera)
}

animate();