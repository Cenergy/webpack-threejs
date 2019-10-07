import * as dat from "dat.gui";
import * as Stats from "stats.js";
import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//声明一些全局变量
let renderer,
  camera,
  scene,
  stats,
  controls,
  gui,
  rotate = true;
//声明一些几何体模型变量
let box, circle, cone, cylinder, sphere, plane, torus;
const appWidth = window.innerWidth * 0.79;
const appHeight = window.innerHeight;
const app = document.getElementById("app");
//初始化渲染器
function initRenderer() {
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
  camera.position.set(0, 0, 150);
}
//创建模型
function initMesh() {
  var material = new THREE.MeshNormalMaterial();
  //创建立方体
  box = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), material);
  box.position.set(-50, 20, 0);
  scene.add(box);
  //创建圆
  circle = new THREE.Mesh(new THREE.CircleGeometry(5, 32), material);
  circle.position.set(-20, 20, 0);
  scene.add(circle);
  //创建圆锥
  cone = new THREE.Mesh(new THREE.ConeGeometry(5, 20, 32), material);
  cone.position.set(20, 20, 0);
  scene.add(cone);
  //创建圆柱
  cylinder = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 20, 32), material);
  cylinder.position.set(50, 20, 0);
  scene.add(cylinder);
  //创建球
  sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32), material);
  sphere.position.set(-35, -20, 0);
  scene.add(sphere);
  //创建平面
  plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
  plane.position.set(0, -20, 0);
  scene.add(plane);
  //创建圆环
  torus = new THREE.Mesh(new THREE.TorusGeometry(10, 3, 16, 4), material);
  torus.position.set(35, -20, 0);
  scene.add(torus);
}
//运行动画
var step = 0; //记录旋转的角度
function animate() {
  requestAnimationFrame(animate); //循环调用函数
  //判断是否可以旋转
  if (rotate) {
    step += 0.02;
    //设置每一个模型的转向
    box.rotation.set(step, step, step);
    circle.rotation.set(step, step, step);
    cone.rotation.set(step, step, step);
    cylinder.rotation.set(step, step, step);
    sphere.rotation.set(step, step, step);
    plane.rotation.set(step, step, step);
    torus.rotation.set(step, step, step);
  }
  stats.update(); //更新性能检测框
  renderer.render(scene, camera); //渲染界面
}
//性能检测框
function initStats() {
  stats = new Stats();
  app.appendChild(stats.dom);
}
//创建调试框
function initGui() {
  controls = {
    rotate: true
  };
  gui = new dat.GUI();
  console.log("Go: initGui -> gui", dat.GUI);
  gui
    .add(controls, "rotate")
    .name("旋转")
    .onChange(function(e) {
      rotate = e;
    });
}

export default function second() {
  var stats = new Stats();
  console.log("Go: second -> stats", stats);

  // const gui = new dat.GUI();
  // console.log("Go: second -> gui", gui);

  $("#app").empty();
  initRenderer();
  initScene();
  initCamera();
  initMesh();
  initStats();
  initGui();
  animate();
}
