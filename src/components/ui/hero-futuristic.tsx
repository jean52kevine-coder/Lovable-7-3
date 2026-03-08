"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, useAspect } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

const TEXTURE_URL = "https://i.postimg.cc/XYwvXN8D/img-4.png";
const DEPTH_URL = "https://i.postimg.cc/2SHKQh2q/raw-4.webp";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform sampler2D uDepth;
  uniform vec2 uPointer;
  uniform float uProgress;
  uniform float uTime;
  uniform vec3 uScanColor;
  varying vec2 vUv;

  void main() {
    float depth = texture2D(uDepth, vUv).r;

    // Parallax offset based on pointer + depth
    vec2 offset = depth * uPointer * 0.012;
    vec4 color = texture2D(uTexture, vUv + offset);

    // Scan line effect
    float scanPos = uProgress;
    float scanWidth = 0.04;
    float scanDist = abs(vUv.y - scanPos);
    float scanLine = smoothstep(scanWidth, 0.0, scanDist);

    // Halftone dots for scan effect
    float aspect = 1.0;
    vec2 tUv = vec2(vUv.x * aspect, vUv.y);
    vec2 tiling = tUv * 100.0;
    vec2 tiledUv = fract(tiling) - 0.5;
    float dist = length(tiledUv);
    float dot = smoothstep(0.4, 0.38, dist) * depth;

    // Flow effect
    float flow = smoothstep(0.02, 0.0, abs(depth - uProgress));

    // Green scan overlay (Altéra green)
    vec3 scanOverlay = uScanColor * scanLine * 0.5;
    vec3 dotMask = uScanColor * dot * flow * 6.0;

    // Blend
    vec3 final = color.rgb + scanOverlay + dotMask * 0.3;

    // Vignette
    float vig = smoothstep(1.4, 0.5, length(vUv - 0.5) * 2.0);
    final *= vig;

    gl_FragColor = vec4(final, 1.0);
  }
`;

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [rawMap, depthMap] = useTexture([TEXTURE_URL, DEPTH_URL]);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: rawMap },
      uDepth: { value: depthMap },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uScanColor: { value: new THREE.Color("#1DB954") },
    }),
    [rawMap, depthMap]
  );

  const [w, h] = useAspect(300, 300);

  useFrame(({ clock, pointer }) => {
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uProgress.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    uniforms.uPointer.value.lerp(pointer, 0.05);
  });

  const scaleFactor = 0.42;

  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

const Bloom = () => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef<any>(null);

  useEffect(() => {
    import("three/examples/jsm/postprocessing/EffectComposer.js").then(
      ({ EffectComposer }) => {
        import("three/examples/jsm/postprocessing/RenderPass.js").then(
          ({ RenderPass }) => {
            import(
              "three/examples/jsm/postprocessing/UnrealBloomPass.js"
            ).then(({ UnrealBloomPass }) => {
              const comp = new EffectComposer(gl);
              comp.addPass(new RenderPass(scene, camera));
              const bloomPass = new UnrealBloomPass(
                new THREE.Vector2(size.width, size.height),
                0.6,
                0.4,
                0.85
              );
              comp.addPass(bloomPass);
              composer.current = comp;
            });
          }
        );
      }
    );
  }, [gl, scene, camera, size]);

  useFrame(() => {
    if (composer.current) composer.current.render();
  }, 1);

  return null;
};

export function HeroFuturistic() {
  const titleWords = "VOTRE VISION".split(" ");
  const subtitle = "Des sites web qui convertissent. Livrés en 14 jours.";
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(
        () => setVisibleWords((v) => v + 1),
        600
      );
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden" style={{ backgroundColor: "hsl(var(--background))" }}>
      {/* Text overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="text-center mb-4">
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
              {titleWords.map((word, index) => (
                <span
                  key={index}
                  className="heading-display text-5xl md:text-8xl text-white inline-block transition-all duration-700"
                  style={{
                    opacity: index < visibleWords ? 1 : 0,
                    transform:
                      index < visibleWords
                        ? "translateY(0)"
                        : "translateY(100%)",
                    transitionDelay: `${index * 0.07}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <p
            className="font-dm text-lg md:text-xl text-muted-foreground text-center max-w-md transition-all duration-700"
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="font-dm text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          className="text-muted-foreground"
        >
          <rect
            x="1"
            y="1"
            width="18"
            height="28"
            rx="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="10" cy="10" r="2.5" fill="currentColor">
            <animate
              attributeName="cy"
              values="10;18;10"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* 3D Canvas */}
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
          <Bloom />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroFuturistic;
