"use strict";

export const addElementsToScene = (a = [], scene) => {
  for (let i of a) {
    scene.add(i);
  }
};
