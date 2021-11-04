import React, { useEffect } from "react";
import * as three from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const Board = (uuid) => {
  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new three.WebGLRenderer({ alpha: true });
  // const renderer = new three.WebGLRenderer();
  const render = (time) => {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  };

  const initialization = () => {
    camera.position.z = 20;
    camera.position.y = 10;
    camera.rotation.x = -Math.PI / 5;

    const objLoader = new OBJLoader();

    objLoader.load(
      "/assets/3d/pawn.obj",
      (obj) => {
        obj.traverse((child) => {
          if (child.material)
            child.material = new three.MeshBasicMaterial({ color: 0xffd32a });
        });
        obj.scale.set(0.25, 0.25, 0.25, 0.25);
        scene.add(obj);
        console.log(obj);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const mtlLoader = new MTLLoader();
    for (let i = 0; i < 36; i++) {
      mtlLoader.load("/assets/3d/mandarin_tile.mtl", (materials) => {
        const objLoader2 = new OBJLoader();
        objLoader2.setMaterials(materials);
        objLoader2.load(
          "/assets/3d/mandarin_tile.obj",
          (obj) => {
            obj.scale.set(15, 15, 15, 15);
            obj.rotation.y = ((Math.PI * i) / 36) * 2;
            scene.add(obj);
            console.log(obj);
          },
          undefined,
          (error) => {
            console.error(error);
          }
        );
      });
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    document.body.appendChild(renderer.domElement);

    render();
  };

  useEffect(() => {
    initialization();
  });

  return (
    <section className="board" id="board">
      interface
    </section>
  );
};

export default Board;
