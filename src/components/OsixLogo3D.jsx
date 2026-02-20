import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function OsixLogo3D() {
  const containerRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;
    initializedRef.current = true;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera - adjust for screen size
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    // Responsive camera distance
    const updateCameraForScreenSize = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      if (width < 640) {
        camera.position.set(0, 0, 9); // Further back on mobile
      } else if (width < 1024) {
        camera.position.set(0, 0, 7.5); // Tablet
      } else {
        camera.position.set(0, 0, 6); // Desktop
      }
    };
    updateCameraForScreenSize();

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);

    // Create pitch black metallic material
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.95,
      roughness: 0.1,
      envMapIntensity: 1.5,
      side: THREE.DoubleSide
    });

    // Create environment map for reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Create a gradient environment
    const envScene = new THREE.Scene();
    const envGeometry = new THREE.SphereGeometry(100, 32, 32);
    const envMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0xffffff) },
        bottomColor: { value: new THREE.Color(0x333333) }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
        }
      `
    });
    envScene.add(new THREE.Mesh(envGeometry, envMaterial));

    const envMap = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envMap;
    material.envMap = envMap;

    // Create logo group
    const logoGroup = new THREE.Group();

    // OSIX Logo: Two interlocking arrow/chevron shapes
    // Using exact coordinates from the SVG, normalized and centered

    // Arrow pointing LEFT (upper position)
    const createLeftArrow = () => {
      const shape = new THREE.Shape();

      // Original coords centered around (46.5, 178.9), scaled by 0.14, Y flipped
      // SVG coords: tip at x=39.1, notch around x=46-47, right edge at x=53.7
      const s = 0.14; // scale factor
      const cx = 46.5, cy = 178.9; // center point

      const transform = (x, y) => [(x - cx) * s, (cy - y) * s];

      const pts = [
        transform(53.7168, 177.064),
        transform(39.4381, 185.189),
        transform(39.1495, 185.021),  // LEFT TIP
        transform(39.1495, 180.983),
        transform(39.1495, 177.232),
        transform(39.4371, 176.734),
        transform(46.3435, 172.747),
        transform(46.6308, 172.67),   // TOP (notch area)
        transform(46.9176, 172.749),
        transform(53.7189, 176.732),
      ];

      shape.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) {
        shape.lineTo(pts[i][0], pts[i][1]);
      }
      shape.closePath();

      return shape;
    };

    // Arrow pointing RIGHT (lower position)
    const createRightArrow = () => {
      const shape = new THREE.Shape();

      const s = 0.14;
      const cx = 56.5, cy = 178.75; // center for right shape

      const transform = (x, y) => [(x - cx) * s, (cy - y) * s];

      const pts = [
        transform(49.2004, 180.63),
        transform(63.4791, 172.505),
        transform(63.763, 172.673),   // RIGHT TIP
        transform(63.7186, 175.831),
        transform(63.7139, 176.495),
        transform(63.7139, 180.555),
        transform(63.4253, 181.051),
        transform(56.5746, 184.949),
        transform(56.2865, 185.024),  // BOTTOM (notch area)
        transform(55.9995, 184.945),
        transform(49.1983, 180.961),
      ];

      shape.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) {
        shape.lineTo(pts[i][0], pts[i][1]);
      }
      shape.closePath();

      return shape;
    };

    // Extrusion settings
    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.06,
      bevelOffset: 0,
      bevelSegments: 4
    };

    // Create left arrow mesh (upper-left position, pointing left)
    const leftShape = createLeftArrow();
    const leftGeometry = new THREE.ExtrudeGeometry(leftShape, extrudeSettings);
    const leftMesh = new THREE.Mesh(leftGeometry, material);
    // Position based on original SVG layout - offset from center
    leftMesh.position.set(-0.7, 0.25, 0);
    logoGroup.add(leftMesh);

    // Create right arrow mesh (lower-right position, pointing right)
    const rightShape = createRightArrow();
    const rightGeometry = new THREE.ExtrudeGeometry(rightShape, extrudeSettings);
    const rightMesh = new THREE.Mesh(rightGeometry, material);
    rightMesh.position.set(0.7, -0.25, 0);
    logoGroup.add(rightMesh);

    // Scale down the logo
    logoGroup.scale.setScalar(0.7);
    scene.add(logoGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-5, -5, 5);
    scene.add(directionalLight2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, 0, -5);
    scene.add(rimLight);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI * 3 / 4;

    // Animation variables
    let floatTime = 0;
    const floatSpeed = 1.5;
    const floatAmplitude = 0.12;
    let isDragging = false;
    let dragStartTime = 0;

    // Explosion effect variables
    let isExploded = false;
    let explosionProgress = 0; // 0 = together, 1 = fully exploded
    const animationSpeed = 0.4; // Same speed for both directions

    // Base positions
    const leftBasePos = new THREE.Vector3(-0.7, 0.25, 0);
    const rightBasePos = new THREE.Vector3(0.7, -0.25, 0);

    // Exploded positions (separated but same orientation - like the logo but apart)
    // Responsive explosion distance
    const getExplosionDistance = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      if (width < 640) return 1.2; // Smaller on mobile
      if (width < 1024) return 1.6; // Tablet
      return 2.0; // Desktop
    };
    let explosionDistance = getExplosionDistance();
    const leftExplodeDir = new THREE.Vector3(-1, 0.6, 0).normalize();
    const rightExplodeDir = new THREE.Vector3(1, -0.6, 0).normalize();

    // Full spins (1 vuelta = 2π) - end at same orientation (multiple of 2π)
    const fullSpins = Math.PI * 2;

    const clock = new THREE.Clock();

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      floatTime += delta * floatSpeed;

      // Animate explosion/reunite
      if (isExploded) {
        explosionProgress = Math.min(explosionProgress + delta * animationSpeed, 1);
      } else {
        explosionProgress = Math.max(explosionProgress - delta * animationSpeed, 0);
      }

      // Separation: starts fast (ease-out) so they don't collide
      const easedSeparation = 1 - Math.pow(1 - explosionProgress, 2);

      // Rotation: smooth ease in-out, both happen together
      const easedSpin = explosionProgress < 0.5
        ? 2 * explosionProgress * explosionProgress
        : 1 - Math.pow(-2 * explosionProgress + 2, 2) / 2;

      // Apply separation to positions
      leftMesh.position.lerpVectors(
        leftBasePos,
        leftBasePos.clone().addScaledVector(leftExplodeDir, explosionDistance),
        easedSeparation
      );
      rightMesh.position.lerpVectors(
        rightBasePos,
        rightBasePos.clone().addScaledVector(rightExplodeDir, explosionDistance),
        easedSeparation
      );

      // Apply rotation (2 full spins, ending at 0 so same orientation)
      const spinAmount = easedSpin * fullSpins;
      leftMesh.rotation.set(0, spinAmount, 0);
      rightMesh.rotation.set(0, -spinAmount, 0);

      // Floating/bobbing animation
      logoGroup.position.y = Math.sin(floatTime) * floatAmplitude;

      // Subtle rotation when not interacting
      if (!isDragging) {
        logoGroup.rotation.y += delta * 0.2;
      }

      controls.update();
      renderer.render(scene, camera);
    }

    // Track dragging vs clicking
    const onPointerDown = () => {
      isDragging = false;
      dragStartTime = Date.now();
    };

    const onPointerUp = () => {
      const dragDuration = Date.now() - dragStartTime;
      // If it was a quick click (not a drag), toggle explosion
      if (dragDuration < 200) {
        isExploded = !isExploded;
      }
      isDragging = false;
    };

    const onPointerMove = () => {
      if (dragStartTime > 0 && Date.now() - dragStartTime > 100) {
        isDragging = true;
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointermove', onPointerMove);

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      updateCameraForScreenSize();
      explosionDistance = getExplosionDistance();
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);

      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      leftGeometry.dispose();
      rightGeometry.dispose();
      material.dispose();
      envMap.dispose();
      pmremGenerator.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0"
      style={{ cursor: 'grab' }}
    />
  );
}
