"use strict";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  PCFShadowMap,
  Color,
} from "three";

import { OrbitControls } from "three-example/jsm/controls/OrbitControls.js";

export const Engine = ({
  border = false,
  fullScreen = true,
  isOrbitController = true,
  isDebug = false,
  toneMapping = ACESFilmicToneMapping,
  outputEncoding = sRGBEncoding,
  physicallyCorrectLights = true,
  shadowMap = true,
  shadowMapType = PCFShadowMap,
  antialias = true,
  background = new Color("white"),
  mainLoop = () => {},
} = {}) => {
  let debug;
  isDebug ? (debug = console.log) : (debug = (e) => {});

  const scene = new Scene();

  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new WebGLRenderer({
    antialias: antialias,
  });
  renderer.toneMapping = toneMapping;
  renderer.outputEncoding = outputEncoding;
  renderer.physicallyCorrectLights = physicallyCorrectLights;
  renderer.shadowMap.enabled = shadowMap;
  renderer.shadowMap.type = shadowMapType;
  renderer.setClearColor(background, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.setAnimationLoop(function animate() {
    renderer.render(scene, camera);
  });

  fullScreen ? renderer.setSize(window.innerWidth, window.innerHeight) : null;
  border ? (style.border = "10px dotted green") : null;
  isOrbitController ? new OrbitControls(camera, renderer.domElement) : null;

  return {
    scene,
    camera,
    renderer,
  };
};
