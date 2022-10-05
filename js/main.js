"use strict";
import { Mesh, BoxGeometry, MeshBasicMaterial, Color } from "three";

import { Engine } from "./engin.js";

const main = async () => {
  const app = Engine({
    isOrbitController:true
  });

  const cube = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: new Color("red") })
  );
  app.scene.add(cube);
};

main();
