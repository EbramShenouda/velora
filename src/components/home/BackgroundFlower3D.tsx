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
    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 4.4, 7.6);
    camera.lookAt(0, 0.2, 0);

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

    // Lighting specifically calibrated for a soft, velvety Pink Rose
    const ambientLight = new THREE.AmbientLight(0xfff5f7, 0.95);
    scene.add(ambientLight);

    const dirLightMain = new THREE.DirectionalLight(0xffe8ed, 1.35);
    dirLightMain.position.set(5, 9, 6);
    scene.add(dirLightMain);

    const pointLightRose = new THREE.PointLight(0xe87a90, 1.25, 20);
    pointLightRose.position.set(-4, 3, 4);
    scene.add(pointLightRose);

    // Master Group for the Pink Rose
    const roseGroup = new THREE.Group();
    scene.add(roseGroup);

    // 1. Botanical Green Stem & Sepals at the bottom of the Rose
    const sepalMat = new THREE.MeshStandardMaterial({
      color: 0x24442e,
      roughness: 0.6,
      side: THREE.DoubleSide,
    });
    const sepalGeo = new THREE.ConeGeometry(0.22, 1.1, 5);
    sepalGeo.rotateX(Math.PI / 2);
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const sepal = new THREE.Mesh(sepalGeo, sepalMat);
      sepal.position.set(Math.cos(angle) * 0.45, -0.35, Math.sin(angle) * 0.45);
      sepal.rotation.y = angle;
      sepal.rotation.x = 0.55;
      roseGroup.add(sepal);
    }

    // 2. Central Golden Stamens & Pistil Core
    const coreGeo = new THREE.SphereGeometry(0.38, isMobile ? 16 : 24, isMobile ? 16 : 24);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.35,
      metalness: 0.3,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.scale.set(1, 0.65, 1);
    coreMesh.position.y = 0.05;
    roseGroup.add(coreMesh);

    // Delicate golden filament rings inside the rose heart
    const stamenCount = isMobile ? 16 : 26;
    const stamenGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.42, 5);
    const stamenMat = new THREE.MeshStandardMaterial({ color: 0xedd07b, roughness: 0.3 });
    for (let s = 0; s < stamenCount; s++) {
      const stAngle = (s / stamenCount) * Math.PI * 2;
      const stMesh = new THREE.Mesh(stamenGeo, stamenMat);
      stMesh.position.set(Math.cos(stAngle) * 0.4, 0.22, Math.sin(stAngle) * 0.4);
      stMesh.rotation.z = Math.cos(stAngle) * 0.32;
      stMesh.rotation.x = Math.sin(stAngle) * 0.32;
      roseGroup.add(stMesh);
    }

    // 3. Realistic Layered Rose Petals (Curved spoon-form with velvety pink gradient)
    // 5 Concentric Layers from tight spiral heart to outer blooming petals:
    // - Layer 0: Core bud (deep rose pink: #cf4d6b)
    // - Layer 1: Inner swirl (warm magenta rose: #de6480)
    // - Layer 2: Mid petals (vibrant petal rose: #ea8299)
    // - Layer 3: Outer petals (soft blush pink: #f4aab8)
    // - Layer 4: Outermost guard petals (delicate baby rose: #fcd5dd)
    const roseRingsConfig = [
      { count: 5,  scale: 0.72, color: 0xd04868, minTilt: 0.12, maxTilt: 0.48, yOffset: 0.14, widthScale: 0.75 },
      { count: 7,  scale: 0.94, color: 0xdd5d7b, minTilt: 0.20, maxTilt: 0.78, yOffset: 0.08, widthScale: 0.88 },
      { count: 9,  scale: 1.18, color: 0xe87a93, minTilt: 0.28, maxTilt: 1.08, yOffset: 0.02, widthScale: 1.02 },
      { count: 11, scale: 1.42, color: 0xf19db0, minTilt: 0.36, maxTilt: 1.34, yOffset: -0.04, widthScale: 1.18 },
      { count: 13, scale: 1.66, color: 0xfbc2cd, minTilt: 0.45, maxTilt: 1.55, yOffset: -0.09, widthScale: 1.32 },
    ];

    // Sculpted organic spoon-shaped curved rose petal geometry
    const petalGeo = new THREE.SphereGeometry(0.72, isMobile ? 14 : 22, isMobile ? 14 : 22);
    petalGeo.scale(0.72, 1.42, 0.18);
    petalGeo.translate(0, 0.82, 0);

    interface RosePetalLayer {
      pivot: THREE.Group;
      petalMesh: THREE.Mesh;
      mat: THREE.MeshStandardMaterial;
      baseColor: THREE.Color;
      solemnColor: THREE.Color;
      minTilt: number;
      maxTilt: number;
      curlAngle: number;
    }

    const petalLayers: RosePetalLayer[] = [];

    roseRingsConfig.forEach((ring, rIdx) => {
      const petalMat = new THREE.MeshStandardMaterial({
        color: ring.color,
        roughness: 0.42, // Velvety rose texture
        metalness: 0.04,
        side: THREE.DoubleSide,
      });

      for (let i = 0; i < ring.count; i++) {
        // Natural golden ratio spiral offset for realistic rose petal packing
        const angle = (i / ring.count) * Math.PI * 2 + (rIdx * 0.65);
        const pivot = new THREE.Group();
        pivot.position.y = ring.yOffset;
        pivot.rotation.y = angle;

        const petalMesh = new THREE.Mesh(petalGeo, petalMat);
        petalMesh.scale.set(ring.scale * ring.widthScale, ring.scale, ring.scale * 0.95);
        
        // Characteristic rose petal curve
        petalMesh.rotation.z = (Math.random() - 0.5) * 0.12;
        pivot.add(petalMesh);

        roseGroup.add(pivot);
        petalLayers.push({
          pivot,
          petalMesh,
          mat: petalMat,
          baseColor: new THREE.Color(ring.color),
          solemnColor: new THREE.Color(0xdde3ea), // Pure solemn silver moonlight rose
          minTilt: ring.minTilt,
          maxTilt: ring.maxTilt,
          curlAngle: (i % 2 === 0 ? 0.08 : -0.08),
        });
      }
    });

    // 4. Shimmering Rose & Gold Pollen Dust
    const particleCount = isMobile ? 40 : 80;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 13;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xf5a3b5,
      size: 0.065,
      transparent: true,
      opacity: 0.55,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Scroll Handler (maps scroll to 12% - 100% bloom)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(Math.max(scrollY / docHeight, 0), 1);
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

      if (roseGroup) {
        // Continuous gentle rotation + scroll rotation
        roseGroup.rotation.y = time + smoothRatio * Math.PI * 1.35;
        roseGroup.position.x = Math.sin(smoothRatio * Math.PI * 2) * 1.05;
        roseGroup.position.y = Math.cos(smoothRatio * Math.PI) * 0.32;
        roseGroup.rotation.z = Math.sin(time * 2) * 0.07;
        roseGroup.rotation.x = 0.38 - smoothRatio * 0.22;

        // Unfold rose petals dynamically as user scrolls down
        const currentIsSolemn = isSolemnRef.current;
        petalLayers.forEach((layer) => {
          const targetRotX = layer.minTilt + (layer.maxTilt - layer.minTilt) * smoothRatio;
          layer.petalMesh.rotation.x = targetRotX;
          layer.petalMesh.rotation.y = layer.curlAngle * smoothRatio;

          // Color lerp between velvety pink rose and solemn silver rose
          const targetColor = currentIsSolemn ? layer.solemnColor : layer.baseColor;
          layer.mat.color.lerp(targetColor, 0.05);
        });

        // Adjust lighting smoothly
        if (currentIsSolemn) {
          dirLightMain.color.lerp(new THREE.Color(0xdce7f5), 0.05);
          pointLightRose.color.lerp(new THREE.Color(0x94a3b8), 0.05);
        } else {
          dirLightMain.color.lerp(new THREE.Color(0xffe8ed), 0.05);
          pointLightRose.color.lerp(new THREE.Color(0xe87a90), 0.05);
        }
      }

      if (particles) {
        particles.rotation.y -= 0.0005;
        particles.position.y = smoothRatio * 1.1;
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
      sepalGeo.dispose();
      sepalMat.dispose();
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
      {/* Fullscreen Fixed Three.js Rose Canvas */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className={`fixed inset-0 w-screen h-screen z-0 pointer-events-none transition-filter duration-700 ${className}`}
      />

      {/* Floating Bottom-Left Pink Rose Status Pill */}
      <div className="fixed bottom-5 left-5 z-30 pointer-events-auto select-none">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-botanical-950/85 backdrop-blur-xl border border-white/15 text-white shadow-2xl text-xs">
          <span
            className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              isSolemnMode ? 'bg-stone-300' : 'bg-pink-400'
            }`}
          />
          <span className="font-medium tracking-wide">
            Rosa Rosa 3D • Sboccio:{' '}
            <strong className="text-petal font-mono">{bloomPercent}%</strong>
          </span>
          <span
            className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-semibold ${
              isSolemnMode ? 'bg-white/20 text-stone-200' : 'bg-pink-900/60 text-pink-200 border border-pink-400/30'
            }`}
          >
            {isSolemnMode ? 'Luce Argentea' : 'Rosa Botanica'}
          </span>
        </div>
      </div>
    </>
  );
};
