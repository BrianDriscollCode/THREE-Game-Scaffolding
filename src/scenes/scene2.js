import * as THREE from "three"
import Player from "../player/player";

function initScene2() {

    // Scene
    const scene = new THREE.Scene()

    //Player 
    let createPlayer = new Player();
    let player = createPlayer.createCharacter();
    scene.add(player);
    let playerController = createPlayer.connectController();

    // Object setup
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshLambertMaterial({ 
        color: '#F1B21F' 
    })

    //Shapes
    const box1 = new THREE.Mesh(boxGeometry, material)

    //Group 
    const group1 = new THREE.Group();
    group1.add( box1 )
    scene.add(group1);

    //light
    const light = new THREE.AmbientLight( 0x404040 )
    scene.add( light )
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight );

    // Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    

    //Dynamically Resize
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    //Camera Group
    const cameraGroup = new THREE.Group()
    scene.add(cameraGroup)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 6
    cameraGroup.add(camera)

    const canvas = document.querySelector('canvas.webgl')

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })

    renderer.setSize(sizes.width, sizes.height)

     // Inserted into the animate function in CurrentScene.js
     const animateProp = () => {

    }

    const playerAnimateProp = (coordinateType) => {
        playerController(coordinateType, player) //player movement
    }


    return {scene, renderer, camera, player, animateProp, playerAnimateProp}

}

export default initScene2
