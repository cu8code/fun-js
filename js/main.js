"use strict";

import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  Color,
  GridHelper,
} from "three";
import { h, render } from "preact";
import { Engine } from "./engin.js";
import { addElementsToScene } from "./helper.js";


const loop = () => {


}

const main = async () => {
  const { scene, camera, renderer } = Engine({
    isOrbitController: true,
    mainLoop:loop,
  });

  const elements = [
    new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshBasicMaterial({ color: new Color("blue") })
    ),
    new GridHelper(100, 100),
  ];
  addElementsToScene(elements, scene);

  const mainUI = h(
    "h1",
    {
      style: `
      position:absolute;
      width:200px;
      height:${renderer.domElement.height}px;
      background:red;
      `,
      id:"mainUI"
    },
    "yo"
  );

  render(mainUI, document.body);
  
};

main();
