import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useCatalog } from '../../context/CatalogContext';

interface BackgroundFlower3DProps {
  className?: string;
}

export const BackgroundFlower3D: React.FC<BackgroundFlower3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSolemnMode } = useCatalog();
  const [bloomPercent, setBloomPercent] = useState<number>(12);

  const targetScrollRatioRef = useRef<number>(0.12);
  const smoothScrollRatioRef = useRef<number>(0.12);
  const isSolemnRef = useRef<boolean>(isSolemnMode);

  // Sync ref with context
  useEffect(() => {
    isSolemnRef.current = isSolemnMode;
  }, [isSolemnMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mobile device detection for performance optimization
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 4.2, 7.8);
    camera.lookAt(0, 0.1, 0);

    // Renderer with optimized settings for mobile battery & GPU
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2.0));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 0.9);
    scene.add(ambientLight);

    const dirLightMain = new THREE.DirectionalLight(0xffe6d5, 1.3);
    dirLightMain.position.set(6, 10, 6);
    scene.add(dirLightMain);

    const pointLightWarm = new THREE.PointLight(0xd97f6c, 1.15, 22);
    pointLightWarm.position.set(-4, 3, 4);
    scene.add(pointLightWarm);

    // Group for flower
    const flowerGroup = new THREE.Group();
    scene.add(flowerGroup);

    // Golden Stamens Core
    const coreGeo = new THREE.SphereGeometry(0.52, isMobile ? 18 : 32, isMobile ? 18 : 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.scale.set(1, 0.58, 1);
    flowerGroup.add(coreMesh);

    // Stamen Filaments
    const stamenCount = isMobile ? 18 : 28;
    const stamenGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.55, 6);
    const stamenMat = new THREE.MeshStandardMaterial({ color: 0xe5c158, roughness: 0.3 });
    for (let s = 0; s < stamenCount; s++) {
      const stAngle = (s / stamenCount) * Math.PI * 2;
      const stMesh = new THREE.Mesh(stamenGeo, stamenMat);
      stMesh.position.set(Math.cos(stAngle) * 0.52, 0.2, Math.sin(stAngle) * 0.52);
      stMesh.rotation.z = Math.cos(stAngle) * 0.35;
      stMesh.rotation.x = Math.sin(stAngle) * 0.35;
      flowerGroup.add(stMesh);
    }

    // 4 Concentric Petal Rings (Spoon-shaped curved petals)
    const ringsConfig = [
      { count: 6, scale: 0.78, color: 0xe28777, minTilt: 0.18, maxTilt: 0.58, yOffset: 0.08 },
      { count: 8, scale: 1.02, color: 0xedb0a3, minTilt: 0.25, maxTilt: 0.88, yOffset: 0.04 },
      { count: 11, scale: 1.28, color: 0xf5d4cc, minTilt: 0.32, maxTilt: 1.18, yOffset: 0.0 },
      { count: 13, scale: 1.52, color: 0xfaf0ec, minTilt: 0.40, maxTilt: 1.44, yOffset: -0.05 },
    ];

    const petalGeo = new THREE.SphereGeometry(0.75, isMobile ? 14 : 22, isMobile ? 14 : 22);
    petalGeo.scale(0.62, 1.55, 0.14);
    petalGeo.translate(0, 0.85, 0);

    interface PetalLayer {
      pivot: THREE.Group;
      petalMesh: THREE.Mesh;
      mat: THREE.MeshStandardMaterial;
      baseColor: THREE.Color;
      solemnColor: THREE.Color;
      minTilt: number;
      maxTilt: number;
    }

    const petalLayers: PetalLayer[] = [];

    ringsConfig.forEach((ring, rIdx) => {
      const petalMat = new THREE.MeshStandardMaterial({
        color: ring.color,
        roughness: 0.38,
        metalness: 0.06,
      });

      for (let i = 0; i < ring.count; i++) {
        const angle = (i / ring.count) * Math.PI * 2 + rIdx * 0.42;
        const pivot = new THREE.Group();
        pivot.position.y = ring.yOffset;
        pivot.rotation.y = angle;

        const petalMesh = new THREE.Mesh(petalGeo, petalMat);
        petalMesh.scale.setScalar(ring.scale);
        pivot.add(petalMesh);

        flowerGroup.add(pivot);
        petalLayers.push({
          pivot,
          petalMesh,
          mat: petalMat,
          baseColor: new THREE.Color(ring.color),
          solemnColor: new THREE.Color(0xe2e8f0),
          minTilt: ring.minTilt,
          maxTilt: ring.maxTilt,
        });
      }
    });

    // Floating Golden Pollen Particles
    const particleCount = isMobile ? 40 : 85;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 14;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.065,
      transparent: true,
      opacity: 0.55,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Scroll Handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(Math.max(scrollY / docHeight, 0), 1);
      // Map global scroll to bloom (12% to 100%)
      const calculatedRatio = 0.12 + ratio * 0.88;
      targetScrollRatioRef.current = calculatedRatio;
      setBloomPercent(Math.round(calculatedRatio * 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Window Resize Handler
    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth interpolation of scroll ratio
      smoothScrollRatioRef.current += (targetScrollRatioRef.current - smoothScrollRatioRef.current) * 0.06;
      const smoothRatio = smoothScrollRatioRef.current;

      const time = Date.now() * 0.00035;

      if (flowerGroup) {
        // Continuous gentle rotation + scroll rotation
        flowerGroup.rotation.y = time + smoothRatio * Math.PI * 1.35;
        flowerGroup.position.x = Math.sin(smoothRatio * Math.PI * 2) * 1.1;
        flowerGroup.position.y = Math.cos(smoothRatio * Math.PI) * 0.35;
        flowerGroup.rotation.z = Math.sin(time * 2) * 0.08;
        flowerGroup.rotation.x = 0.35 - smoothRatio * 0.25;

        // Open petals based on scroll ratio
        const currentIsSolemn = isSolemnRef.current;
        petalLayers.forEach((layer) => {
          const targetRotX = layer.minTilt + (layer.maxTilt - layer.minTilt) * smoothRatio;
          layer.petalMesh.rotation.x = targetRotX;

          // Color lerp between warm botanical and solemn silver
          const targetColor = currentIsSolemn ? layer.solemnColor : layer.baseColor;
          layer.mat.color.lerp(targetColor, 0.05);
        });

        // Adjust light colors smoothly
        if (currentIsSolemn) {
          dirLightMain.color.lerp(new THREE.Color(0xdbeafe), 0.05);
          pointLightWarm.color.lerp(new THREE.Color(0x94a3b8), 0.05);
        } else {
          dirLightMain.color.lerp(new THREE.Color(0xffe6d5), 0.05);
          pointLightWarm.color.lerp(new THREE.Color(0xd97f6c), 0.05);
        }
      }

      if (particles) {
        particles.rotation.y -= 0.0006;
        particles.position.y = smoothRatio * 1.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      stamenGeo.dispose();
      stamenMat.dispose();
      petalGeo.dispose();
      petalLayers.forEach((l) => l.mat.dispose());
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {/* Fullscreen Fixed Canvas Container */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className={`fixed inset-0 w-screen h-screen z-0 pointer-events-none transition-filter duration-700 ${className}`}
      />

      {/* Floating Bottom-Left 3D Bloom Status Pill */}
      <div className="fixed bottom-5 left-5 z-30 pointer-events-auto select-none">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-botanical-950/85 backdrop-blur-xl border border-white/15 text-white shadow-2xl text-xs">
          <span
            className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              isSolemnMode ? 'bg-amber-300' : 'bg-clay'
            }`}
          />
          <span className="font-medium tracking-wide">
            Fiore 3D Background • Apertura:{' '}
            <strong className="text-petal font-mono">{bloomPercent}%</strong>
          </span>
          <span
            className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-semibold ${
              isSolemnMode ? 'bg-white/20 text-amber-200' : 'bg-white/10 text-stone-300'
            }`}
          >
            {isSolemnMode ? 'Luce Argentea Solenne' : 'Luce Botanica'}
          </span>
        </div>
      </div>
    </>
  );
};

