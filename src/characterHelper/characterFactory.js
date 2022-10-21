import * as THREE from "three"

function characterFactory() {

    const createCharacter = (scene) => {
        const boxGeometry = new THREE.BoxGeometry(0.5,0.5,0.5)
        const material = new THREE.MeshLambertMaterial({
            color: '#F1B21F'
        })

        const character = new THREE.Mesh(boxGeometry, material)
        scene.add(character)
        character.position.z += 3
    }

    return { createCharacter }
}

export default characterFactory();