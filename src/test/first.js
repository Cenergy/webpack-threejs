import * as THREE from "three";

//声明一些全局变量
let renderer, camera, scene, geometry, material, mesh;
const appWidth = window.innerWidth * 0.79;
const appHeight = window.innerHeight;

//初始化渲染器
function initRenderer() {
  const app = document.getElementById("app");
  const canvas = app.getElementsByTagName("canvas");

  renderer = new THREE.WebGLRenderer(); //实例化渲染器
  renderer.setSize(appWidth, appHeight); //设置宽和高

  app.appendChild(renderer.domElement); //添加到dom
}

//初始化场景
function initScene() {
  scene = new THREE.Scene(); //实例化场景
}

//初始化相机
function initCamera() {
  camera = new THREE.PerspectiveCamera(45, appWidth / appHeight, 0.1, 200); //实例化相机
  camera.position.set(0, 0, 15);
}

//创建模型
function initMesh() {
  geometry = new THREE.BoxGeometry(2, 2, 2); //创建几何体
  material = new THREE.MeshNormalMaterial(); //创建材质
  mesh = new THREE.Mesh(geometry, material); //创建网格
  scene.add(mesh); //将网格添加到场景
}

//运行动画
function animate() {
  requestAnimationFrame(animate); //循环调用函数
  mesh.rotation.x += 0.01; //每帧网格模型的沿x轴旋转0.01弧度
  mesh.rotation.y += 0.02; //每帧网格模型的沿y轴旋转0.02弧度
  renderer.render(scene, camera); //渲染界面
}

export default function first() {
  $("#app").empty();
  initRenderer();
  initScene();
  initCamera();
  initMesh();
  animate();
}
