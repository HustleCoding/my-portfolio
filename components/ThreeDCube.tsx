import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Globe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (canvasRef.current && !canvasRef.current.firstChild) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Gradient textures
    const originalGradient = createGradientTexture([
      "#003366",
      "#33cccc",
      "rgba(111, 19, 192, 0.56)",
    ]);
    const newGradient = createGradientTexture([
      "#4a148c",
      "#673ab7",
      "#9c27b0",
    ]);

    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: newGradient });
    const globe = new THREE.Mesh(sphereGeometry, material);
    scene.add(globe);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      globe.rotation.x += 0.005;
      globe.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      material.dispose();
      sphereGeometry.dispose();
    };
  }, []);

  return <div ref={canvasRef} className="w-full h-[250px] my-8"></div>;

  function createGradientTexture(colors) {
    const gradientCanvas = document.createElement("canvas");
    gradientCanvas.width = 256;
    gradientCanvas.height = 256;
    const context = gradientCanvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, 256, 256);
    colors.forEach((color, index) => {
      gradient.addColorStop(index / (colors.length - 1), color);
    });
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    const texture = new THREE.Texture(gradientCanvas);
    texture.needsUpdate = true;
    return texture;
  }
}
