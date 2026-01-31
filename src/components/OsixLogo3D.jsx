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

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

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

    // Create chrome/metallic material
    const material = new THREE.MeshStandardMaterial({
      color: 0x888888,
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

    const clock = new THREE.Clock();

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      floatTime += delta * floatSpeed;

      // Floating/bobbing animation
      logoGroup.position.y = Math.sin(floatTime) * floatAmplitude;

      // Subtle rotation when not interacting
      if (!isDragging) {
        logoGroup.rotation.y += delta * 0.2;
      }

      controls.update();
      renderer.render(scene, camera);
    }

    // Track dragging state
    const onPointerDown = () => { isDragging = true; };
    const onPointerUp = () => { isDragging = false; };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);

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
