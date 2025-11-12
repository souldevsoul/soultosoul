'use client'

import { useEffect, useRef, useState } from 'react'

export function FlowingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Setup canvas - flowing lines extending to the right
    const width = 1400
    const height = 700
    canvas.width = width
    canvas.height = height

    // Reveal animation
    setTimeout(() => {
      setIsVisible(true)
    }, 800)

    // Slow, calm flowing line animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time += isHovered ? 0.015 : 0.008 // Very slow, calm movement

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      const centerY = height / 2
      const hoverMultiplier = isHovered ? 1.3 : 1

      // Draw gentle flowing sine waves with warm colors
      // Primary wave - warm beige/tan
      ctx.strokeStyle = `rgba(212, 175, 139, ${isHovered ? 0.9 : 0.7})`
      ctx.lineWidth = isHovered ? 2.5 : 2
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      ctx.beginPath()
      for (let x = 0; x < width; x += 2) {
        const y = centerY +
          Math.sin((x * 0.006) + time) * 50 * hoverMultiplier +
          Math.sin((x * 0.012) + time * 1.3) * 25 * hoverMultiplier +
          Math.cos((x * 0.009) + time * 0.8) * 18 * hoverMultiplier

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Secondary wave - slightly lighter
      ctx.strokeStyle = `rgba(230, 200, 170, ${isHovered ? 0.7 : 0.5})`
      ctx.lineWidth = 1.8
      ctx.beginPath()
      for (let x = 0; x < width; x += 2) {
        const y = centerY +
          Math.sin((x * 0.006) + time + 1.2) * 42 * hoverMultiplier +
          Math.sin((x * 0.012) + time * 1.1) * 22 * hoverMultiplier +
          Math.cos((x * 0.009) + time * 1.0) * 15 * hoverMultiplier

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Tertiary wave - most subtle
      ctx.strokeStyle = `rgba(245, 220, 195, ${isHovered ? 0.5 : 0.35})`
      ctx.lineWidth = 1.3
      ctx.beginPath()
      for (let x = 0; x < width; x += 2) {
        const y = centerY +
          Math.sin((x * 0.006) + time + 2.4) * 35 * hoverMultiplier +
          Math.sin((x * 0.012) + time * 0.9) * 18 * hoverMultiplier +
          Math.cos((x * 0.009) + time * 1.4) * 12 * hoverMultiplier

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Gentle rotating circles for depth
      const circleCount = isHovered ? 4 : 3
      for (let i = 0; i < circleCount; i++) {
        const angle = (time * 0.3) + (i * Math.PI * 2 / circleCount)
        const radius = 90 + i * 35
        const opacity = isHovered ? 0.3 : 0.18

        ctx.strokeStyle = `rgba(212, 175, 139, ${opacity})`
        ctx.lineWidth = 1.2
        ctx.beginPath()

        for (let a = 0; a < Math.PI * 2; a += 0.08) {
          const x = width / 2 + Math.cos(a + angle) * radius
          const y = centerY + Math.sin(a + angle) * radius * 0.4

          if (a === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.stroke()
      }

      // Soft pulsing dots along the main wave
      const dotCount = isHovered ? 12 : 8
      for (let i = 0; i < dotCount; i++) {
        const x = (width / dotCount) * i + ((time * 25) % (width / dotCount))
        const y = centerY +
          Math.sin((x * 0.006) + time) * 50 * hoverMultiplier +
          Math.sin((x * 0.012) + time * 1.3) * 25 * hoverMultiplier +
          Math.cos((x * 0.009) + time * 0.8) * 18 * hoverMultiplier

        const pulseSize = (isHovered ? 3.5 : 2.5) + Math.sin(time * 1.5 + i) * 0.8

        ctx.fillStyle = `rgba(212, 175, 139, ${isHovered ? 0.9 : 0.7})`
        ctx.beginPath()
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovered])

  return (
    <div
      className={`absolute top-1/2 right-[-10%] -translate-y-1/2 transition-all duration-1500 ${
        isVisible ? 'opacity-30' : 'opacity-0'
      }`}
      style={{
        overflow: 'visible',
        pointerEvents: 'auto',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="w-[1400px] h-[700px]"
        style={{
          filter: 'blur(0.5px)',
        }}
      />
    </div>
  )
}
