import React,{useRef,useEffect} from "react";
import * as THREE from 'three';
import * as dat from 'dat.gui';
import OrbitControls from 'three-orbitcontrols'
let has = false
var camera:any, scene:any, renderer:any,light:any,sphere:any,water:any,controls:any;
var bulbLight: any, bulbMat:any, hemiLight:any, stats:any;
var ballMat:any, cubeMat:any, floorMat:any,container:any;

let uniforms = {
  // 传递的颜色属性
  color: {
      type: 'v3', // 指定变量类型为三维向量
      value: new THREE.Color('red')
  },
  time: { type:'f',value: 1 },
};


var VSHADER_SOURCE :any=`
uniform float time;
varying vec3 a_position;
varying vec2 vUv;
void main(){
    vUv = uv;
    a_position = position;
    vec3 posChange = position;
    posChange.x = posChange.x;
    posChange.y = (3.0+posChange.y)*(2.0*abs(tan(time*1.0)));
    posChange.z = posChange.z;

    gl_Position =  projectionMatrix * modelViewMatrix * vec4(posChange,1.0);
}
`

var FRAGMENT_SOURCE :any=`
varying vec2 vUv;
uniform float time;
varying vec3 a_position;
void main(){
  gl_FragColor = vec4(vUv.x*cos(time*10.0),vUv.y,0.6,1.0);  //用定点UV赋值颜色
}
`

function init() {
  
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 10;

    scene = new THREE.Scene();
    scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );

    // var bulbGeometry = new THREE.SphereBufferGeometry( 0.02, 16, 8 );
    // bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 );

    // bulbMat = new THREE.MeshStandardMaterial( {
    //   emissive: 0xffffee,
    //   emissiveIntensity: 1,
    //   color: 0x000000
    // } );

    // bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
    // // bulbLight.position.set( -6, 2, 0 );
    // bulbLight.castShadow = true;
    // scene.add( bulbLight );

    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.02 );
    scene.add( hemiLight );


  // uniforms: {
  //   time: { type:'f',value: 1 },
  // },

    cubeMat = new THREE.ShaderMaterial( {
      
      uniforms: uniforms,
      // // 获取顶点着色器代码
      vertexShader: VSHADER_SOURCE,
      // // 获取片元着色器代码
      fragmentShader: FRAGMENT_SOURCE,
      // // 渲染粒子时的融合模式
      // // 关闭深度测试
      // depthTest: false,
      // // 开启透明度
      // transparent: true

      // roughness: 0.7,
      // color: 0xffffff,
      // bumpScale: 0.002,
      // metalness: 0.2
      // wireframe:true
    } );


    var boxGeometry = new THREE.BoxBufferGeometry(1,1,1);
  
    var boxMesh = new THREE.Mesh( boxGeometry, cubeMat );
    boxMesh.position.set( 2, -0.4, 0 );
    boxMesh.castShadow = true;
    scene.add( boxMesh );



    var meshBox3 = new THREE.Box3();

    // meshBox3.expandByObject(boxMesh);

    //计算模型的中心点坐标，这个为爆炸中心
    // var modelWorldPs = new THREE.Vector3().addVectors(meshBox3.max, meshBox3.min).multiplyScalar(0.5);

    // boxMesh.traverse(function (value:any) {
    //   console.log(value.position)
    //     // if(value.isMesh){
    //         // console.log(meshBox3.setFromObject(value))

    //         //获取每个mesh的中心点，爆炸方向为爆炸中心点指向mesh中心点
    //         // var worldPs = new THREE.Vector3().addVectors(meshBox3.max, meshBox3.min).multiplyScalar(0.5);
    //         // console.log(meshBox3)
    //         // if(isNaN(worldPs.x))return;
    //         //计算爆炸方向
    //         // value.worldDir = new THREE.Vector3().subVectors(worldPs, modelWorldPs).normalize();
    //         //保存初始坐标
    //         value.userData.oldPs = value.getWorldPosition(new THREE.Vector3())
    //         // value.position.copy(new THREE.Vector3(1,1,2))
    //     // }
    // });


    renderer = new THREE.WebGLRenderer();
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
  
  


    var controls = new OrbitControls( camera, renderer.domElement );
    // controls.minDistance = 1;
    // controls.maxDistance = 20;
}


function render() {
  renderer.render( scene, camera );
}

function animate() {

    requestAnimationFrame( animate );
    uniforms.time.value +=0.005
    render();
  }

  
const  Water = () =>  {
    const El = useRef(null);

    useEffect(()=>{
     
      container = document.getElementById('container');
       
      init();
      animate();
      
    })
    return (
        <div ref={El} id='container'></div>
    )
} 

export default Water