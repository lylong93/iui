import React,{useRef,useEffect} from "react";
import * as THREE from 'three';
import * as dat from 'dat.gui';
import OrbitControls from 'three-orbitcontrols'
let has = false
var camera:any, scene:any, renderer:any;
var  bulbLight: any, bulbMat:any, hemiLight:any, stats:any;
var ballMat:any, cubeMat:any, floorMat:any,container:any;
var bulbLuminousPowers:any = {
  "110000 lm (1000W)": 110000,
  "3500 lm (300W)": 3500,
  "1700 lm (100W)": 1700,
  "800 lm (60W)": 800,
  "400 lm (40W)": 400,
  "180 lm (25W)": 180,
  "20 lm (4W)": 20,
  "Off": 0
};
 
// ref for solar irradiances: https://en.wikipedia.org/wiki/Lux
var hemiLuminousIrradiances:any = {
  "0.0001 lx (Moonless Night)": 0.0001,
  "0.002 lx (Night Airglow)": 0.002,
  "0.5 lx (Full Moon)": 0.5,
  "3.4 lx (City Twilight)": 3.4,
  "50 lx (Living Room)": 50,
  "100 lx (Very Overcast)": 100,
  "350 lx (Office Room)": 350,
  "400 lx (Sunrise/Sunset)": 400,
  "1000 lx (Overcast)": 1000,
  "18000 lx (Daylight)": 18000,
  "50000 lx (Direct Sun)": 50000
};

var params :any= {
  shadows: true,
  exposure: 0.68,
  routex:5,
  routey:0,
  routez:0,
  px:0,
  py:10,
  pz:0,
  bulbPower: Object.keys( bulbLuminousPowers )[ 4 ],
  hemiIrradiance: Object.keys( hemiLuminousIrradiances )[ 3 ]
};
  function animate() {

    requestAnimationFrame( animate );

    render();
  }
  function init() {
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
    camera.position.x = 0;
    camera.position.y = 13;
    camera.position.z = 10;
    // camera.lookAt({
    //   x: 0,
    //   y: 0,
    //   z: 0
    // })

    scene = new THREE.Scene();
    scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );

    scene.fog = new THREE.Fog( scene.background, 1, 5000 );
    // scene.background = new THREE.Color( 0xa0a0a0 );
    var bulbGeometry = new THREE.SphereBufferGeometry( 0.02, 16, 8 );
    bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 );

    bulbMat = new THREE.MeshStandardMaterial( {
      emissive: 0xffffee,
      emissiveIntensity: 1,
      color: 0x000000
    } );
    bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
    bulbLight.position.set( -6, 2, 0 );
    bulbLight.castShadow = true;
    scene.add( bulbLight );


    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    

    hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.02 );
    scene.add( hemiLight );

    floorMat = new THREE.MeshStandardMaterial( {
      roughness: 0.8,
      color: 0xffffff,
      metalness: 0.0,
      // bumpScale: 0.0005
    } );

    cubeMat = new THREE.MeshStandardMaterial( {
      roughness: 0.7,
      color: 0xffffff,
      bumpScale: 0.002,
      metalness: 0.2
    } );


    ballMat = new THREE.MeshStandardMaterial( {
      color: 0xffffff,
      roughness: 0.5,
      metalness: 1.0
    } );

    
    var floorGeometry = new THREE.PlaneBufferGeometry( 100,20,32,32);
    var floorMesh = new THREE.Mesh( floorGeometry, floorMat );
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = - Math.PI / 2.0;
    scene.add( floorMesh );

  
    var boxGeometry = new THREE.BoxBufferGeometry(1,1, 1);
  

    for(let i = -5;i<100;i++) {
      var boxMesh = new THREE.Mesh( boxGeometry, cubeMat );
      boxMesh.position.set( i*2, -0.4, 0 );
      boxMesh.castShadow = true;
      scene.add( boxMesh );

      var loader = new THREE.FontLoader();
    
      loader.load( '/font.json', function ( font ) {
        var geometry = new THREE.TextGeometry( `${i}`, {
            font: font,
            size: 0.5,
            height: 0.1,
            curveSegments: 1,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1
          } );
        var textMesh1 = new THREE.Mesh( geometry, cubeMat );
        textMesh1.position.set( i*2.13-0.2, 0.1 , 0 );
        textMesh1.rotation.set(-1.5,0,0);
        scene.add( textMesh1 );
      } );

    }
    
    renderer = new THREE.WebGLRenderer();
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
  
  


    var controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 1;
    controls.maxDistance = 20;
    
    // var gui = new dat.GUI();

    // gui.add( params, 'hemiIrradiance', Object.keys( hemiLuminousIrradiances ) );
    // gui.add( params, 'bulbPower', Object.keys( bulbLuminousPowers ) );
    // gui.add( params, 'exposure', 0, 1 );
    // gui.add( params, 'shadows' );
    // gui.add( params, 'routex' , 3, 9 );
    // gui.add( params, 'routey' , 0, 9 );
    // gui.add( params, 'routez' , 0, 9 );
    
    // gui.add( params, 'px' , 3, 9 );
    // gui.add( params, 'py' , 5, 20 );
    // gui.add( params, 'pz' , 0, 9 );

    // gui.open();
  }
  var previousShadowMap = false;

  let a  = -10
  let z  = 0
  let y = 0
  let ccc = 0


  let mypy = 13
  let nyroutey  = 5
  function render() {

    renderer.toneMappingExposure = Math.pow( params.exposure, 5.0 ); // to allow for very bright scenes.
    renderer.shadowMap.enabled = params.shadows;
    bulbLight.castShadow = params.shadows;
    if ( params.shadows !== previousShadowMap ) {

      ballMat.needsUpdate = true;
      cubeMat.needsUpdate = true;
      floorMat.needsUpdate = true;
      previousShadowMap = params.shadows;

  }
    bulbLight.power = bulbLuminousPowers[ params.bulbPower ];
    // bulbMat.emissiveIntensity = bulbLight.intensity / Math.pow( 0.02, 2.0 ); // convert from intensity to irradiance at bulb surface

    hemiLight.intensity = hemiLuminousIrradiances[ params.hemiIrradiance ];
    var time = Date.now() * 0.0005;
    // a++
    // console.log(Math.cos( time ) * 1.25 + 1.25)
    // if(y<5) {
    //   y= y+0.1
    // } 
    // if(y>5) {
    //   y = y-0.1
    // }
    bulbLight.position.y = y
    // bulbLight.position.y = 1.4949800400269815
    a = a+0.1
    if(a>10) {
      a=-10
    }
    z = z +0.1
    mypy = mypy +0.03
    nyroutey = nyroutey+0.0005
    // ccc = ccc+ 0.01
    bulbLight.position.x  =  a
    // camera.position.z = 1

    // camera. rotation.x= nyroutey
    // camera. rotation.y= params.routey
    // camera. rotation.z= params.routez

    // camera.position.x = params.px
    // camera.position.y = mypy
    // camera.position.z = params.pz

    renderer.render( scene, camera );
  }
const  Gl = () =>  {
    const El = useRef(null);

    useEffect(()=>{
     
       container = document.getElementById('container');
       
       if(!has) {
         has  =true
        init();
        animate();
       }
       
    })
    return (
        <div ref={El} id='container'></div>
    )
} 

export default Gl