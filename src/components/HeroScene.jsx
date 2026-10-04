import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const CYAN = '#22D3EE'
const EMERALD = '#10B981'

/** Glowing nodes on a sphere surface + lines connecting nearby nodes. */
function NodeNetwork() {
  const { nodePositions, linePositions } = useMemo(() => {
    const count = 14
    const pts = []
    let seed = 7
    const rand = () => {
      seed = (seed * 16807) % 2147483647
      return seed / 2147483647
    }
    for (let i = 0; i < count; i++) {
      const theta = rand() * Math.PI * 2
      const phi = Math.acos(2 * rand() - 1)
      const r = 1.62
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      )
    }
    const lines = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < 1.5) lines.push(pts[i], pts[j])
      }
    }
    const lineArr = new Float32Array(lines.length * 3)
    lines.forEach((v, i) => lineArr.set([v.x, v.y, v.z], i * 3))
    const nodeArr = new Float32Array(count * 3)
    pts.forEach((v, i) => nodeArr.set([v.x, v.y, v.z], i * 3))
    return { nodePositions: nodeArr, linePositions: lineArr }
  }, [])

  return (
    <group>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={CYAN} transparent opacity={0.28} />
      </lineSegments>
      <Points positions={nodePositions} stride={3}>
        <PointMaterial color={EMERALD} size={0.075} sizeAttenuation transparent opacity={0.95} />
      </Points>
    </group>
  )
}

function OrbitParticles({ count = 320 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    let seed = 21
    const rand = () => {
      seed = (seed * 16807) % 2147483647
      return seed / 2147483647
    }
    for (let i = 0; i < count; i++) {
      const r = 2.3 + rand() * 2.4
      const theta = rand() * Math.PI * 2
      const phi = Math.acos(2 * rand() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={CYAN} size={0.028} sizeAttenuation depthWrite={false} opacity={0.65} />
    </Points>
  )
}

function CoreSphere() {
  const wire = useRef()
  const core = useRef()
  const ring = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (wire.current) {
      wire.current.rotation.y = t * 0.12
      wire.current.rotation.x = Math.sin(t * 0.1) * 0.18
    }
    if (core.current) {
      const s = 1 + Math.sin(t * 1.6) * 0.04
      core.current.scale.setScalar(s)
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.18
      ring.current.rotation.x = Math.PI / 2.3
    }
  })

  return (
    <group>
      <mesh ref={wire}>
        <sphereGeometry args={[1.6, 28, 28]} />
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={core}>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshStandardMaterial
          color={EMERALD}
          emissive={EMERALD}
          emissiveIntensity={0.55}
          roughness={0.3}
          metalness={0.4}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[2.15, 0.012, 12, 110]} />
        <meshBasicMaterial color={EMERALD} transparent opacity={0.45} />
      </mesh>
      <NodeNetwork />
    </group>
  )
}

/** Whole scene tilts subtly toward the pointer. */
function Rig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    if (!group.current) return
    const targetX = state.pointer.y * 0.18
    const targetY = state.pointer.x * 0.28
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(delta * 3, 1)
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(delta * 3, 1)
  })
  return <group ref={group}>{children}</group>
}

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 4, 6]} intensity={1.1} color="#bfefff" />
        <pointLight position={[-5, -3, -4]} intensity={0.6} color={EMERALD} />
        <Suspense fallback={null}>
          <Rig>
            <CoreSphere />
            <OrbitParticles />
          </Rig>
        </Suspense>
      </Canvas>
    </div>
  )
}
