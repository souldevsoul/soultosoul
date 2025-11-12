'use client'

import { useEffect, useRef, useState } from 'react'

export default function SpiralAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerY = canvas.height / 2
      const frequency = 0.02
      const phase = time

      const mouseInfluence = {
        x: (mousePos.x / canvas.width) * 2 - 1,
        y: (mousePos.y / canvas.height) * 2 - 1
      }

      const baseAmplitude = 40
      const mouseAmplitude = Math.sqrt(mouseInfluence.x ** 2 + mouseInfluence.y ** 2) * 30

      // Draw multiple wave layers (BLACK)
      const waves = [
        { offset: 0, opacity: 0.8, width: 3 },
        { offset: Math.PI / 2, opacity: 0.4, width: 2 },
        { offset: Math.PI, opacity: 0.2, width: 1.5 }
      ]

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 0, 0, ${wave.opacity})`
        ctx.lineWidth = wave.width

        for (let x = 0; x < canvas.width; x++) {
          const distanceToMouse = Math.abs(x - mousePos.x)
          const mouseEffect = Math.max(0, 1 - (distanceToMouse / 200))
          const amplitude = baseAmplitude + (mouseAmplitude * mouseEffect)

          const y = centerY +
                    Math.sin(x * frequency + phase + wave.offset) * amplitude +
                    (mouseInfluence.y * 20 * mouseEffect)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      // Draw spinning circular lines that follow mouse (continuous spin)
      const spinCount = 5
      for (let i = 0; i < spinCount; i++) {
        const angle = (time * 1.5) + (i * Math.PI * 2 / spinCount) // Faster continuous spin
        const radius = 80 + i * 25

        let x = canvas.width / 2 + Math.cos(angle) * radius
        let y = centerY + Math.sin(angle) * radius

        const distToMouse = Math.sqrt((x - mousePos.x) ** 2 + (y - mousePos.y) ** 2)
        const mouseEffect = Math.max(0, 1 - (distToMouse / 300))

        // Add mouse influence as offset, not replacement
        const mouseOffsetX = (mousePos.x - canvas.width / 2) * mouseEffect * 0.2
        const mouseOffsetY = (mousePos.y - centerY) * mouseEffect * 0.2

        x += mouseOffsetX
        y += mouseOffsetY

        const size = 3 + mouseEffect * 3 // Grow near mouse

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${0.7 - i * 0.1 + mouseEffect * 0.2})`
        ctx.fill()
      }

      // Draw pulsing dots along main wave
      const dotCount = 8
      for (let i = 0; i < dotCount; i++) {
        const x = (canvas.width / dotCount) * i
        const distanceToMouse = Math.abs(x - mousePos.x)
        const mouseEffect = Math.max(0, 1 - (distanceToMouse / 200))
        const amplitude = baseAmplitude + (mouseAmplitude * mouseEffect)

        const y = centerY +
                  Math.sin(x * frequency + phase) * amplitude +
                  (mouseInfluence.y * 20 * mouseEffect)

        const pulseSize = (3 + mouseEffect * 3) + Math.sin(time * 2 + i) * 1

        ctx.beginPath()
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${0.8 + mouseEffect * 0.2})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [mousePos])

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={200}
      className={`w-full transition-opacity duration-1000 pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        maxWidth: '1200px',
        maxHeight: '200px',
        margin: '0 auto',
        display: 'block'
      }}
    />
  )
}
