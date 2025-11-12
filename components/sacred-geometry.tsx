'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function SacredGeometry() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create sacred geometry - Flower of Life pattern
    const geometry = new THREE.TorusGeometry(1, 0.02, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.6 })

    const circles: THREE.Mesh[] = []
    const circleCount = 7
    const radius = 1.2

    // Center circle
    const centerCircle = new THREE.Mesh(geometry, material)
    scene.add(centerCircle)
    circles.push(centerCircle)

    // 6 surrounding circles (Flower of Life)
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const circle = new THREE.Mesh(geometry, material)
      circle.position.x = Math.cos(angle) * radius
      circle.position.y = Math.sin(angle) * radius
      scene.add(circle)
      circles.push(circle)
    }

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate all circles
      circles.forEach((circle, index) => {
        circle.rotation.x += 0.005
        circle.rotation.y += 0.005

        // Subtle response to mouse
        circle.rotation.x += mouseY * 0.001
        circle.rotation.y += mouseX * 0.001
      })

      // Rotate entire group
      scene.rotation.z += 0.002

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-[200px] mx-auto"
      style={{ maxWidth: '600px' }}
    />
  )
}
