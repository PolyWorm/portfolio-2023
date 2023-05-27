import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function BackgroundAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const bubbles = [];

    // Color Palette
    const colors = [
      new THREE.Color(0,255/255,159/255),
      new THREE.Color(0,184/255,255/255),
      new THREE.Color(0,30/255,255/255),
      new THREE.Color(189/255,0,255/255),
      new THREE.Color(214/255,0,255/255),
    ];

    // Get a random color from the palette
    const randomColorFromPalette = () => {
      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    };

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 100, 100);
      const colorA = randomColorFromPalette();
      const colorB = randomColorFromPalette();
      const uniforms = {
        colorB: { type: 'vec3', value: colorB },
        colorA: { type: 'vec3', value: colorA },
        opacity: { type: 'f', value: 0.5 } // adding opacity uniform here
      };
      const material = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vUv; 

          void main() {
            vUv = position; 
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }`,
        fragmentShader: `
          uniform vec3 colorA; 
          uniform vec3 colorB; 
          varying vec3 vUv;
          uniform float opacity; // accessing opacity uniform here

          void main() {
            gl_FragColor = vec4(mix(colorA, colorB, vUv.z), opacity); // apply opacity to gl_FragColor
          }`,
        uniforms,
        transparent: true,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(Math.random() * 10 - 5, Math.random() * -10 - 1, Math.random() * 10 - 5);
      sphere.velocity = Math.random();
      bubbles.push(sphere);
      scene.add(sphere);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      bubbles.forEach((bubble) => {
        bubble.position.y += bubble.velocity / 100;
        if (bubble.position.y > 10) {
          bubble.position.y = -10;
        }
      });
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
}

export default BackgroundAnimation;
