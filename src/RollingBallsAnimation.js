import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function RollingBallsAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const balls = [];

    const randomPastelColor = () => {
      const base = new THREE.Color(Math.random(), Math.random(), Math.random());
      base.offsetHSL(0.5, 0.6, 0.1);
      return base;
    };

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 100, 100);
      const colorA = randomPastelColor();
      const colorB = randomPastelColor();
      const uniforms = {
        colorB: { type: 'vec3', value: colorB },
        colorA: { type: 'vec3', value: colorA },
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

          void main() {
            gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
          }`,
        uniforms,
        transparent: true,
        opacity: 0.1,
      });
      const ball = new THREE.Mesh(geometry, material);
      ball.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      ball.velocity = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
      balls.push(ball);
      scene.add(ball);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      balls.forEach((ball) => {
        ball.position.add(ball.velocity.clone().multiplyScalar(0.01));
        if (Math.abs(ball.position.x) > 5) {
          ball.velocity.x *= -1;
        }
        if (Math.abs(ball.position.y) > 5) {
          ball.velocity.y *= -1;
        }
        if (Math.abs(ball.position.z) > 5) {
          ball.velocity.z *= -1;
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

export default RollingBallsAnimation;
