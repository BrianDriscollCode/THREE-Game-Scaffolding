import * as THREE from 'three';
import * as characterController from "./movement/characterController.js"
import { Box2, BoxGeometry } from 'three';

class Player {

    createCharacter = () => {

        const body = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshLambertMaterial({
            color: '#F1B21F'
        });
        const box1 = new THREE.Mesh(body, material);
        box1.position.y += 2;

        return box1;
    }

    connectController = (window) => {
        
        let move = characterController.default.move
        
        return move;

    }

}

export default Player